/* eslint-disable import/no-anonymous-default-export */
import sgMail from "@sendgrid/mail";
import fs from "fs";
import {getSession} from "next-auth/react";
import path from "path";
import {resolveSafeTypeToFilename} from '../../lib/node-utils';

sgMail.setApiKey(process.env.EMAIL_API_KEY);


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
      const message = "Please see your attached safe note.";
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
      console.log(`sent email to ${session?.user?.email}`);
      res.status(200).json({message : `Email has been sent`});
    } catch (error) {
      console.error(error);
      res.status(500).json({error : "Error sending email"});
    }
  }
  res.end();
};
