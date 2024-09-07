import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";

import Google from "next-auth/providers/google";
import { compare } from "bcryptjs";
import User from "./models/User";
import { connectDB } from "./lib/db";

class InvalidLoginError extends CredentialsSignin {
  code = "Invalid email or password.";
}

class InvalidPasswordError extends CredentialsSignin {
  code = "Password did not match";
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",

      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;
        const { email, password } = credentials;

        if (!email || !password) {
          throw new NextAuth.CredentialsSignin("Please enter your email and password.");
        }
        await connectDB();
        user = await User.findOne({ email }).select("+password +role");

        if (!user || !user.password) {
          throw new InvalidLoginError();
        }

        const isPasswordValid = await compare(password, user.password);
        if (!isPasswordValid) {
          throw new InvalidPasswordError();
        }

        const userData = {
          id: user._id,
          name: user.firstName,
          image: user.image,
          email: user.email,
          role: user.role,
        };

        return userData;
      },
    }),
    Google,
  ],
  pages: {
    signIn: "/sign-in",
  },
  callbacks: {
    async session({ session, token }) {
      if (token?.sub && token?.role) {
        session.user.id = token.sub;
        session.user.role = token.role;
        session.user.name = token.name;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },

    signIn: async ({ account }) => {
      if (account?.provider === "credentials" || account?.provider === "google") {
        return true;
      }
      return false;
    },
  },
});
