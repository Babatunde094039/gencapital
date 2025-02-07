import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ConfigProvider } from "antd";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { antdTheme } from "@/theme";
import { OpenSauceOne } from "@/utils/font";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GENCAPITA",
  description: "Smart Investing",
  other: {
    'facebook-domain-verification': 'oceqxa7q5oxm76twasjt7q82tferrf',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${OpenSauceOne.className} !bg-[#FFFFFF]`}>
        <ConfigProvider theme={antdTheme}>
          <AntdRegistry>{children}</AntdRegistry>
        </ConfigProvider>
      </body>
    </html>
  );
}
