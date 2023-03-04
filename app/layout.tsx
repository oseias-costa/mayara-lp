// import './globals.css'
import StyledComponentsRegistry from './lib/registry'

export const metadata = {
  title: 'Método Mayara Bechi',
  description: 'Método Mayara Bechi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
