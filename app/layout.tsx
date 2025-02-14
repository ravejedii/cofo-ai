import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import React from "react"
import { JSX } from "react/jsx-runtime"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "COFO.AI - AI-Powered COO & CFO for Growing Businesses",
  description:
    "COFO.AI provides AI-powered Chief Operating Officer and Chief Financial Officer services for businesses under $10M in ARR.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'