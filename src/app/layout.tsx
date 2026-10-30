import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://versell.com.br"),
  title: "Versell | Quem vende no Pix, vende com Versell",
  description: "Conta digital, API de Pix, subcontas e split em uma só plataforma. Receba na hora, todos os dias, e faça a sua operação crescer sem travas.",
  keywords: [
    "Pix",
    "Versell",
    "API Pix",
    "Conta Digital PJ",
    "Split de Pagamentos",
    "Subcontas",
    "Baas Pago",
    "Gateway de Pagamento"
  ],
  authors: [{ name: "Versell Tecnologia LTDA" }],
  icons: {
    icon: "/assets/logo-versell4.svg",
    apple: "/assets/logo_versell.webp",
  },
  openGraph: {
    title: "Versell | Quem vende no Pix, vende com Versell",
    description: "Conta digital, API de Pix, subcontas e split em uma só plataforma.",
    url: "https://versell.com.br",
    siteName: "Versell",
    images: [
      {
        url: "/assets/logo_versell.webp",
        width: 800,
        height: 600,
        alt: "Versell Fintech",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#FAFAFA",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="min-h-screen bg-[#FAFAFA] text-[#111111] antialiased selection:bg-[#D2FB07] selection:text-black">
        {children}
      </body>
    </html>
  );
}

