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

export default function EkonomiPage() {
    return (
        <div className='min-h-screen bg-gradient-to-b from-emerald-50 to-white py-20'>
            {/* Header Section */}
            <header className='bg-gradient-to-r from-emerald-600 to-emerald-500 py-12 text-center text-white'>
                <div className='container mx-auto px-4'>
                    <h1
                        className='text-3xl md:text-4xl font-bold mb-2'
                        data-aos='fade-down'
                    >
                        Ekonomi Desa Cigalontang
                    </h1>
                    <p
                        className='text-lg md:text-xl font-medium max-w-2xl mx-auto'
                        data-aos='fade-down'
                        data-aos-delay='100'
                    >
                        Gambaran umum tingkat kesejahteraan, pekerjaan utama,
                        dan arah pembangunan ekonomi.
                    </p>

                    {/* Breadcrumb */}
                    <div
                        className='mt-4'
                        data-aos='fade-right'
                    >
                        <nav
                            className='flex justify-center items-center text-sm text-white/80 space-x-2'
                            aria-label='Breadcrumb'
                        >
                            <a
                                href='/'
                                className='hover:text-white hover:underline font-medium transition'
                            >
                                Beranda
                            </a>
                            <span>/</span>
                            <a
                                href='/profil-desa'
                                className='hover:text-white hover:underline font-medium transition'
                            >
                                Profil Desa
                            </a>
                            <span>/</span>
                            <span className='text-white font-semibold'>
                                Ekonomi
                            </span>
                        </nav>
                    </div>
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
