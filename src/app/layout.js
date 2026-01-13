import {
  Cormorant_Upright,
  Cormorant_Unicase,
  Manrope,
  Inria_Serif,
} from "next/font/google";
import "./globals.css";
import LenisSmoothScroll from "@/components/Lenis";
import localFont from "next/font/local";
import { LoadingProvider } from "@/contexts/LoadingProvider";

// const cormorantUpright = Cormorant_Upright({
//   variable: "--font-cormorant-upright",
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
// });

// const cormorantUnicase = Cormorant_Unicase({
//   variable: "--font-cormorant-unicase",
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
// });

// const manrope = Manrope({
//   variable: "--font-manrope",
//   subsets: ["latin"],
// });

const inria = Inria_Serif({
  variable: "--font-inria",
  weight: "400",
  subsets: ["latin"],
});

const Georgia = localFont({
  src: [
    {
      path: "/fonts/georgia.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-georgia",
});
const bizantheum = localFont({
  src: [
    {
      path: "/fonts/Bizantheum-2.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-bizantheum",
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
        className={` ${Georgia.variable} ${bizantheum.variable} ${inria.variable} antialiased`}
      >
        <LoadingProvider>
          <LenisSmoothScroll />
          {children}
        </LoadingProvider>
      </body>
    </html>
  );
}
