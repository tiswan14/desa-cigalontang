import {
    Users,
    Sprout,
    ShoppingCart,
    Building2,
    BarChart3,
    UsersRound,
    Hammer,
    HelpingHand,
} from 'lucide-react'

export const metadata = {
    title: 'Ekonomi - Desa Cigalontang',
    description:
        'Gambaran umum tingkat kesejahteraan, pekerjaan utama, dan arah pembangunan ekonomi di Desa Cigalontang.',
}

export default function EkonomiPage() {
    return (
        <div className='min-h-screen bg-gradient-to-b from-emerald-50 to-white py-20'>
            {/* Header Section */}
            <header className='relative bg-gradient-to-r from-emerald-600 to-emerald-500 h-[40vh] text-white overflow-hidden'>
                {/* Background Dekoratif */}
                <div className='absolute inset-0 opacity-10 z-0'>
                    <div className='absolute top-0 right-0 w-32 h-32 bg-white rounded-full -mr-16 -mt-16'></div>
                    <div className='absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full -ml-32 -mb-32'></div>
                </div>

                {/* Konten Tengah */}
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center w-full px-2 sm:px-4 md:px-6'>
                    <div className='inline-flex items-center justify-center mb-4'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-10 h-10 md:w-12 md:h-12 text-emerald-200 mr-3'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        >
                            <path d='M4 4h16v16H4z' />
                            <path d='M9 9h6v6H9z' />
                        </svg>
                        <h1 className='text-3xl md:text-4xl font-bold'>
                            Ekonomi Desa Cigalontang
                        </h1>
                    </div>

                    <p className='text-lg md:text-xl font-medium text-emerald-100 mx-auto max-w-4xl'>
                        Gambaran umum tingkat kesejahteraan, pekerjaan utama,
                        dan arah pembangunan ekonomi.
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
                        <span className='text-white'>Ekonomi</span>
                    </nav>
                </div>
            </header>

            <main className='container mx-auto px-4 py-14'>
                {/* Kesejahteraan Keluarga */}
                <section
                    className='mb-20'
                    data-aos='fade-up'
                >
                    <div className='flex items-center gap-3 mb-6'>
                        <Users className='text-emerald-600 w-6 h-6' />
                        <h2 className='text-2xl font-bold text-emerald-800'>
                            Kesejahteraan Keluarga
                        </h2>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                        {[
                            ['Prasejahtera', '375 KK', '997 Jiwa', 100],
                            ['Prasejahtera I', '331 KK', '1201 Jiwa', 200],
                            ['Sejahtera II', '282 KK', '731 Jiwa', 300],
                            ['Sejahtera III', '135 KK', '427 Jiwa', 400],
                        ].map(([kategori, kk, jiwa, delay], i) => (
                            <div
                                key={i}
                                className='bg-white rounded-xl p-6 shadow text-emerald-800'
                                data-aos='fade-up'
                                data-aos-delay={delay}
                            >
                                <h3 className='text-lg font-semibold'>
                                    {kategori}
                                </h3>
                                <p className='text-2xl font-bold mt-2'>{kk}</p>
                                <p className='text-sm text-gray-500'>{jiwa}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Pekerjaan Penduduk */}
                <section
                    className='mb-20'
                    data-aos='fade-up'
                >
                    <div className='flex items-center gap-3 mb-6'>
                        <BarChart3 className='text-emerald-600 w-6 h-6' />
                        <h2 className='text-2xl font-bold text-emerald-800'>
                            Pekerjaan Penduduk
                        </h2>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {[
                            [
                                'Buruh Tani',
                                '1,532',
                                <Sprout className='text-emerald-600 w-5 h-5 mr-2' />,
                                100,
                            ],
                            [
                                'Petani',
                                '53',
                                <Sprout className='text-emerald-600 w-5 h-5 mr-2' />,
                                150,
                            ],
                            [
                                'Pedagang',
                                '145',
                                <ShoppingCart className='text-emerald-600 w-5 h-5 mr-2' />,
                                200,
                            ],
                            [
                                'PNS / Wiraswasta',
                                '30',
                                <Building2 className='text-emerald-600 w-5 h-5 mr-2' />,
                                250,
                            ],
                            [
                                'Tukang',
                                '45',
                                <Hammer className='text-emerald-600 w-5 h-5 mr-2' />,
                                300,
                            ],
                            [
                                'Lainnya',
                                '±100',
                                <UsersRound className='text-emerald-600 w-5 h-5 mr-2' />,
                                350,
                            ],
                        ].map(([label, jumlah, icon, delay], i) => (
                            <div
                                key={i}
                                className='bg-white rounded-xl p-6 shadow text-emerald-800'
                                data-aos='fade-up'
                                data-aos-delay={delay}
                            >
                                <div className='flex items-center'>
                                    {icon}
                                    <span className='text-sm font-medium text-gray-800'>
                                        {label}
                                    </span>
                                </div>
                                <p className='text-3xl font-bold mt-2'>
                                    {jumlah}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Program Sosial */}
                <section
                    className='mb-20'
                    data-aos='fade-up'
                >
                    <div className='flex items-center gap-3 mb-6'>
                        <HelpingHand className='text-emerald-600 w-6 h-6' />
                        <h2 className='text-2xl font-bold text-emerald-800'>
                            Program Sosial
                        </h2>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                        {/* Raskin */}
                        <div
                            className='bg-white rounded-xl p-6 shadow text-emerald-800'
                            data-aos='fade-up'
                            data-aos-delay='100'
                        >
                            <h3 className='text-lg font-semibold mb-4'>
                                Penyaluran Raskin
                            </h3>
                            <ul className='space-y-3 text-sm'>
                                <li className='flex justify-between'>
                                    <span>Cigalontang</span>
                                    <span className='font-medium'>
                                        65 RTM – 15 kg
                                    </span>
                                </li>
                                <li className='flex justify-between'>
                                    <span>Panyandungan</span>
                                    <span className='font-medium'>
                                        65 RTM – 15 kg
                                    </span>
                                </li>
                                <li className='flex justify-between'>
                                    <span>Cigalontang Girang</span>
                                    <span className='font-medium'>
                                        74 RTM – 15 kg
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* PKH */}
                        <div
                            className='bg-white rounded-xl p-6 shadow text-emerald-800'
                            data-aos='fade-up'
                            data-aos-delay='150'
                        >
                            <h3 className='text-lg font-semibold mb-4'>
                                Penerima PKH
                            </h3>
                            <ul className='space-y-3 text-sm'>
                                <li className='flex justify-between'>
                                    <span>Cigalontang</span>
                                    <span className='font-medium'>21 KK</span>
                                </li>
                                <li className='flex justify-between'>
                                    <span>Panyandungan</span>
                                    <span className='font-medium'>19 KK</span>
                                </li>
                                <li className='flex justify-between'>
                                    <span>Cigalontang Girang</span>
                                    <span className='font-medium'>18 KK</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
