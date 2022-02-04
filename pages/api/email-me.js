/* eslint-disable import/no-anonymous-default-export */
import sgMail from "@sendgrid/mail";
import fs from "fs";
import { getSession } from "next-auth/react";
import path from "path";
import { resolveSafeTypeToFilename } from "../../lib/node-utils";
import { businessUserEmail } from "../../phund.config";

sgMail.setApiKey(process.env.EMAIL_API_KEY);
function SplitFromEmailEnv(envVar) {
  const first = envVar.indexOf("<");
  const last = envVar.indexOf(">");
  const email = envVar.substring(first + 1, last);
  const name = envVar.substring(0, first).trim();
  return { name: name, email: email };
}
export default async (req, res) => {
  if (req.method === "POST") {
    try {
      const session = await getSession({ req });
      if (!session) {
        return res.status(403).json({ error: "Not authorized" });
      }
      const from = SplitFromEmailEnv(process.env.FROM_EMAIL);
      const notificationMessage =
        "The following user emailed themselves our SAFE note. You should probably follow up tiger. ;-)\n\n";

      const safeType = process.env.SAFE_TYPE;
      const filename = resolveSafeTypeToFilename(safeType);
      const dirRelativeToPublicFolder = "safes";

      const dir = path.resolve("./public", dirRelativeToPublicFolder);
      const pathToAttachment = `${dir}/${filename}`;
      const attachment = fs.readFileSync(pathToAttachment).toString("base64");
      const message =
        "Hi!\n\nWe're thrilled that you're interested in investing to help us continue our growth. We will reach out shortly.\n\nMeanwhile, please find your requested SAFE note attached.";
      const msg = {
        to: session?.user?.email,
        from: from,
        subject: `Your requested SAFE note.`,
        text: message,
        attachments: [
          {
            content: attachment,
            filename: filename,
            type: "application/pdf",
            disposition: "attachment",
          },
        ],
      };
      await sgMail.send(msg);
      const notificationMsg =
        notificationMessage + ` - Investor email: ${session?.user?.email}`;
      const businessMsg = {
        to: businessUserEmail,
        from: from,
        subject: `Notification of user action`,
        text: notificationMsg,
      };
      await sgMail.send(businessMsg);

      res
        .status(200)
        .json({ message: `Email has been sent and the business notified.` });
    } catch (error) {
      console.error(JSON.stringify(error));
      res.status(500).json({ error: "Error sending email" });
    }
  }
  res.end();
};
