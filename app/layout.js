import "./globals.css";
import { Montserrat } from "next/font/google";
import { Archivo_Black } from "next/font/google";

const montserrat_init = Montserrat({
  subsets: ["latin"],
  weight: ["200", "400", "700"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Lungisa Solutions Ltd",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat_init.variable}>{children}</body>
    </html>
  );
}
