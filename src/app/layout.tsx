import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ConfigProvider } from "antd";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { antdTheme } from "@/theme";
import { OpenSauceOne } from "@/assets/font";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gen Capita",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={OpenSauceOne.className}>
        <ConfigProvider theme={antdTheme}>
          <AntdRegistry>{children}</AntdRegistry>
        </ConfigProvider>
      </body>
    </html>
  );
}
