import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { LOGIN_USER } from "@/helpers/gql.request";
import client from "../../../../lib/apolo-client";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  secret: process.env.jwtSecret,
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {

        const user = { id: "1", name: "John Nathan", email: "hoapromizxkdjoksdjfsd" };

        console.log("DEBUG=================credentials", credentials);
        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          console.log("Failed");
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  pages: {
    signIn: "/api/auth/login",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log(
        "DEBUG=================profile, email, credentials",
        profile,
        email,
        credentials
      );
      const isAllowedToSignIn = true;
      if (isAllowedToSignIn) {
        return true;
      } else {
        console.log("DEBUG=================errror");
        // Return false to display a default error message
        return false;
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    // async session({ session, token, user }) {
    //   // session.user.id = token.id;
    //   // session.accessToken = token.accessToken;
    //   return session;
    // },
    // async jwt({ token, user, account, profile }) {
    //   if (user) {
    //     token.id = user.id;
    //   }
    //   if (account) {
    //     token.accessToken = account.access_token;
    //   }
    //   return token;
    // },
  },
});

export { handler as GET, handler as POST };
