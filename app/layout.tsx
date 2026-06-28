import type { Metadata } from "next";
import { Inter, Prompt, Sarabun, Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import 'react-medium-image-zoom/dist/styles.css';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const prompt = Prompt({ weight: ["400", "600", "700"], subsets: ["thai"], variable: "--font-prompt" });
const sarabun = Sarabun({ weight: ["400", "500"], subsets: ["thai"], variable: "--font-sarabun" });
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-fira-code" });

export const metadata: Metadata = {
  title: "Tanabut Watayakone | Portfolio",
  description: "Digital Portfolio of Tanabut Watayakone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html lang="th">
      <body className={`${inter.variable} ${prompt.variable} ${sarabun.variable} ${firaCode.variable} font-sans bg-gray-50 text-gray-900`}>
        
        <div className="flex min-h-screen flex-col">
          
          <Navbar />

          <main className="flex-grow w-full max-w-5xl mx-auto p-6">
            {children}
          </main>

          <Footer />
          
        </div>
      </body>
    </html>
  );
}