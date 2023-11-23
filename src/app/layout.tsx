import "./globals.css";
import NextAuthSessionProvider from "@/libs/providers/sessionProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import LoginModal from "@/components/modal/LoginModal";
import EditModal from "@/components/modal/EditModal";
import RegisterModal from "@/components/modal/RegisterModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChirpChat",
  description: "ChirpChat: Connect, Chat, and Share",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <NextAuthSessionProvider>
          <Toaster />
          <RegisterModal />
          <LoginModal />
          <EditModal />
          {children}
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
