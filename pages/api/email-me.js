/* eslint-disable import/no-anonymous-default-export */
import sgMail from "@sendgrid/mail";
import fs from "fs";
import {getSession} from "next-auth/react";
import path from "path";
import {resolveSafeTypeToFilename, sendEmailNotification} from '../../lib/node-utils';

sgMail.setApiKey(process.env.EMAIL_API_KEY);
const businessUserEmail = 'jason@tincre.com'
const notificationMessage = 'The following user emailed themselves our SAFE note. You should probably follow up tiger. ;-)\n\n';
export default async (req, res) => {
  if (req.method === "POST") {
    try {
      const session = await getSession({req});
      if (!session) {
        return res.status(403).json({error : "Not authorized"});
      }
      const safeType = process.env.SAFE_TYPE;
      const filename = resolveSafeTypeToFilename(safeType);
      const dirRelativeToPublicFolder = "safes";

      const dir = path.resolve("./public", dirRelativeToPublicFolder);
      const pathToAttachment = `${dir}/${filename}`;
      const attachment = fs.readFileSync(pathToAttachment).toString("base64");
      const message = "Hi!\n\nWe're thrilled that you're interested in investing to help us continue our growth. We will reach out shortly.\n\nMeanwhile, please find your requested SAFE note attached.";
      const msg = {
        to : session?.user?.email,
        from : process.env.FROM_EMAIL,
        subject : `Your requested SAFE note.`,
        text : message,
        attachments : [
          {
            content : attachment,
            filename : filename,
            type : "application/pdf",
            disposition : "attachment",
          },
        ],
      };
      await sgMail.send(msg);
      const notificatWasSent = await sendEmailNotification(businessUserEmail, notificationMessage + `  - Investor email: ${session?.user?.email}`);
      if (notificatWasSent) {
        res.status(200).json({message: `Email has been sent and the business notified.`});
       
      }
      else {
        res.status(200).json({message: `Email has been sent`});
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({error : "Error sending email"});
    }
  }
  res.end();
};