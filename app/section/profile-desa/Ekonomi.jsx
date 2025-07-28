'use client'
import Link from 'next/link'
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Facebook,
    Instagram,
    Twitter,
    Heart,
} from 'lucide-react'
import Image from 'next/image'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const navigationLinks = [
        { href: '/', label: 'Beranda' },
        { href: '/profil-desa', label: 'Profil Desa' },
        { href: '/pemerintahan', label: 'Pemerintahan' },
        { href: '/potensi-desa', label: 'Potensi Desa' },
        { href: '/layanan', label: 'Layanan Publik' },
        { href: '/berita', label: 'Berita & Info' },
        { href: '/kontak', label: 'Kontak' },
    ]

    const contactInfo = [
        {
            icon: MapPin,
            content:
                'Jl. Desa Cigalontang No. 1, Kec. Cigalontang, Kab. Tasikmalaya, Jawa Barat',
        },
        {
            icon: Phone,
            content: '(0265) 1234567',
        },
        {
            icon: Mail,
            content: 'pemdescigalontang@gmail.com',
        },
        {
            icon: Clock,
            content: 'Senin-Jumat: 08.00 - 16.00 WIB',
        },
    ]

    const socialLinks = [
        {
            href: 'https://facebook.com/pemdescigalontang',
            icon: Facebook,
            label: 'Facebook',
            color: 'hover:bg-blue-100 hover:text-blue-600',
        },
        {
            href: 'https://instagram.com/pemdescigalontang',
            icon: Instagram,
            label: 'Instagram',
            color: 'hover:bg-pink-100 hover:text-pink-600',
        },
        {
            href: 'https://twitter.com/pemdescigalontang',
            icon: Twitter,
            label: 'Twitter',
            color: 'hover:bg-sky-100 hover:text-sky-600',
        },
        {
            href: 'https://tiktok.com/@pemdescigalontang',
            icon: () => (
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='w-5 h-5'
                >
                    <path d='M16.5 8a6.5 6.5 0 0 0-6.5-6.5v6.5h6.5Z' />
                    <path d='M10 8v8a5 5 0 0 0 5 5h1.5' />
                </svg>
            ),
            label: 'TikTok',
            color: 'hover:bg-purple-100 hover:text-purple-600',
        },
    ]

    return (
        <footer className='bg-gray-800 text-white'>
            <div className='container mx-auto px-4 py-12'>
                {/* Main footer grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12'>
                    {/* Brand and description */}
                    <div className='space-y-6'>
                        <div className='flex items-center'>
                            <div className='p-2 bg-emerald-900/20 rounded-lg mr-3'>
                                <MapPin className='w-6 h-6 text-emerald-400' />
                            </div>
                            <h3 className='text-2xl font-bold text-white'>
                                Desa Cigalontang
                            </h3>
                        </div>
                        <p className='text-gray-300 leading-relaxed'>
                            Portal informasi desa, potensi lokal, dan pelayanan
                            warga berbasis digital untuk kemajuan bersama.
                        </p>

                        {/* Social media */}
                        <div>
                            <h4 className='font-semibold mb-3 text-gray-200'>
                                Ikuti Kami
                            </h4>
                            <div className='flex space-x-3'>
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className={`p-2 bg-gray-800 rounded-full text-white ${social.color.replace(
                                            'hover:bg-',
                                            'hover:bg-gray-700 '
                                        )} transition-all duration-300`}
                                        aria-label={social.label}
                                    >
                                        <social.icon className='w-5 h-5' />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h3 className='text-xl font-bold mb-6 text-white flex items-center'>
                            <span className='w-3 h-3 bg-emerald-400 rounded-full mr-2'></span>
                            Navigasi Cepat
                        </h3>
                        <ul className='space-y-3'>
                            {navigationLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className='group flex items-center text-gray-300 hover:text-emerald-400 transition-colors duration-300'
                                    >
                                        <span className='w-2 h-2 bg-emerald-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></span>
                                        <span className='group-hover:translate-x-1 transition-transform duration-300'>
                                            {link.label}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact info */}
                    <div>
                        <h3 className='text-xl font-bold mb-6 text-white flex items-center'>
                            <span className='w-3 h-3 bg-emerald-400 rounded-full mr-2'></span>
                            Hubungi Kami
                        </h3>
                        <div className='space-y-4'>
                            {contactInfo.map((contact, index) => {
                                const IconComponent = contact.icon
                                return (
                                    <div
                                        key={index}
                                        className='flex items-start group'
                                    >
                                        <div className='p-2 bg-emerald-900/20 rounded-lg mr-3 mt-0.5 flex-shrink-0 group-hover:bg-emerald-900/30 transition-colors duration-300'>
                                            <IconComponent className='w-4 h-4 text-emerald-400' />
                                        </div>
                                        <p className='text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300'>
                                            {contact.content}
                                        </p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* Partnership */}
                    <div className='space-y-4'>
                        <h3 className='text-xl font-bold text-white flex items-center'>
                            <span className='w-3 h-3 bg-emerald-400 rounded-full mr-2'></span>
                            Kolaborasi KKN UNPER
                        </h3>

                        <div className='rounded-xl overflow-hidden bg-gray-800 border border-gray-700 shadow-sm hover:shadow-md transition-all'>
                            <div className='flex flex-col items-center text-center p-4'>
                                <Image
                                    src='/logo-kkn.png'
                                    alt='Logo KKN UNPER'
                                    width={150}
                                    height={150}
                                    className='object-contain mb-3'
                                />
                                <h4 className='font-semibold text-white mb-1'>
                                    KKN UNPER × Desa Cigalontang
                                </h4>
                                <p className='text-xs text-gray-400'>
                                    Kolaborasi membangun desa berbasis teknologi
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className='relative my-8'>
                    <div className='absolute inset-0 flex items-center'>
                        <div className='w-full border-t border-gray-700'></div>
                    </div>
                    <div className='relative flex justify-center'>
                        <div className='bg-gray-900 px-4'>
                            <div className='flex space-x-2'>
                                {[...Array(3)].map((_, i) => (
                                    <div
                                        key={i}
                                        className='w-2 h-2 bg-emerald-400 rounded-full animate-pulse'
                                        style={{
                                            animationDelay: `${i * 0.3}s`,
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className='text-center space-y-2'>
                    <p className='text-gray-400 font-medium'>
                        © {new Date().getFullYear()} Desa Cigalontang. Hak Cipta
                        Dilindungi.
                    </p>
                    <p className='text-sm text-gray-500 flex flex-wrap items-center justify-center gap-x-2 gap-y-1'>
                        <span>Dikembangkan dengan</span>
                        <span className='flex items-center'>
                            <Heart className='w-4 h-4 mx-1 text-emerald-400' />
                            oleh Tim KKN UNPER 2025
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
