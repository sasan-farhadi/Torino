import { yekan } from "@/core/utils/fonts"
import "./globals.css";
import Layout from "@/components/layout/Layout";
import TanstackQueryProvider from "@/components/partials/provider/TanstackQueryProvider";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Torino | تورینو",
  description: "برگزار کننده بهترین تورهای داخلی و خارجی",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <link rel="icon" href="/favicon.png" />
      <body className={yekan.className}>
        <TanstackQueryProvider>
          <Layout>
            {children}
            <Toaster />
          </Layout>
        </TanstackQueryProvider>
      </body>
    </html>
  );
}