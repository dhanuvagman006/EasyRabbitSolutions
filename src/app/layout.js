import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "EasyRabbitSolutions | Premium Software Development",
  description:
    "EasyRabbitSolutions builds premium software, web, and mobile products with high-performance engineering and minimalist design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-white text-black">
        {children}
      </body>
    </html>
  );
}
