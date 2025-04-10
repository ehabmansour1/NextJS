import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID || "",
      clientSecret: process.env.AUTH_GOOGLE_SECRET || "",
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      // Allows callback URLs from the specified domain
      else if (new URL(url).origin === "https://next-js-sigma-murex.vercel.app")
        return url;
      return baseUrl;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
