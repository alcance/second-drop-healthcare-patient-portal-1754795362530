import './globals.css'

export const metadata = {
  title: 'second-drop-healthcare-patient-portal-1754795362530 - Healthcare Portal',
  description: 'AWesome droping',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  )
}