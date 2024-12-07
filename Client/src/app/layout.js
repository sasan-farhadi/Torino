import { yekan } from "@/utils/fonts"
import "./globals.css";
import Layout from "@/components/layout/Layout";

export const metadata = {
  title: "Torino | تورینو",
  description: "برگزار کننده بهترین تورهای داخلی و خارجی",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <link rel="icon" href="/favicon.png" />
      <body className={yekan.className}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}