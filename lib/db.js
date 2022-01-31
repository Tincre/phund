import { Prisma } from "@prisma/client";
import prisma from "./prisma";

/**
 * Create a new user session in the database
 *
 * @param sessionId the sessionId of the to-be created userSession; must be
 unique
 * @param email the email of the to-be created user; may be undefined
 *
 * @returns boolean true if the user session was created, false otherwise
 */
export async function createUserSession(sessionId, email) {
  try {
    await prisma.userSession.create({
      data: { email: email || null, sessionId: sessionId },
    });
    return true;
  } catch (error) {
    console.log(`Error in createUserSession ${error?.message}`);
    // https://www.prisma.io/docs/concepts/components/prisma-client/handling-exceptions-and-errors/
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        console.log(
          `There is a unique constraint violation for ${error.message} and the user cannot be created.`
        );
      }
      return false;
    } else {
      throw error;
    }
  }
}

/**
 * Query a user session via a `sessionId`
 * @param sessionId A sessionId of a user session in the database.
 * @returns User session or null if the sessionId is not found.
 */
export async function queryUserBySessionId(sessionId) {
  console.log(`Running queryUserBySessionId for ${sessionId}`);
  const res = await prisma.userSession.findUnique({
    where: { sessionId: sessionId },
  });
  // TODO Remove logs
  console.log(JSON.stringify(res));
  return res;
}

/**
 * Update a user session via its sessionId with the given data to update.
 *
 * @param sessionId the string sessionId of the user session
 * @param data an object with keys present in the `UserSession` schema
 * @returns boolean true if updated successfully, false otherwise.
 */
export async function updateUserSession(sessionId, data) {
  try {
    await prisma.userSession.update({
      where: { sessionId: sessionId },
      data: data,
    });
    return true;
  } catch (error) {
    console.error(`Error in updateUserSession ${error.message}`);
    return false;
  }
}
