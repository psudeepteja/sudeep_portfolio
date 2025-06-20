import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sudeep Portfolio App",
  description: "Created by Sudeep Teja",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark:bg-gray-950 ">
      <body className={`${inter.className} dark:bg-gray-950 dark:text-[#fff]`}>
        <div className="container mx-auto px-4 ">
        <Header />
        {children}
        <ScrollToTop />
        </div>
        </body>
    </html>
  );
}
