import {PrismaAdapter} from "@next-auth/prisma-adapter"
import {PrismaClient} from "@prisma/client"
import NextAuth from "next-auth"
import EmailProvider from "next-auth/providers/email"

const prisma = new PrismaClient()

export default NextAuth({
  adapter : PrismaAdapter(prisma),
  secret : process.env.NEXTAUTH_SECRET,
  providers : [
    EmailProvider({
      server : process.env.MAILSERVER,
      from : 'investor.tincre.com <no-reply@investor.tincre.com>',
      maxAge : 600, // in seconds
    }),
  ],
})
