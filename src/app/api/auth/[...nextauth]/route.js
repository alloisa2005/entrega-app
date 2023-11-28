import { connectDB } from "@/db/connectDB";
import User from "@/models/user";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {

        const { email, password } = credentials;

        try {
          await connectDB();
          const user = await User.findOne({ email });

          if(!user) return null;

          const passwordCoincide = await bcrypt.compare(password, user.password);

          if(!passwordCoincide) return null;


          return user;
        } catch (error) {
          console.log('ERROR LOGIN: ', error);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/user/login",
  },    
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
