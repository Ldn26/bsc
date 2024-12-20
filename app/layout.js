import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BSC",
  description: "Get the latest news and updates on the Binance Smart Chain",
};
const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
   
   
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
           <Header/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
