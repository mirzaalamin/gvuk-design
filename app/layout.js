import { Geist, Geist_Mono, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import localFont from 'next/font/local'
import Footer from "@/components/Footer/Footer";
import { ThemeProvider } from "@/context/Theme";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const helvetica = localFont({
  src: './fonts/helvetica.ttf',
  variable: '--font-helvetica',
  weight: '100 200 300 400 500 600 700 800 900',
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "GVUK Design",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${helvetica.variable} ${openSans.variable} antialiased`}
      >
        <ThemeProvider attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange>
          <div>
            <Header />
          </div>
          {children}
          <div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
