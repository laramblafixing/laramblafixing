import type React from "react"
import type { Metadata } from "next"
import { Open_Sans } from "next/font/google"
import "./globals.css"

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  variable: "--font-open-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "La Rambla Fixing - Reparación de Smartphones",
  description: "Taller de reparación de smartphones, impresión 3D y diseño gráfico en La Herradura",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={openSans.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
