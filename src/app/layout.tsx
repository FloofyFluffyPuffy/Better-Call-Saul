import type { Metadata } from "next";
import { Geist, Geist_Mono, Anton, Archivo_Narrow, Domine, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/code/components/Home/Header/Header";
import { ContextProvider } from "@/code/Contexts/Provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const archivoNarrow = Archivo_Narrow({
  variable: "--font-archivo-narrow",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const domine = Domine({
  variable: "--font-domine",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  weight: "700",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Better Call Saul!",
  description: "#1 Criminal Attorney",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} ${archivoNarrow.variable} ${domine.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ContextProvider>
          <Header/>
          {children}
        </ContextProvider>
        </body>
    </html>
  );
}