import clsx from "clsx";
import "@/styles/globals.css";
import { Inter, Lexend, Gochi_Hand } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });
const gochiHand = Gochi_Hand({
  subsets: ["latin"],
  variable: "--font-gochi-hand",
  weight: "400",
});

export default function App({ Component, pageProps }: any) {
  return (
    <main
      className={clsx(
        "font-sans",
        inter.variable,
        lexend.variable,
        gochiHand.variable
      )}
    >
      <Component {...pageProps} />
    </main>
  );
}
