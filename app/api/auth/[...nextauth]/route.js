import User from "@/app/models/user";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectedToDB } from "@/utils/database";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],

  callbacks: {
    async session({ session }) {
      const sessionUser = await User.findOne({
        email: session.user.email,
      });
      session.user.id = sessionUser._id.toString();
      return session;
    },

    async signIn({ profile }) {
      try {
        await connectedToDB();

        // check if the user already existing
        const existingUser = await User.findOne({ email: profile.email });

        // if not, create a new user
        if (!existingUser) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture,
          });
          return true;
        }
      } catch (error) {
        console.log(error.message);
      }
    },
  },
});

export { handler as GET, handler as POST };
