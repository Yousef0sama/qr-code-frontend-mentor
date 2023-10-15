
import Head from "next/head"

export const metadata = {
  title: 'Frontend mentor | QR',
  description: 'qr code genrated by yousef osama from frontend mentor',
  icons:{
    icon: "./icons/favicon.ico?v=4",
    apple: "./icons/apple-touch-icon.png?v=4",
    shortcut: "./icons/apple-touch-icon.png?v=4"
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <body>{children}</body>
    </html>
  )
}
