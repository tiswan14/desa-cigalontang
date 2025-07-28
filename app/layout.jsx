import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/Footer'
import AOSProvider from './components/AOSProvider'

// Konfigurasi font Poppins
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
            <body className={`${poppins.variable} antialiased`}>
                <Navbar />
                <AOSProvider />
                {children}
                <Footer />
            </body>
        </html>
    )
}
