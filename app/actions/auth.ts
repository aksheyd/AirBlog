import type {
    GetServerSidePropsContext,
    NextApiRequest,
    NextApiResponse,
  } from "next"
  import type { NextAuthOptions } from "next-auth"
  import { getServerSession } from "next-auth"
  import GoogleProvider from 'next-auth/providers/google';
  
  // You'll need to import and pass this
  // to `NextAuth` in `app/api/auth/[...nextauth]/route.ts`
  export const config = {
    providers: [
        GoogleProvider({
         clientId: process.env.GOOGLE_ID as string,
         clientSecret: process.env.GOOGLE_SECRET as string,
        }),
     ],
    //  session: {
    //     strategy: 'jwt' as const,
    //  },
    //  secret: process.env.NEXTAUTH_SECRET,

    pages: {
        signIn: '/account',
        signOut: '/account',
    }
  } satisfies NextAuthOptions
  
  // Use it in server contexts
  export function auth(
    ...args:
      | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
      | [NextApiRequest, NextApiResponse]
      | []
  ) {
    return getServerSession(...args, config)
  }