import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Վազգեն և Միլենա",
  description: "Վազգեն և Միլենա",
  openGraph: {
    title: "Վազգենի և Միլենայի հարսանեկան հրավիրատոմս",
    description: "Հարսանեկան հրավիրատոմս",
    url: "https://vazgen-milena.vercel.app",
    siteName: "Վազգեն և Միլենա",
    images: [
      {
        url: "/img1.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ whiteSpace: "pre-line" }}
      >
        {children}
      </body>
    </html>
  );
}
