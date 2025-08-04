import React from 'react'
import {
    MapPin,
    Compass,
    Mountain,
    Ruler,
    CloudRain,
    LandPlot,
    Users,
    MapPinned,
    Landmark,
} from 'lucide-react'

const GambaranUmumPage = () => {
    const penggunaanLahan = [
        ['Sawah', '196,2 Ha'],
        ['Kolam', '5,8 Ha'],
        ['Perkebunan', '3,5 Ha'],
        ['Tegal/Ladang', '151,424 Ha'],
        ['Pemukiman', '21,25 Ha'],
        ['Lain-lain', '3,32 Ha'],
    ]

    const batasWilayah = [
        ['Utara', 'Kabupaten Garut (Kehutanan)'],
        ['Timur', 'Desa Sirnaraja'],
        ['Selatan', 'Desa Jayapura'],
        ['Barat', 'Desa Puspamukti'],
    ]

    const wilayahAdministratif = [
        ['Kedusunan I – Cigalontang', '3 RW / 9 RT'],
        ['Kedusunan II – Panyandungan', '2 RW / 6 RT'],
        ['Kedusunan III – Cigalontang Girang', '3 RW / 9 RT'],
    ]

    return (
        <div className='bg-gradient-to-br from-emerald-50 to-white'>
            <header className='relative bg-gradient-to-r from-emerald-600 to-emerald-500 h-[40vh] mt-20 text-white overflow-hidden'>
                {/* Background Dekoratif */}
                <div className='absolute inset-0 opacity-10 z-0'>
                    <div className='absolute top-0 right-0 w-32 h-32 bg-white rounded-full -mr-16 -mt-16'></div>
                    <div className='absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full -ml-32 -mb-32'></div>
                </div>

                {/* Konten Tengah */}
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center w-full px-2 sm:px-4 md:px-6'>
                    <div className='inline-flex items-center justify-center mb-4'>
                        <Landmark className='w-10 h-10 md:w-12 md:h-12 text-emerald-200 mr-3' />

                        <h1 className='text-3xl md:text-4xl font-bold'>
                            Gambaran Umum Desa
                        </h1>
                    </div>

                    <p className='text-lg md:text-xl font-medium text-emerald-100 mx-auto max-w-4xl'>
                        Desa Cigalontang merupakan salah satu desa di Kecamatan
                        Cigalontang yang memiliki kekayaan alam, pembagian
                        wilayah, serta kondisi geografis yang mendukung
                        kehidupan masyarakat.
                    </p>

                    {/* Breadcrumb */}
                    <nav
                        className='mt-6 flex justify-center items-center text-sm font-medium text-emerald-100'
                        aria-label='Breadcrumb'
                    >
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
                        <span className='text-white'>Gambaran Umum</span>
                    </nav>
                </div>
            </header>

            <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid lg:grid-cols-2 gap-8 mb-12'>
                        <div
                            data-aos='fade-up'
                            className='bg-white rounded-2xl shadow-lg p-8 border-l-4 border-emerald-500 hover:shadow-xl transition-shadow duration-300'
                        >
                            <div className='flex items-center mb-6'>
                                <div className='w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4'>
                                    <MapPin className='h-6 w-6 text-emerald-600' />
                                </div>
                                <h2 className='text-2xl font-semibold text-gray-800'>
                                    Lokasi & Luas Wilayah
                                </h2>
                            </div>

                            <div className='mb-6 p-4 bg-emerald-50 rounded-lg'>
                                <p className='text-gray-700 text-lg'>
                                    Luas Wilayah:{' '}
                                    <span className='font-bold text-emerald-700 text-xl'>
                                        537,6 Ha
                                    </span>
                                </p>
                            </div>

                            <div>
                                <h3 className='font-semibold text-emerald-700 mb-4 text-lg'>
                                    Penggunaan Lahan:
                                </h3>
                                <div className='space-y-3'>
                                    {penggunaanLahan.map(
                                        ([label, value], index) => (
                                            <div
                                                key={index}
                                                className='flex justify-between items-center py-3 px-4 bg-gray-50 rounded-lg hover:bg-emerald-50 transition-colors duration-200'
                                            >
                                                <span className='text-gray-700 font-medium'>
                                                    {label}
                                                </span>
                                                <span className='font-semibold text-emerald-700 bg-white px-3 py-1 rounded-full text-sm'>
                                                    {value}
                                                </span>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>

                        <div
                            data-aos='fade-up'
                            data-aos-delay='100'
                            className='bg-white rounded-2xl shadow-lg p-8 border-l-4 border-emerald-500 hover:shadow-xl transition-shadow duration-300'
                        >
                            <div className='flex items-center mb-6'>
                                <div className='w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4'>
                                    <Compass className='h-6 w-6 text-emerald-600' />
                                </div>
                                <h2 className='text-2xl font-semibold text-gray-800'>
                                    Batas Wilayah Desa
                                </h2>
                            </div>
                            <div className='space-y-4'>
                                {batasWilayah.map(([arah, lokasi], index) => (
                                    <div
                                        key={index}
                                        className='flex items-center p-4 bg-gray-50 rounded-lg hover:bg-emerald-50 transition-colors duration-200'
                                    >
                                        <div className='w-20 h-8 bg-emerald-500 text-white rounded-lg flex items-center justify-center text-sm font-semibold mr-4'>
                                            {arah}
                                        </div>
                                        <span className='text-gray-700 font-medium flex-1'>
                                            {lokasi}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div
                            data-aos='fade-up'
                            data-aos-delay='200'
                            className='bg-white rounded-2xl shadow-lg p-8 border-l-4 border-emerald-500 hover:shadow-xl transition-shadow duration-300'
                        >
                            <div className='flex items-center mb-6'>
                                <div className='w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4'>
                                    <Mountain className='h-6 w-6 text-emerald-600' />
                                </div>
                                <h2 className='text-2xl font-semibold text-gray-800'>
                                    Topografi & Iklim
                                </h2>
                            </div>

                            <div className='space-y-4'>
                                <div className='flex items-center p-4 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-lg'>
                                    <div className='w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center mr-4'>
                                        <Ruler className='h-5 w-5 text-white' />
                                    </div>
                                    <div>
                                        <p className='text-gray-600 text-sm'>
                                            Ketinggian
                                        </p>
                                        <p className='font-semibold text-emerald-700'>
                                            ±700 meter di atas permukaan laut
                                        </p>
                                    </div>
                                </div>

                                <div className='flex items-center p-4 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-lg'>
                                    <div className='w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-4'>
                                        <CloudRain className='h-5 w-5 text-white' />
                                    </div>
                                    <div>
                                        <p className='text-gray-600 text-sm'>
                                            Curah Hujan
                                        </p>
                                        <p className='font-semibold text-blue-700'>
                                            1200–1500 mm per tahun
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            data-aos='fade-up'
                            data-aos-delay='300'
                            className='bg-white rounded-2xl shadow-lg p-8 border-l-4 border-emerald-500 hover:shadow-xl transition-shadow duration-300'
                        >
                            <div className='flex items-center mb-6'>
                                <div className='w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4'>
                                    <LandPlot className='h-6 w-6 text-emerald-600' />
                                </div>
                                <h2 className='text-2xl font-semibold text-gray-800'>
                                    Jarak Administratif
                                </h2>
                            </div>

                            <div className='space-y-4'>
                                <div className='flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-emerald-50 transition-colors duration-200'>
                                    <span className='text-gray-700 font-medium'>
                                        Jarak ke Ibu Kota Kecamatan
                                    </span>
                                    <span className='font-bold text-emerald-700 bg-white px-4 py-2 rounded-full'>
                                        7 km
                                    </span>
                                </div>
                                <div className='flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-emerald-50 transition-colors duration-200'>
                                    <span className='text-gray-700 font-medium'>
                                        Jarak ke Kabupaten
                                    </span>
                                    <span className='font-bold text-emerald-700 bg-white px-4 py-2 rounded-full'>
                                        34 km
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        data-aos='zoom-in'
                        data-aos-delay='400'
                        className='bg-white rounded-2xl shadow-lg p-8 md:p-12 border-l-4 border-emerald-500'
                    >
                        <div className='flex items-center mb-8'>
                            <div className='w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4'>
                                <Users className='h-6 w-6 text-emerald-600' />
                            </div>
                            <h2 className='text-2xl md:text-3xl font-semibold text-gray-800'>
                                Pembagian Wilayah Administratif
                            </h2>
                        </div>

                        <p className='text-gray-600 mb-8 text-lg'>
                            Desa Cigalontang terdiri dari:
                        </p>

                        <div className='grid md:grid-cols-3 gap-6 mb-8'>
                            {wilayahAdministratif.map(([nama, info], index) => (
                                <div
                                    key={index}
                                    data-aos='fade-up'
                                    data-aos-delay={500 + index * 100}
                                    className='bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-xl border border-emerald-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1'
                                >
                                    <div className='text-center'>
                                        <h3 className='font-semibold text-emerald-800 mb-3 text-lg leading-tight'>
                                            {nama}
                                        </h3>
                                        <div className='inline-block bg-emerald-500 text-white px-4 py-2 rounded-full font-medium'>
                                            {info}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div
                            data-aos='fade-up'
                            data-aos-delay='800'
                            className='bg-gradient-to-r from-emerald-500 to-emerald-600 p-6 rounded-xl text-center'
                        >
                            <p className='text-white text-xl font-semibold'>
                                Total:{' '}
                                <span className='font-bold text-xl'>8 RW</span>{' '}
                                dan{' '}
                                <span className='font-bold text-xl'>24 RT</span>
                            </p>
                        </div>
                    </div>

                    <div
                        className='text-center py-8'
                        data-aos='fade-up'
                        data-aos-delay='900'
                    >
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

export default GambaranUmumPage
