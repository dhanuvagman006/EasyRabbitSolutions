import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL('https://easyrabbitsolutions.com'),
  title: {
    default: "EasyRabbitSolutions | Web Design & Custom Software Solutions",
    template: "%s | EasyRabbitSolutions"
  },
  description:
    "Looking for a premium website or custom software? EasyRabbitSolutions provides top-tier web design, mobile app development, and high-performance software solutions to elevate your business.",
  keywords: [
    "website design", 
    "software solutions", 
    "web development", 
    "mobile app development", 
    "custom software", 
    "UI/UX design", 
    "tech agency", 
    "build a website"
  ],
  authors: [{ name: "EasyRabbitSolutions" }],
  creator: "EasyRabbitSolutions",
  openGraph: {
    title: "EasyRabbitSolutions | Web Design & Custom Software Solutions",
    description: "Premium web design, mobile app development, and high-performance software solutions to elevate your digital presence.",
    url: "https://easyrabbitsolutions.com",
    siteName: "EasyRabbitSolutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EasyRabbitSolutions | Web Design & Software Solutions",
    description: "Premium web design, mobile app development, and high-performance software solutions.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
