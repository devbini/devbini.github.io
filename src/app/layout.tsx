import '../css/global.css';

export const metadata = {
  title: '🌊 김찬빈입니다.',
  description: '이력서와 포트폴리오를 간단히 확인할 수 있도록 되어있습니다.',
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
