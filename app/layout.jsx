import { Inter } from "next/font/google";
import "./styles/globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

import { ThemeProvider } from "@/components/Theme/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SunYong Portfolio",
  description: "커뮤니케이션으로 성장을 즐기는 프론트엔드 개발자 전선용입니다.",
  icons: {
    icon: "/favicon/favicon.ico",
  },
  keywords: "전선용 포트폴리오",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
