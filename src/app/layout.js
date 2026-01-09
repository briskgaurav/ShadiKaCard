import { Cormorant_Upright, Cormorant_Unicase, Manrope } from "next/font/google";
import "./globals.css";
import LenisSmoothScroll from "@/components/Lenis";

const cormorantUpright = Cormorant_Upright({
  variable: "--font-cormorant-upright",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cormorantUnicase = Cormorant_Unicase({
  variable: "--font-cormorant-unicase",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bhaskar Weds Garima",
  description: "Bhaskar Weds Garima",
  icons: {
    icon: "/3.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${cormorantUpright.variable} ${cormorantUnicase.variable} ${manrope.variable} antialiased`}
      >
        <LenisSmoothScroll />
        {children}
      </body>
    </html>
  );
}
