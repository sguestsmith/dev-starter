import { Inter } from "next/font/google";
import "./globals.css";
import "@contentstack/live-preview-utils/dist/main.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SE Starter",
  description: "Generated by create next app",
};

export function generateStaticParams() {
  return 'en'
}


export default function RootLayout({ children, params: {locale} }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
