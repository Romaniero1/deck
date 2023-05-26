import './globals.css'
import localFont from '@next/font/local'

const roc = localFont({
  src: [
    {
      path: '../public/fonts/Roc-Grotesk-ExtraBold.otf',
      weight: '750'
    },
    {
      path: '../public/fonts/Roc-Grotesk-Regular.otf',
      weight: '400'
    },
  ],
  variable: '--font-roc-grotesk'
})

export const metadata = {
  title: 'Vittaverse',
  description: 'Vittaverse',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roc.variable} font-sans`}>{children}</body>
    </html>
  )
}
