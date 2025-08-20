import {
    Sprout,
    Wheat,
    LandPlot,
    Droplets,
    Users,
    Tractor,
    TrendingUp,
    ChevronRight,
    Home,
    Award,
    MapPin,
    Calendar,
    BarChart3,
} from 'lucide-react'

export default function SektorPertanian() {
    const statsData = [
        {
            title: 'Luas Sawah',
            value: '196.2',
            unit: 'Hektare',
            icon: LandPlot,
            trend: '+5%',
            color: 'emerald',
        },
        {
            title: 'Luas Ladang & Kebun',
            value: '154.9',
            unit: 'Hektare',
            icon: Sprout,
            trend: '+3%',
            color: 'green',
        },
        {
            title: 'Petani & Buruh Tani',
            value: '1.532',
            unit: 'Orang',
            icon: Users,
            trend: '+8%',
            color: 'teal',
        },
        {
            title: 'Irigasi Teknis',
            value: 'Baik',
            unit: 'Status',
            icon: Droplets,
            trend: 'Optimal',
            color: 'blue',
        },
    ]

    const komoditasData = [
        {
            name: 'Padi',
            emoji: '🌾',
            production: '25',
            unit: 'ton/tahun',
            percentage: 85,
            color: 'from-yellow-400 to-yellow-600',
            bgColor: 'bg-yellow-50',
            textColor: 'text-yellow-700',
        },
        {
            name: 'Sayuran',
            emoji: '🍅',
            production: '30',
            unit: 'ton/tahun',
            percentage: 92,
            color: 'from-red-400 to-red-600',
            bgColor: 'bg-red-50',
            textColor: 'text-red-700',
        },
        {
            name: 'Jagung',
            emoji: '🌽',
            production: '1.5',
            unit: 'ton/tahun',
            percentage: 68,
            color: 'from-orange-400 to-orange-600',
            bgColor: 'bg-orange-50',
            textColor: 'text-orange-700',
        },
        {
            name: 'Kacang Tanah',
            emoji: '🥜',
            production: '0.5',
            unit: 'ton/tahun',
            percentage: 45,
            color: 'from-amber-400 to-amber-600',
            bgColor: 'bg-amber-50',
            textColor: 'text-amber-700',
        },
    ]

    const kelompokTaniData = [
        {
            name: 'Tunas Harapan',
            anggota: 34,
            wilayah: 'Cigalontang',
            tahunBerdiri: '2018',
            status: 'Aktif',
            color: 'emerald',
        },
        {
            name: 'Mekar Sari',
            anggota: 27,
            wilayah: 'Panyandungan',
            tahunBerdiri: '2019',
            status: 'Aktif',
            color: 'teal',
        },
    ]

    const fasilitasData = [
        {
            name: 'Irigasi Teknis',
            status: 'Sangat Baik',
            coverage: '95%',
            icon: Droplets,
            color: 'blue',
        },
        {
            name: 'Alat Pertanian',
            status: 'Memadai',
            coverage: '80%',
            icon: Tractor,
            color: 'emerald',
        },
        {
            name: 'Gudang Penyimpanan',
            status: 'Baik',
            coverage: '70%',
            icon: Home,
            color: 'orange',
        },
    ]

    const getColorClasses = (color) => {
        const colorMap = {
            emerald: 'bg-emerald-500 text-white',
            green: 'bg-green-500 text-white',
            teal: 'bg-teal-500 text-white',
            blue: 'bg-blue-500 text-white',
            orange: 'bg-orange-500 text-white',
        }
        return colorMap[color] || 'bg-emerald-500 text-white'
    }

    const getBgColorClasses = (color) => {
        const colorMap = {
            emerald: 'bg-emerald-50 border-emerald-200',
            green: 'bg-green-50 border-green-200',
            teal: 'bg-teal-50 border-teal-200',
            blue: 'bg-blue-50 border-blue-200',
            orange: 'bg-orange-50 border-orange-200',
        }
        return colorMap[color] || 'bg-emerald-50 border-emerald-200'
    }

    return (
        <div className='min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50'>
            {/* Consistent Header */}
            <div className='bg-gradient-to-r from-emerald-600 to-emerald-500 text-white pt-42 pb-24 relative overflow-hidden'>
                {/* Background Pattern */}
                <div className='absolute inset-0'>
                    <svg
                        className='absolute inset-0 w-full h-full opacity-10'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <defs>
                            <pattern
                                id='agriculture-grid'
                                width='40'
                                height='40'
                                patternUnits='userSpaceOnUse'
                            >
                                <path
                                    d='M 40 0 L 0 0 0 40'
                                    fill='none'
                                    stroke='rgba(255,255,255,0.1)'
                                    strokeWidth='1'
                                />
                            </pattern>
                        </defs>
                        <rect
                            width='100%'
                            height='100%'
                            fill='url(#agriculture-grid)'
                        />
                    </svg>

                    {/* Floating Elements */}
                    <div className='absolute top-20 right-20 w-16 h-16 text-white opacity-10'>
                        <Wheat className='w-full h-full animate-pulse' />
                    </div>
                    <div className='absolute bottom-20 left-20 w-12 h-12 text-white opacity-10'>
                        <Sprout className='w-full h-full animate-pulse delay-1000' />
                    </div>
                </div>

                <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
                    <div className='text-center'>
                        <div className='flex items-center justify-center mb-4'>
                            <div className='w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4 backdrop-blur-sm border border-white/30'>
                                <Sprout className='h-8 w-8 text-white' />
                            </div>
                            <h1 className='text-4xl md:text-5xl font-bold'>
                                Sektor Pertanian
                            </h1>
                        </div>
                        <p className='text-emerald-100 text-lg md:text-xl max-w-4xl mx-auto mb-8 leading-relaxed'>
                            Potensi pertanian desa dengan berbagai komoditas
                            unggulan dan dukungan fasilitas modern untuk
                            kesejahteraan masyarakat Cigalontang.
                        </p>

                        {/* Quick Stats in Header */}
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-8'>
                            <div className='bg-white/15 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20'>
                                <div className='text-2xl font-bold'>351.1</div>
                                <div className='text-emerald-200 text-sm'>
                                    Ha Total
                                </div>
                            </div>
                            <div className='bg-white/15 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20'>
                                <div className='text-2xl font-bold'>57</div>
                                <div className='text-emerald-200 text-sm'>
                                    Ton/Tahun
                                </div>
                            </div>
                            <div className='bg-white/15 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20'>
                                <div className='text-2xl font-bold'>1,532</div>
                                <div className='text-emerald-200 text-sm'>
                                    Petani
                                </div>
                            </div>
                            <div className='bg-white/15 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20'>
                                <div className='text-2xl font-bold'>2</div>
                                <div className='text-emerald-200 text-sm'>
                                    Kelompok
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Breadcrumb */}
                <div className='absolute bottom-0 left-0 right-0 pb-6'>
                    <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                        <nav
                            className='flex items-center justify-center text-sm'
                            aria-label='Breadcrumb'
                        >
                            <a
                                href='/'
                                className='flex items-center text-white hover:text-emerald-100 transition-colors duration-200 px-2 py-1 rounded hover:bg-white/10'
                            >
                                <Home className='h-4 w-4 mr-1' />
                                Beranda
                            </a>
                            <ChevronRight className='h-4 w-4 mx-2 text-emerald-300' />
                            <a
                                href='/potensi-desa'
                                className='text-white hover:text-emerald-100 transition-colors duration-200 px-2 py-1 rounded hover:bg-white/10'
                            >
                                Potensi Desa
                            </a>
                            <ChevronRight className='h-4 w-4 mx-2 text-emerald-300' />
                            <span className='font-semibold text-white bg-white/15 px-3 py-1 rounded-lg'>
                                Sektor Pertanian
                            </span>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className='container mx-auto px-4 py-16 -mt-16 relative z-10'>
                {/* Statistics Cards */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'>
                    {statsData.map((stat, index) => {
                        const IconComponent = stat.icon
                        return (
                            <div
                                key={index}
                                className={`${getBgColorClasses(
                                    stat.color
                                )} rounded-3xl p-8 border shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group`}
                            >
                                <div className='flex items-start justify-between mb-6'>
                                    <div
                                        className={`p-4 rounded-2xl ${getColorClasses(
                                            stat.color
                                        )} group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        <IconComponent className='w-8 h-8' />
                                    </div>
                                    <div className='text-right'>
                                        <div className='text-xs font-semibold text-emerald-600 bg-emerald-100 px-2 py-1 rounded-full'>
                                            {stat.trend}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h3 className='text-gray-600 text-sm font-medium mb-2'>
                                        {stat.title}
                                    </h3>
                                    <div className='flex items-baseline space-x-2'>
                                        <span className='text-4xl font-bold text-gray-800'>
                                            {stat.value}
                                        </span>
                                        <span className='text-gray-500 text-sm'>
                                            {stat.unit}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Komoditas Unggulan */}
                <div className='mb-16'>
                    <div className='text-center mb-12'>
                        <div className='inline-flex items-center space-x-2 text-emerald-600 mb-4'>
                            <Wheat className='w-6 h-6' />
                            <span className='text-sm font-semibold uppercase tracking-wide'>
                                Komoditas Unggulan
                            </span>
                        </div>
                        <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-2'>
                            Hasil Pertanian
                        </h2>
                        <div className='w-24 h-1 bg-gradient-to-r from-emerald-400 to-green-400 mx-auto'></div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                        {komoditasData.map((komoditas, index) => (
                            <div
                                key={index}
                                className={`${komoditas.bgColor} rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group`}
                            >
                                <div className='text-center'>
                                    <div className='text-6xl mb-6 group-hover:scale-110 transition-transform duration-300'>
                                        {komoditas.emoji}
                                    </div>
                                    <h3
                                        className={`text-xl font-bold ${komoditas.textColor} mb-2`}
                                    >
                                        {komoditas.name}
                                    </h3>
                                    <div className='mb-4'>
                                        <span className='text-3xl font-bold text-gray-800'>
                                            {komoditas.production}
                                        </span>
                                        <span className='text-gray-600 text-sm ml-1'>
                                            {komoditas.unit}
                                        </span>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className='w-full bg-gray-200 rounded-full h-2 mb-2'>
                                        <div
                                            className={`bg-gradient-to-r ${komoditas.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                                            style={{
                                                width: `${komoditas.percentage}%`,
                                            }}
                                        ></div>
                                    </div>
                                    <div className='text-xs text-gray-500'>
                                        Target: {komoditas.percentage}%
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Kelompok Tani & Fasilitas */}
                <div className='grid grid-cols-1 lg:grid-cols-1 gap-12'>
                    {/* Fasilitas */}
                    <div>
                        <div className='mb-8'>
                            <div className='inline-flex items-center space-x-2 text-emerald-600 mb-4'>
                                <Award className='w-5 h-5' />
                                <span className='text-sm font-semibold uppercase tracking-wide'>
                                    Fasilitas
                                </span>
                            </div>
                            <h3 className='text-2xl font-bold text-gray-800 mb-2'>
                                Infrastruktur Pertanian
                            </h3>
                            <div className='w-16 h-1 bg-gradient-to-r from-emerald-400 to-teal-400'></div>
                        </div>

                        <div className='space-y-6'>
                            {fasilitasData.map((fasilitas, index) => {
                                const IconComponent = fasilitas.icon
                                return (
                                    <div
                                        key={index}
                                        className={`${getBgColorClasses(
                                            fasilitas.color
                                        )} rounded-2xl p-6 border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
                                    >
                                        <div className='flex items-center justify-between'>
                                            <div className='flex items-center space-x-4'>
                                                <div
                                                    className={`p-3 rounded-xl ${getColorClasses(
                                                        fasilitas.color
                                                    )}`}
                                                >
                                                    <IconComponent className='w-6 h-6' />
                                                </div>
                                                <div>
                                                    <h4 className='text-lg font-bold text-gray-800'>
                                                        {fasilitas.name}
                                                    </h4>
                                                    <p className='text-gray-600 text-sm'>
                                                        {fasilitas.status}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='text-right'>
                                                <div className='text-2xl font-bold text-gray-800'>
                                                    {fasilitas.coverage}
                                                </div>
                                                <div className='text-xs text-gray-500'>
                                                    Cakupan
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                {/* <div className='text-center mt-16 py-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-3xl text-white'>
                    <div className='flex items-center justify-center mb-6'>
                        <TrendingUp className='w-12 h-12 text-emerald-200 mr-4' />
                        <h3 className='text-3xl font-bold'>
                            Pertanian Berkelanjutan
                        </h3>
                    </div>
                    <p className='text-emerald-100 max-w-3xl mx-auto mb-6 text-lg'>
                        Dengan dukungan teknologi modern dan kelompok tani yang
                        solid, sektor pertanian Desa Cigalontang terus
                        berkembang untuk mencapai ketahanan pangan
                    </p>
                    <div className='flex items-center justify-center space-x-2'>
                        <div className='w-12 h-px bg-emerald-300'></div>
                        <div className='w-3 h-3 bg-white rounded-full'></div>
                        <div className='w-12 h-px bg-emerald-300'></div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
