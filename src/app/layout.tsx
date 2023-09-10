import './globals.css'
import type { Metadata } from 'next'
import { Tenor_Sans, Eczar } from 'next/font/google'
import Navbar from '../components/Navbar';
import classnames from 'classnames';
import { ConfigProvider } from 'antd';

const tenorSans = Tenor_Sans({ subsets: ['latin'], weight: '400' })
// const eczar = Eczar({ subsets: ['latin'], weight: ['500', '700'] })

export const metadata: Metadata = {
  title: 'Busking',
  description: 'Redefine Busking, Resonate with Souls',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={classnames(tenorSans.className)}>
        <ConfigProvider theme={{
          token: {
            // Seed Token
            fontFamily: 'inherit',
            borderRadius: 2,
            colorPrimary: '#F57E03'
          },
        }}>
          <Navbar />
          <main className='page-container'>
            {children}
          </main>
        </ConfigProvider>
      </body>
    </html>
  )
}
