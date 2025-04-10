"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="auth-button-container">
        <div className="user-info">
          {session.user?.image && (
            // Using img instead of next/image because of Google profile image domain restrictions
            <img
              src={session.user.image}
              alt={session.user?.name || "User"}
              className="user-avatar"
              referrerPolicy="no-referrer"
            />
          )}
          <span className="user-name">{session.user?.name}</span>
        </div>
        <button onClick={() => signOut()} className="sign-out-button">
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <div className="auth-button-container">
      <Link href="/login" className="sign-in-link">
        Sign In
      </Link>
    </div>
  );
}
