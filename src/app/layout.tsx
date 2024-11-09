import { DM_Sans, Imbue, Inter } from "next/font/google";
import "./globals.css";
import { FC } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  style: ["normal"],
  variable: "--font-dm-sans",
  display: "swap",
});

const imbue = Imbue({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["300"],
  variable: "--font-imbue",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  style: ["normal"],
  variable: "--font-inter",
  display: "swap",
});

type Props = {
  children: React.ReactNode;
};

const RootLayout: FC<Props> = (props) => {
  return (
    <html
      lang="en"
      className={`bg-black ${dm_sans.variable} ${imbue.variable} ${inter.variable}`}
    >
      <body className="min-w-[375px]">
        <Nav />
        {props.children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
