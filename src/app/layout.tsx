import type { Metadata } from "next";
import { Poppins, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "900"],
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Yash Vijay | Software Engineer Portfolio",
  description: "A Software Engineer who has developed countless innovative solutions.",
  icons: {
    icon: [
      { url: "/yash.svg", type: "image/svg+xml" },
      { url: "/yash.ico", sizes: "32x32" },
    ],
    apple: "/yash.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${hankenGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-on-surface">
        {children}
      </body>
    </html>
  );
}
