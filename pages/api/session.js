import { nanoid } from "nanoid/async";
import isEmail from "validator/lib/isEmail";

import {
  createUserSession,
  queryUserBySessionId,
  updateUserSession,
} from "../../lib/db";
import { encodeJwt, logApiError } from "../../lib/node-utils";
import prisma from "../../lib/prisma";

async function createId() {
  const id = await nanoid();
  return id;
}

export default async function handler(req, res) {
  try {
    const jwtKey = process.env.SIGNING_PASSPHRASE;
    if (req.method === "GET") {
      console.log("Running GET session request");
      const data = req?.body;
      const { sessionId } = data;
      if (typeof sessionId !== "undefined") {
        const sessionData = await queryUserBySessionId(sessionId);
        console.log(`Session data ${JSON.stringify(sessionData)}`);
        if (typeof sessionData !== "undefined") {
          console.log(`Successfully retrieved ${sessionData.sessionId}`);
          const encoded = encodeJwt(
            {
              sessionId: sessionData.sessionId,
            },
            jwtKey
          );
          res.status(200).json({ token: encoded });
        }
        res.status(200).json();
      } else {
        res.status(200).json();
      }
    }
    if (req.method === "POST") {
      const data = req?.body;
      console.log(`POST: Data are ${JSON.stringify(data)}`);
      const email = isEmail(data?.email || "") ? data.email : null;
      const inputData = {
        sessionId: await createId(),
        email: email,
      };
      const isCreated = await createUserSession(
        inputData.sessionId,
        inputData.email
      );
      if (!isCreated)
        throw new Error(
          `DB User Session was not created for ${inputData.sessionId}`
        );
      const encoded = encodeJwt({ sessionId: inputData.sessionId }, jwtKey);
      res.status(200).json({ token: encoded });
    }
    if (req.method === "PUT") {
      const data = req?.body;
      console.log(`PUT: Data are ${JSON.stringify(data)}`);
      const email = isEmail(data?.email || "") ? data.email : null;
      console.log(`Data are sessionId: ${data?.sessionId} email: ${email}`);
      if (typeof data?.sessionId === "undefined" || !email) {
        console.log(`Not found ${data?.sessionId} ${data?.email}`);
        res.status(404).json();
      }
      const inputData = {
        sessionId: data?.sessionId,
        email: email,
      };
      const isUpdated = await updateUserSession(data?.sessionId, inputData);
      if (!isUpdated)
        throw new Error(
          `DB User Session was not updated for ${data?.sessionId}`
        );
      console.log(`Encoded for update\n${JSON.stringify(inputData)}`);
      const encoded = encodeJwt({ sessionId: data?.sessionId }, jwtKey);
      res.status(200).json({ token: encoded });
    }
  } catch (error) {
    logApiError("/api/session", error);
    res.status(400).json(error);
  } finally {
    prisma.$disconnect;
  }
}
