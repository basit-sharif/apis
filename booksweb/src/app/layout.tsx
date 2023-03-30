import Wrapper from '@/components/shared/Wrapper'
import './globals.css'

export const metadata = {
  title: 'Book House',
  description: 'Implemented as local project',
  // https://preview.colorlib.com/#publishingcompany
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className='scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-slate-300'>
        <Wrapper>
          {children}
        </Wrapper>
      </body>
    </html>
  )
}
