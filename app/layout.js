import "./globals.css";
import { Inter } from "next/font/google";
import Provider from "@/components/Provider";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Damin-GPT",
  description: "Damin GPT clone with next-13",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
