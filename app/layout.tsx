import type { Metadata } from "next";
import { Cormorant_Garamond, Karla } from "next/font/google";
import "./globals.css";
import BackgroundLogo from "@/components/BackgroundLogo";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Little Cookie Cottage | Handmade Custom Sugar Cookies",
    template: "%s | Little Cookie Cottage",
  },
  description:
    "Little Cookie Cottage bakes small-batch, hand-decorated sugar cookies for weddings, birthdays, holidays and every sweet celebration.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${karla.variable} h-full antialiased`}
    >
      <body className="relative flex min-h-full flex-col bg-cream text-cocoa">
        <BackgroundLogo />
        <div className="relative z-10 flex min-h-full flex-1 flex-col">
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
