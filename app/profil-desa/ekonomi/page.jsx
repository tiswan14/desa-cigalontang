import {
    Users,
    Sprout,
    ShoppingCart,
    Building2,
    BarChart3,
    UsersRound,
    Hammer,
    HelpingHand,
    TrendingUp,
    PieChart,
    Gift,
    Home,
    Target,
    Star,
    Award,
    Heart,
    ArrowUpRight,
    Coins,
    Activity,
} from 'lucide-react'

export const metadata = {
    title: 'Ekonomi - Desa Cigalontang',
    description:
        'Gambaran umum tingkat kesejahteraan, pekerjaan utama, dan arah pembangunan ekonomi di Desa Cigalontang.',
}

export default function EkonomiPage() {
    const kesejahteraanData = [
        {
            kategori: 'Prasejahtera',
            kk: '375',
            jiwa: '997',
            icon: <Target className='w-6 h-6' />,
            color: 'from-red-400 to-red-500',
            bgColor: 'bg-red-50',
            textColor: 'text-red-700',
            borderColor: 'border-red-200',
        },
        {
            kategori: 'Prasejahtera I',
            kk: '331',
            jiwa: '1201',
            icon: <TrendingUp className='w-6 h-6' />,
            color: 'from-orange-400 to-orange-500',
            bgColor: 'bg-orange-50',
            textColor: 'text-orange-700',
            borderColor: 'border-orange-200',
        },
        {
            kategori: 'Sejahtera II',
            kk: '282',
            jiwa: '731',
            icon: <Award className='w-6 h-6' />,
            color: 'from-blue-400 to-blue-500',
            bgColor: 'bg-blue-50',
            textColor: 'text-blue-700',
            borderColor: 'border-blue-200',
        },
        {
            kategori: 'Sejahtera III',
            kk: '135',
            jiwa: '427',
            icon: <Star className='w-6 h-6' />,
            color: 'from-emerald-400 to-emerald-500',
            bgColor: 'bg-emerald-50',
            textColor: 'text-emerald-700',
            borderColor: 'border-emerald-200',
        },
    ]

    const pekerjaanData = [
        {
            label: 'Buruh Tani',
            jumlah: '1,532',
            icon: <Sprout className='w-6 h-6' />,
            color: 'from-green-400 to-green-500',
            bgColor: 'bg-green-50',
            textColor: 'text-green-700',
            percentage: '78%',
        },
        {
            label: 'Pedagang',
            jumlah: '145',
            icon: <ShoppingCart className='w-6 h-6' />,
            color: 'from-purple-400 to-purple-500',
            bgColor: 'bg-purple-50',
            textColor: 'text-purple-700',
            percentage: '7%',
        },
        {
            label: 'Petani',
            jumlah: '53',
            icon: <Sprout className='w-6 h-6' />,
            color: 'from-lime-400 to-lime-500',
            bgColor: 'bg-lime-50',
            textColor: 'text-lime-700',
            percentage: '3%',
        },
        {
            label: 'Tukang',
            jumlah: '45',
            icon: <Hammer className='w-6 h-6' />,
            color: 'from-amber-400 to-amber-500',
            bgColor: 'bg-amber-50',
            textColor: 'text-amber-700',
            percentage: '2%',
        },
        {
            label: 'PNS / Wiraswasta',
            jumlah: '30',
            icon: <Building2 className='w-6 h-6' />,
            color: 'from-indigo-400 to-indigo-500',
            bgColor: 'bg-indigo-50',
            textColor: 'text-indigo-700',
            percentage: '1.5%',
        },
        {
            label: 'Lainnya',
            jumlah: '±100',
            icon: <UsersRound className='w-6 h-6' />,
            color: 'from-gray-400 to-gray-500',
            bgColor: 'bg-gray-50',
            textColor: 'text-gray-700',
            percentage: '5%',
        },
    ]

    const programSosialData = [
        {
            program: 'Penyaluran Raskin',
            icon: <Gift className='w-6 h-6' />,
            color: 'from-rose-400 to-rose-500',
            bgColor: 'bg-rose-50',
            textColor: 'text-rose-700',
            data: [
                { wilayah: 'Cigalontang', detail: '65 RTM – 15 kg' },
                { wilayah: 'Panyandungan', detail: '65 RTM – 15 kg' },
                { wilayah: 'Cigalontang Girang', detail: '74 RTM – 15 kg' },
            ],
        },
        {
            program: 'Penerima PKH',
            icon: <Heart className='w-6 h-6' />,
            color: 'from-pink-400 to-pink-500',
            bgColor: 'bg-pink-50',
            textColor: 'text-pink-700',
            data: [
                { wilayah: 'Cigalontang', detail: '21 KK' },
                { wilayah: 'Panyandungan', detail: '19 KK' },
                { wilayah: 'Cigalontang Girang', detail: '18 KK' },
            ],
        },
    ]

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
                {/* Stats Overview */}
                <section className='mb-20'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 -mt-10 relative z-20'>
                        <div className='bg-white rounded-2xl p-6 shadow-xl border border-gray-100 backdrop-blur-sm'>
                            <div className='flex items-center justify-between mb-4'>
                                <div
                                    className={`p-3 rounded-xl bg-gradient-to-r from-emerald-400 to-emerald-500 text-white`}
                                >
                                    <Home className='w-6 h-6' />
                                </div>
                                <ArrowUpRight className='w-5 h-5 text-gray-400' />
                            </div>
                            <h3 className='text-2xl font-bold text-gray-800 mb-1'>
                                1,123
                            </h3>
                            <p className='text-sm text-gray-600'>
                                Total Kepala Keluarga
                            </p>
                            <div className='mt-2 text-xs text-emerald-600 flex items-center'>
                                <Activity className='w-3 h-3 mr-1' />
                                <span>3,356 Total Jiwa</span>
                            </div>
                        </div>

                        <div className='bg-white rounded-2xl p-6 shadow-xl border border-gray-100 backdrop-blur-sm'>
                            <div className='flex items-center justify-between mb-4'>
                                <div
                                    className={`p-3 rounded-xl bg-gradient-to-r from-blue-400 to-blue-500 text-white`}
                                >
                                    <Coins className='w-6 h-6' />
                                </div>
                                <ArrowUpRight className='w-5 h-5 text-gray-400' />
                            </div>
                            <h3 className='text-2xl font-bold text-gray-800 mb-1'>
                                78%
                            </h3>
                            <p className='text-sm text-gray-600'>
                                Sektor Pertanian
                            </p>
                            <div className='mt-2 text-xs text-blue-600 flex items-center'>
                                <Activity className='w-3 h-3 mr-1' />
                                <span>Pekerjaan Dominan</span>
                            </div>
                        </div>

                        <div className='bg-white rounded-2xl p-6 shadow-xl border border-gray-100 backdrop-blur-sm'>
                            <div className='flex items-center justify-between mb-4'>
                                <div
                                    className={`p-3 rounded-xl bg-gradient-to-r from-purple-400 to-purple-500 text-white`}
                                >
                                    <Gift className='w-6 h-6' />
                                </div>
                                <ArrowUpRight className='w-5 h-5 text-gray-400' />
                            </div>
                            <h3 className='text-2xl font-bold text-gray-800 mb-1'>
                                262
                            </h3>
                            <p className='text-sm text-gray-600'>
                                Penerima Bantuan
                            </p>
                            <div className='mt-2 text-xs text-purple-600 flex items-center'>
                                <Activity className='w-3 h-3 mr-1' />
                                <span>Program Sosial Aktif</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Kesejahteraan Keluarga */}
                <section className='mb-20'>
                    <div className='text-center mb-12'>
                        <div className='inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4'>
                            <Users className='w-4 h-4 mr-2' />
                            TINGKAT KESEJAHTERAAN
                        </div>
                        <h2 className='text-3xl font-bold text-gray-900 mb-4'>
                            Kesejahteraan Keluarga
                        </h2>
                        <div className='w-20 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full mx-auto mb-4'></div>
                        <p className='text-gray-600 max-w-2xl mx-auto'>
                            Distribusi tingkat kesejahteraan masyarakat
                            berdasarkan klasifikasi standar nasional
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                        {kesejahteraanData.map((item, i) => (
                            <div
                                key={i}
                                className={`group relative bg-white rounded-2xl p-6 shadow-lg border ${item.borderColor} transition-all duration-300 hover:shadow-xl hover:-translate-y-2 overflow-hidden`}
                            >
                                {/* Background Pattern */}
                                <div className='absolute top-0 right-0 w-20 h-20 opacity-5'>
                                    <div
                                        className={`w-full h-full rounded-full bg-gradient-to-r ${item.color}`}
                                    ></div>
                                </div>

                                {/* Icon */}
                                <div
                                    className={`inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-r ${item.color} text-white mb-4 shadow-lg`}
                                >
                                    {item.icon}
                                </div>

                                {/* Content */}
                                <h3 className='text-lg font-bold text-gray-900 mb-2'>
                                    {item.kategori}
                                </h3>
                                <div className='space-y-1'>
                                    <div className='flex items-center justify-between'>
                                        <span className='text-2xl font-bold text-gray-800'>
                                            {item.kk}
                                        </span>
                                        <span className='text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full'>
                                            KK
                                        </span>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <span className='text-lg font-semibold text-gray-600'>
                                            {item.jiwa}
                                        </span>
                                        <span className='text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full'>
                                            Jiwa
                                        </span>
                                    </div>
                                </div>

                                {/* Hover Effect */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                                ></div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Pekerjaan Penduduk */}
                <section className='mb-20'>
                    <div className='text-center mb-12'>
                        <div className='inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4'>
                            <BarChart3 className='w-4 h-4 mr-2' />
                            MATA PENCAHARIAN
                        </div>
                        <h2 className='text-3xl font-bold text-gray-900 mb-4'>
                            Pekerjaan Penduduk
                        </h2>
                        <div className='w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full mx-auto mb-4'></div>
                        <p className='text-gray-600 max-w-2xl mx-auto'>
                            Komposisi pekerjaan masyarakat yang menggambarkan
                            struktur ekonomi desa
                        </p>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {pekerjaanData.map((item, i) => (
                            <div
                                key={i}
                                className='group relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden'
                            >
                                {/* Background Gradient */}
                                <div
                                    className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-r ${item.color} opacity-5 rounded-full -mr-12 -mt-12 transition-all duration-300 group-hover:scale-110`}
                                ></div>

                                {/* Header */}
                                <div className='flex items-center justify-between mb-4'>
                                    <div
                                        className={`p-3 rounded-xl bg-gradient-to-r ${item.color} text-white shadow-lg`}
                                    >
                                        {item.icon}
                                    </div>
                                    <span
                                        className={`text-xs font-bold px-2 py-1 rounded-full ${item.bgColor} ${item.textColor}`}
                                    >
                                        {item.percentage}
                                    </span>
                                </div>

                                {/* Content */}
                                <h4 className='text-lg font-bold text-gray-900 mb-2'>
                                    {item.label}
                                </h4>
                                <div className='flex items-baseline gap-2'>
                                    <span className='text-3xl font-bold text-gray-800'>
                                        {item.jumlah}
                                    </span>
                                    <span className='text-sm text-gray-500'>
                                        orang
                                    </span>
                                </div>

                                {/* Progress Bar */}
                                <div className='mt-4 w-full bg-gray-200 rounded-full h-2'>
                                    <div
                                        className={`h-2 bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000 group-hover:animate-pulse`}
                                        style={{ width: item.percentage }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Program Sosial */}
                <section className='mb-20'>
                    <div className='text-center mb-12'>
                        <div className='inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4'>
                            <HelpingHand className='w-4 h-4 mr-2' />
                            BANTUAN SOSIAL
                        </div>
                        <h2 className='text-3xl font-bold text-gray-900 mb-4'>
                            Program Sosial
                        </h2>
                        <div className='w-20 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full mx-auto mb-4'></div>
                        <p className='text-gray-600 max-w-2xl mx-auto'>
                            Program bantuan pemerintah untuk meningkatkan
                            kesejahteraan masyarakat
                        </p>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                        {programSosialData.map((program, i) => (
                            <div
                                key={i}
                                className='group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl'
                            >
                                {/* Header Card */}
                                <div
                                    className={`p-6 bg-gradient-to-r from-emerald-500 to-teal-600 text-white relative overflow-hidden`}
                                >
                                    <div className='absolute top-0 right-0 w-20 h-20 bg-white opacity-10 rounded-full -mr-10 -mt-10'></div>
                                    <div className='relative z-10'>
                                        <div className='flex items-center gap-3 mb-2'>
                                            <div className='p-2 bg-white/20 rounded-lg backdrop-blur-sm'>
                                                {program.icon}
                                            </div>
                                            <h3 className='text-xl font-bold'>
                                                {program.program}
                                            </h3>
                                        </div>
                                        <p className='text-sm opacity-90'>
                                            Distribusi bantuan per wilayah
                                        </p>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className='p-6'>
                                    <div className='space-y-4'>
                                        {program.data.map((item, idx) => (
                                            <div
                                                key={idx}
                                                className='flex items-center justify-between p-4 rounded-xl bg-gray-50 border border-gray-100 transition-all duration-200 hover:bg-gray-100 hover:shadow-md'
                                            >
                                                <div className='flex items-center gap-3'>
                                                    <div
                                                        className={`w-3 h-3 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500`}
                                                    ></div>
                                                    <span className='font-medium text-gray-800'>
                                                        {item.wilayah}
                                                    </span>
                                                </div>
                                                <div className='flex items-center gap-2'>
                                                    <span className='font-bold text-gray-900'>
                                                        {item.detail}
                                                    </span>
                                                    <div
                                                        className={`p-1 rounded-full bg-emerald-100`}
                                                    >
                                                        <ArrowUpRight
                                                            className={`w-3 h-3 text-emerald-600`}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Summary */}
                                    <div
                                        className={`mt-6 p-4 rounded-xl bg-emerald-50 border border-emerald-100`}
                                    >
                                        <div className='flex items-center justify-between'>
                                            <span
                                                className={`text-sm font-medium text-emerald-700`}
                                            >
                                                Total Penerima
                                            </span>
                                            <span
                                                className={`text-lg font-bold text-emerald-700`}
                                            >
                                                {program.program.includes(
                                                    'Raskin'
                                                )
                                                    ? '204 RTM'
                                                    : '58 KK'}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    )
}
