import React from "react";

import LogoutSection from "./LogoutSection";
import { cookies } from "next/headers";

import NotificationSection from "./NotificationSection";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const username = cookies().get("username")?.value || "Guest";

  const token = cookies().get("token")?.value;

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {token && <NotificationSection token={token} />}
        <nav className="flex justify-between items-center p-4 bg-gray-100">
          <span className="text-gray-700">Welcome, {username}!</span>
          <LogoutSection />
        </nav>
        <main className="flex-grow p-4">{children}</main>
      </body>
    </html>
  );
}
