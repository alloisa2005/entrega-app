import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const options = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials) {
        const user = { id: 1, name: "Admin" };
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/user/login",
  },    
};

const handler = NextAuth({
  options,
});

export { handler as GET, handler as POST };
