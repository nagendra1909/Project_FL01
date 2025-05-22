import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import CustomCursor from "@/components/CustomCursor"
import ClientLayoutWrapper from "./ClientLayoutWrapper"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "Nagendra kumar | Full Stack Developer",
  description:
    "Portfolio of Nagendra kumar, a full stack developer specializing in AI-driven and automation-first applications.",
  keywords: ["developer", "full stack", "react", "next.js", "AI", "portfolio", "Nagendra kumar"],
  authors: [{ name: "Nagendra kumar" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://Nagendrakumar.vercel.app",
    title: "Nagendra kumar | Full Stack Developer",
    description: "Full Stack Developer specializing in AI-driven and automation-first applications",
    siteName: "Nagendra kumar Portfolio",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased w-screen h-screen min-h-screen min-w-screen cursor-none`}>
        <CustomCursor />
        <div className="fixed inset-0 w-screen h-screen z-0 bg-background">
          {/* Background gradient elements for future animation */}
          <div className="absolute top-0 left-0 w-full h-full -z-10" />
        </div>
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  )
}
