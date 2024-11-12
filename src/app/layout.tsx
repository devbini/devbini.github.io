import '../css/global.css';

export const metadata = {
  title: '🔐 김찬빈',
  description: '김찬빈 입니다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
