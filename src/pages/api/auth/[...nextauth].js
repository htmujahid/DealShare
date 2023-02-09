import { createRouter } from "next-connect";
import { database, db } from "@/lib/api/middleware";
import { verifyPassword } from "@/lib/app/user/utils";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default async function auth(req, res) {
  const router = createRouter();

  if (
    req.query.nextauth.includes("credentials") ||
    req.query.nextauth.includes("signin")
  ) {
    router.use(database).use(() => null);
    await router.run(req, res);
  }
  return await NextAuth(req, res, {
    providers: [
      CredentialsProvider({
        async authorize(credentials) {
          const { email, password } = credentials;

          const user = await db.collection("users").findOne({
            email,
          });

          if (!user)
            throw new Error(
              "Account not found. Please create an account to use Dealshare."
            );

          const isPasswordValid = await verifyPassword(password, user.password);
          if (!isPasswordValid)
            throw new Error(
              "Incorrect Password. Please try again with correct credentials."
            );

          return {
            id: user._id.toString(),
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role,
          };
        },
      }),
    ],

    pages: {
      error: "/auth/login",
    },

    session: {
      strategy: "jwt",
    },

    callbacks: {
      async jwt({ token, user }) {
        if (user) {
          token.firstName = user.firstName;
          token.lastName = user.lastName;
          token.role = user.role;
        }

        return token;
      },

      async session({ session, token }) {
        session.user.id = token.sub;
        session.user.firstName = token.firstName;
        session.user.lastName = token.lastName;
        session.user.role = token.role;

        return session;
      },
    },

    debug: true,
    secret: process.env.SECRET,
  });
}
