
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import './globals.css'
import { Metadata } from "next"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metaData: Metadata = {
  title: "MonkeyWrite",
  description: "Ape write together",
  // image: "https://example.com/image.jpg",
  // url: "https://example.com",
}

export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
