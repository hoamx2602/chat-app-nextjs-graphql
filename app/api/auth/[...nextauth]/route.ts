import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
  session: {
    strategy: 'jwt',
  },
  secret: process.env.jwtSecret,
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        console.log(credentials);

        if (true) {
          return {
            id: '1',
            email: 'admin@example.com',
          };
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: '/api/auth/login',
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
  },
});

export { handler as GET, handler as POST };
