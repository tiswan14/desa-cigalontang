import React from 'react'
import { Building2, Users } from 'lucide-react'

const StrukturOrganisasi = () => {
    // Sample data structure - replace with your actual data
    const strukturPemerintahan = [
        {
            kategori: 'Kepala Desa',
            data: [
                {
                    nama: 'Nama Kepala Desa',
                    jabatan: 'Kepala Desa',
                    foto: '/api/placeholder/200/200',
                    sk: 'SK Nomor: 123/2024',
                },
            ],
        },
        {
            kategori: 'Perangkat Desa',
            data: [
                {
                    nama: 'Nama Sekretaris',
                    jabatan: 'Sekretaris Desa',
                    foto: '/api/placeholder/200/200',
                    sk: 'SK Nomor: 124/2024',
                },
                {
                    nama: 'Nama Bendahara',
                    jabatan: 'Bendahara Desa',
                    foto: '/api/placeholder/200/200',
                    sk: 'SK Nomor: 125/2024',
                },
                {
                    nama: 'Nama Kaur 1',
                    jabatan: 'Kaur Pemerintahan',
                    foto: '/api/placeholder/200/200',
                    sk: 'SK Nomor: 126/2024',
                },
                {
                    nama: 'Nama Kaur 2',
                    jabatan: 'Kaur Kesejahteraan',
                    foto: '/api/placeholder/200/200',
                    sk: 'SK Nomor: 127/2024',
                },
            ],
        },
        {
            kategori: 'Kepala Dusun',
            data: [
                {
                    nama: 'Nama Kadus 1',
                    jabatan: 'Kepala Dusun I - Cigalontang',
                    foto: '/api/placeholder/200/200',
                    sk: 'SK Nomor: 128/2024',
                },
                {
                    nama: 'Nama Kadus 2',
                    jabatan: 'Kepala Dusun II - Panyandungan',
                    foto: '/api/placeholder/200/200',
                    sk: 'SK Nomor: 129/2024',
                },
                {
                    nama: 'Nama Kadus 3',
                    jabatan: 'Kepala Dusun III - Cigalontang Girang',
                    foto: '/api/placeholder/200/200',
                    sk: 'SK Nomor: 130/2024',
                },
            ],
        },
    ]

    return (
        <div className='min-h-screen bg-gradient-to-br from-emerald-50 to-white py-20'>
            {/* Header */}
            <header className='bg-gradient-to-r from-emerald-600 to-emerald-500 py-12 text-center text-white relative overflow-hidden'>
                {/* Decorative elements */}
                <div className='absolute inset-0 opacity-10'>
                    <div className='absolute top-0 right-0 w-32 h-32 bg-white rounded-full -mr-16 -mt-16'></div>
                    <div className='absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full -ml-32 -mb-32'></div>
                </div>

                <div className='container mx-auto px-4 relative z-10'>
                    <div className='flex flex-col items-center'>
                        {/* Icon and Title */}
                        <div
                            className='inline-flex items-center justify-center mb-4'
                            data-aos='fade-down'
                        >
                            <Building2
                                className='w-10 h-10 md:w-12 md:h-12 text-emerald-200 mr-3'
                                strokeWidth={1.5}
                            />
                            <h1 className='text-3xl md:text-4xl font-bold'>
                                Struktur Organisasi Desa
                            </h1>
                        </div>

                        {/* Subtitle */}
                        <p
                            className='text-lg md:text-xl font-medium max-w-2xl text-emerald-100'
                            data-aos='fade-down'
                            data-aos-delay='100'
                        >
                            Susunan pemerintahan desa dan lembaga yang menunjang
                            jalannya administrasi serta pelayanan masyarakat.
                        </p>

                        {/* Breadcrumb Navigation */}
                        <nav
                            className='mt-6 flex items-center text-sm font-medium text-emerald-100'
                            aria-label='Breadcrumb'
                            data-aos='fade-right'
                        >
                            <div className='flex items-center'>
                                <a
                                    href='/'
                                    className='hover:text-white transition-colors duration-200'
                                >
                                    Beranda
                                </a>
                                <svg
                                    className='w-4 h-4 mx-2'
                                    fill='currentColor'
                                    viewBox='0 0 20 20'
                                >
                                    <path
                                        fillRule='evenodd'
                                        d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                                        clipRule='evenodd'
                                    />
                                </svg>
                            </div>
                            <div className='flex items-center'>
                                <a
                                    href='/profil-desa'
                                    className='hover:text-white transition-colors duration-200'
                                >
                                    Profil Desa
                                </a>
                                <svg
                                    className='w-4 h-4 mx-2'
                                    fill='currentColor'
                                    viewBox='0 0 20 20'
                                >
                                    <path
                                        fillRule='evenodd'
                                        d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                                        clipRule='evenodd'
                                    />
                                </svg>
                            </div>
                            <span className='text-white'>
                                Struktur Organisasi
                            </span>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
                <div className='max-w-7xl mx-auto space-y-12'>
                    {/* Introduction */}
                    <div className='bg-white rounded-2xl shadow-lg p-8 border-l-4 border-emerald-500'>
                        <div className='flex items-center mb-6'>
                            <div className='w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4'>
                                <Users className='h-6 w-6 text-emerald-600' />
                            </div>
                            <h2 className='text-2xl font-semibold text-gray-800'>
                                Struktur Pemerintahan Desa
                            </h2>
                        </div>
                        <p className='text-gray-700 text-lg leading-relaxed'>
                            Berikut adalah struktur lengkap pemerintahan Desa
                            Cigalontang yang terdiri dari kepala desa, perangkat
                            desa, dan kepala dusun yang bertugas melayani
                            masyarakat dengan dedikasi dan profesionalisme.
                        </p>
                    </div>
                    {/* Structure Sections */}
                    {strukturPemerintahan.map((section, index) => (
                        <div
                            key={index}
                            className='bg-white rounded-2xl shadow-lg p-8 border-l-4 border-emerald-500'
                        >
                            {/* Section Header */}
                            <div className='mb-8'>
                                <h3 className='text-2xl md:text-3xl font-semibold text-gray-800 mb-2'>
                                    {section.kategori}
                                </h3>
                                <div className='w-24 h-1 bg-emerald-500 rounded-full'></div>
                            </div>

                            {/* Cards Grid */}
                            <div
                                className={`grid gap-6 ${
                                    section.kategori === 'Kepala Desa'
                                        ? 'justify-center lg:grid-cols-1 max-w-md mx-auto'
                                        : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                                }`}
                            >
                                {section.data.map((pejabat, idx) => (
                                    <div
                                        key={idx}
                                        className={`bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-xl hover:border-emerald-200 transition-all duration-300 hover:-translate-y-1 ${
                                            section.kategori === 'Kepala Desa'
                                                ? 'scale-110'
                                                : ''
                                        }`}
                                    >
                                        <div className='flex flex-col items-center text-center'>
                                            {/* Profile Photo */}
                                            <div className='mb-6 relative'>
                                                <div className='w-24 h-24 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center border-4 border-white shadow-lg'>
                                                    <Users className='h-12 w-12 text-emerald-600' />
                                                </div>
                                                {/* Status Indicator */}
                                                <div className='absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white'></div>
                                            </div>

                                            {/* Name & Position */}
                                            <div className='mb-4'>
                                                <h4 className='text-lg font-bold text-gray-800 mb-2'>
                                                    {pejabat.nama}
                                                </h4>
                                                <div className='bg-emerald-100 px-4 py-2 rounded-full'>
                                                    <p className='text-emerald-700 text-sm font-medium'>
                                                        {pejabat.jabatan}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* SK Number if available */}
                                            {pejabat.sk && (
                                                <div className='w-full'>
                                                    <div className='bg-gray-100 px-3 py-2 rounded-lg'>
                                                        <p className='text-xs text-gray-600 font-medium'>
                                                            {pejabat.sk}
                                                        </p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    {/* Additional Info */}={/* Decorative Bottom Element */}
                    <div className='text-center py-8'>
                        <div className='inline-flex items-center space-x-2 text-emerald-600'>
                            <div className='w-12 h-px bg-emerald-300'></div>
                            <div className='w-3 h-3 bg-emerald-500 rounded-full'></div>
                            <div className='w-12 h-px bg-emerald-300'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StrukturOrganisasi
