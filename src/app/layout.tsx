import type { Metadata } from "next";
import './globals.css';
import { manrope } from "@/utils";
import Sidebar from "@/components/layout/Sidebar";

export const metadata: Metadata = {
  title: "Elearning với MongoDB",
  description: "Khóa học bao gồm những bài học đầy thú vị",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className}`}
      >
        <div className="wrapper grid grid-cols-[300px,minmax(0,1fr)] h-screen">
           <Sidebar></Sidebar>
           <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
