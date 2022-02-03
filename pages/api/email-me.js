/* eslint-disable import/no-anonymous-default-export */
import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.EMAIL_API_KEY);
import fs from "fs";
import {getSession} from "next-auth/react";
import path from "path";
import {resolveSafeTypeToFilename } from '../../lib/node-utils';

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      const session = await getSession({req});
      if (!session) {
        return res.status(403).json({error : "Not authorized"});
      }
      console.log(`Sendgrid: ${process.env.EMAIL_API_KEY}`)

      const businessUserEmail = 'jason@musicfox.io'
      const notificationMessage = 'The following user emailed themselves our SAFE note. You should probably follow up tiger. ;-)\n\n';

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
      console.log('Passed data/setup')
      await sgMail.send(msg);
      const notificationMsg = notificationMessage + `  - Investor email: ${session?.user?.email}`;
      const businessMsg = {
        to: businessUserEmail,
        from: process.env.FROM_EMAIL,
        subject: `Notification from Phund`,
        text: notificationMsg,
      };
      await sgMail.send(businessMsg);

      res.status(200).json({message: `Email has been sent and the business notified.`});
       
    } catch (error) {
      console.error(JSON.stringify(error));
      res.status(500).json({error : "Error sending email"});
    }
  }
  res.end();
};
