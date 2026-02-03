import { Inria_Serif, Noto_Serif } from "next/font/google";
import "./globals.css";
import LenisSmoothScroll from "@/components/Lenis";
import localFont from "next/font/local";
import { LoadingProvider } from "@/contexts/LoadingProvider";

const inria = Inria_Serif({
  variable: "--font-inria",
  weight: "400",
  subsets: ["latin"],
});

const NotoSerif = Noto_Serif({
  variable: "--font-notoserif",
  weight: "400",
  style: ["normal","italic"],
  subsets: ["latin"],
   display: 'swap',
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
        className={`  ${bizantheum.variable} ${inria.variable}  ${NotoSerif.variable} antialiased`}
      >
        <LoadingProvider>
          <LenisSmoothScroll />
          {children}
        </LoadingProvider>
      </body>
    </html>
  );
}
