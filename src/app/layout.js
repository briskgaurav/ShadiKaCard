import { Inria_Serif} from "next/font/google";
import "./globals.css";
import LenisSmoothScroll from "@/components/Lenis";
import localFont from "next/font/local";
import { LoadingProvider } from "@/contexts/LoadingProvider";

const inria = Inria_Serif({
  variable: "--font-inria",
  weight: "400",
  subsets: ["latin"],
});

const Georgia = localFont({
  src: [
    {
      path: "/fonts/WorstveldSling.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-georgia",
});
const bizantheum = localFont({
  src: [
    {
      path: "/fonts/Bizantheum-2.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-bizantheum",
});



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
