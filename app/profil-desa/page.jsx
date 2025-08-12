'use client'

import Head from 'next/head'
import {
    Building2,
    Eye,
    Target,
    TrendingUp,
    Network,
    ArrowRight,
} from 'lucide-react'
import Link from 'next/link'

export default function ProfilDesaPage() {
    const menuItems = [
        {
            title: 'Gambaran Umum',
            description:
                'Sejarah, geografis, dan informasi dasar tentang Desa Cigalontang',
            icon: Eye,
            href: '/profil-desa/gambaran-umum',
            color: 'from-emerald-500 to-emerald-600',
        },
        {
            title: 'Visi & Misi',
            description: 'Visi, misi, dan tujuan pembangunan Desa Cigalontang',
            icon: Target,
            href: '/profil-desa/visi-misi',
            color: 'from-blue-500 to-blue-600',
        },
        {
            title: 'Ekonomi',
            description:
                'Potensi ekonomi, UMKM, dan mata pencaharian masyarakat',
            icon: TrendingUp,
            href: '/profil-desa/ekonomi',
            color: 'from-orange-500 to-orange-600',
        },
        {
            title: 'Struktur Organisasi',
            description: 'Susunan pemerintahan desa dan lembaga penunjang',
            icon: Network,
            href: '/profil-desa/struktur-organisasi',
            color: 'from-teal-500 to-teal-600',
        },
    ]

    return (
        <>
            <Head>
                {/* Title & Meta */}
                <title>Profil Desa Cigalontang - Tasikmalaya</title>
                <meta
                    name='description'
                    content='Profil lengkap Desa Cigalontang, Kecamatan Cigalontang, Kabupaten Tasikmalaya. Berisi informasi sejarah, visi misi, ekonomi, dan struktur organisasi desa.'
                />
                <meta
                    name='keywords'
                    content='Profil Desa Cigalontang, Desa Cigalontang, Visi Misi Desa, Struktur Pemerintahan, Tasikmalaya'
                />
                <meta
                    name='author'
                    content='Pemerintah Desa Cigalontang'
                />

                {/* Open Graph */}
                <meta
                    property='og:title'
                    content='Profil Desa Cigalontang - Tasikmalaya'
                />
                <meta
                    property='og:description'
                    content='Mengenal lebih dekat Desa Cigalontang, Kecamatan Cigalontang, Kabupaten Tasikmalaya.'
                />
                <meta
                    property='og:image'
                    content='/sawah.jpg'
                />
                <meta
                    property='og:url'
                    content='https://desa-cigalontang.vercel.app/profil-desa'
                />
                <meta
                    property='og:type'
                    content='website'
                />

                {/* Twitter Card */}
                <meta
                    name='twitter:card'
                    content='summary_large_image'
                />
                <meta
                    name='twitter:title'
                    content='Profil Desa Cigalontang'
                />
                <meta
                    name='twitter:description'
                    content='Informasi profil, visi misi, ekonomi, dan struktur pemerintahan Desa Cigalontang.'
                />
                <meta
                    name='twitter:image'
                    content='/sawah.jpg'
                />

                {/* Structured Data */}
                <script
                    type='application/ld+json'
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'GovernmentOrganization',
                            name: 'Desa Cigalontang',
                            url: 'https://desa-cigalontang.vercel.app/profil-desa',
                            logo: 'https://desa-cigalontang.vercel.app/logo.png',
                            address: {
                                '@type': 'PostalAddress',
                                streetAddress: 'M2H4+H22, Puspamukti',
                                addressLocality: 'Cigalontang',
                                addressRegion: 'Jawa Barat',
                                postalCode: '46463',
                                addressCountry: 'ID',
                            },
                            description:
                                'Profil resmi Desa Cigalontang, Kecamatan Cigalontang, Kabupaten Tasikmalaya.',
                        }),
                    }}
                />
            </Head>

            <div className='min-h-screen bg-gray-50'>
                {/* Header Section */}
                {/* ... kode header & konten yang kamu sudah buat tetap sama ... */}
                <header className='relative bg-gradient-to-r from-emerald-600 to-emerald-500 h-[50vh] mt-20 text-white overflow-hidden'>
                    {/* Background Dekoratif */}
                    <div className='absolute inset-0 opacity-10 z-0'>
                        <div className='absolute top-0 right-0 w-32 h-32 bg-white rounded-full -mr-16 -mt-16'></div>
                        <div className='absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full -ml-32 -mb-32'></div>
                    </div>

                    {/* Konten Tengah */}
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center w-full px-2 sm:px-4 md:px-6'>
                        <div className='inline-flex items-center justify-center mb-4'>
                            <Building2
                                className='w-10 h-10 md:w-12 md:h-12 text-emerald-200 mr-3'
                                strokeWidth={1.5}
                            />
                            <h1 className='text-3xl md:text-4xl font-bold'>
                                Profil Desa Cigalontang
                            </h1>
                        </div>
                        <p className='text-lg md:text-xl font-medium text-emerald-100 mx-auto max-w-4xl'>
                            Mengenal lebih dekat Desa Cigalontang melalui
                            berbagai aspek mulai dari sejarah, demografi,
                            ekonomi, hingga struktur pemerintahan.
                        </p>
                    </div>
                </header>

                {/* Main Content */}
                <main className='container mx-auto px-4 py-12'>
                    <div className='text-center mb-12'>
                        <h2 className='text-2xl md:text-3xl font-bold text-gray-800 mb-4'>
                            Jelajahi Profil Desa
                        </h2>
                        <p className='text-gray-600 max-w-3xl mx-auto'>
                            Temukan informasi lengkap tentang Desa Cigalontang
                            melalui menu-menu di bawah ini.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'>
                        {menuItems.map((item, index) => {
                            const IconComponent = item.icon
                            return (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className='group block'
                                >
                                    <div className='bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 h-full border border-gray-100'>
                                        <div
                                            className={`w-16 h-16 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                                        >
                                            <IconComponent
                                                className='w-8 h-8 text-white'
                                                strokeWidth={1.5}
                                            />
                                        </div>
                                        <div className='flex-1'>
                                            <h3 className='text-xl font-bold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors duration-300'>
                                                {item.title}
                                            </h3>
                                            <p className='text-gray-600 text-sm leading-relaxed mb-4'>
                                                {item.description}
                                            </p>
                                        </div>
                                        <div className='flex items-center text-emerald-600 text-sm font-medium group-hover:text-emerald-700'>
                                            <span className='mr-2'>
                                                Lihat Detail
                                            </span>
                                            <ArrowRight
                                                className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300'
                                                strokeWidth={2}
                                            />
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </main>
            </div>
        </>
    )
}
