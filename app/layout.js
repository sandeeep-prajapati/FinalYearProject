import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";


import ConditionalNavbar from "@/components/ConditionalNavbar";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <ClerkProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className="min-h-screen bg-black p-4 flex flex-col gap-3">
            <ConditionalNavbar />

            {children}
          </div>
        </body>
      </ClerkProvider>
    </html>
  );
}
