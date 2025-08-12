import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/Footer'
import AOSProvider from './components/AOSProvider'

const poppins = Poppins({
    variable: '--font-poppins',
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
})

export const metadata = {
    title: 'Beranda Desa Cigalontang',
    description:
        'Profil Desa Cigalontang, Kecamatan Cigalontang, Kabupaten Tasikmalaya',
}

export default function RootLayout({ children }) {
    return (
        <html lang='id'>
            <head>
                {/* Meta verifikasi Google Search Console */}
                <meta
                    name='google-site-verification'
                    content='yTJ4nFOAHaNaaQoO6ZjcMBqaluRKCpO-8rqF7rjXu5I'
                />
            </head>
            <body className={`${poppins.variable} antialiased`}>
                <Navbar />
                <AOSProvider />
                {children}
                <Footer />
            </body>
        </html>
    )
}
