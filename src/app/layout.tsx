import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import "./globals.css";
import CustomHeader from "@/components/CustomHeader";
import CustomFootter from "@/components/CustomFooter";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ogame's MyPage",
  description: "緑獺おがめのページです",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={sourceCodePro.className}>
        <CustomHeader />
          {children}
        <CustomFootter />
      </body>
    </html>
  );
}
