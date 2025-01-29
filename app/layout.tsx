import { Navbar } from "@/components/navbar";
import { Metadata, Viewport } from "next";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flixa - با PDFها گپ بزن!",
  description:
    "در Flixa می‌تونی PDFهات رو به AI بدی و درباره محتوای اونا باهاش گپ بزنی.",
  authors: [
    { name: "Reza Shahnazar", url: "https://github.com/rezashahnazar" },
  ],
  creator: "Reza Shahnazar",
  metadataBase: new URL("https://flixa.dev"),
  openGraph: {
    title: "Flixa - با PDFها گپ بزن!",
    description:
      "در Flixa می‌تونی PDFهات رو به AI بدی و درباره محتوای اونا باهاش گپ بزنی.",
    type: "website",
    url: "https://flixa.dev",
    siteName: "Flixa - با PDFها گپ بزن!",
    images: [
      {
        url: "https://flixa.dev/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Flixa - با PDFها گپ بزن!",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flixa - با PDFها گپ بزن!",
    description:
      "در Flixa می‌تونی PDFهات رو به AI بدی و درباره محتوای اونا باهاش گپ بزنی.",
    images: ["https://flixa.dev/opengraph-image"],
  },
};

export const viewport: Viewport = {
  themeColor: "hsl(var(--background))",
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  userScalable: false,
  height: "device-height",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Toaster position="top-center" />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
