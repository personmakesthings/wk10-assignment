
// STYLES
import "./globals.css"
import { Exo } from "next/font/google"
const exo = Exo({ subsets: ["latin"] })


export const metadata = {
  title: "Draggable Elements in React, Using React-Draggable",
  description: "A demonstration of how to use React-Draggable.",
}

// LAYOUT
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={exo.className}>
        {children}
      </body>
    </html>
  )
}
