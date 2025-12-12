export const metadata = {
  title: 'William Andrade Site',
  description: 'Personal website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
