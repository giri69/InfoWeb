import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Topbar from "@/Components/shared/Topbar";
import RightSidebar from "@/Components/shared/RightSidebar";
import Bottombar from "@/Components/shared/Bottombar";
import LeftSidebar from "@/Components/shared/LeftSidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata={
  title:'InfoWeb',
  description:'InfoWeb is a web application helps you to connect and react ively with people around the world.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <Topbar/>
        <main>
          <LeftSidebar/>
          <section className="main-container">
            <div className="w-full max-w-4xl">
                 {children}
            </div>
          </section>
          <RightSidebar/>
        </main>
        <Bottombar/>
        {children}
        </body>
    </html>
    </ClerkProvider>
  );
}
