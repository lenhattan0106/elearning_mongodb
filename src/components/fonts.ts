import { Roboto} from "next/font/google"
import localFont from "next/font/local";

const roboto = Roboto({subsets:["latin"], weight:["400","500","700"],variable:"--font-roboto"})

const geistSans = localFont({
  src: "../app/fonts/GeistMonoVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display:"swap",
});
const geistMono = localFont({
  src: "../app/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export {roboto, geistSans, geistMono}