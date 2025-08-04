import {
    GiCow,
    GiGoat,
    GiDuck,
    GiHorseHead,
    GiChicken,
    GiSheep,
    GiBull,
    GiRabbit,
} from 'react-icons/gi'
import {
    Feather,
    Egg,
    Beef,
    Milk,
    ChevronRight,
    Home,
    TrendingUp,
    Bird,
    Rabbit
} from 'lucide-react'

export default function SektorPeternakan() {
    const livestockData = [
        {
            name: 'Sapi',
            population: 5,
            value: 'Rp 45.000.000',
            icon: GiCow,
        },
        {
            name: 'Kerbau',
            population: 87,
            value: 'Rp 696.000.000',
            icon: GiBull,
        },
        {
            name: 'Domba',
            population: 213,
            value: 'Rp 319.500.000',
            icon: GiSheep,
        },
        {
            name: 'Kambing',
            population: 46,
            value: 'Rp 92.000.000',
            icon: GiGoat,
        },
        {
            name: 'Ayam Ras',
            population: '5.800',
            value: 'Rp 232.000.000',
            icon: GiChicken,
        },
        {
            name: 'Ayam Kampung',
            population: 150,
            value: 'Rp 5.250.000',
            icon: GiChicken,
        },
        {
            name: 'Bebek',
            population: 230,
            value: 'Rp 19.550.000',
            icon: GiDuck,
        },
        {
            name: 'Kuda',
            population: 1,
            value: 'Tidak disebutkan',
            icon: GiHorseHead,
        },
    ]

    const productionData = [
        {
            name: 'Kulit',
            amount: '23 meter',
            value: 'Rp 345.000',
            icon: Feather,
        },
        { name: 'Telur', amount: '450 kg', value: 'Rp 8.100.000', icon: Egg },
        {
            name: 'Daging',
            amount: '300 kg',
            value: 'Rp 19.500.000',
            icon: Beef,
        },
        { name: 'Susu & Madu', amount: '-', value: '-', icon: Milk },
    ]

    const statsData = [
        {
            title: 'Total Populasi',
            value: '6.526',
            unit: 'Ekor',
            icon: GiRabbit,
            trend: '+12%',
            color: 'emerald',
        },
        {
            title: 'Nilai Ekonomi',
            value: '1.4',
            unit: 'Miliar',
            icon: TrendingUp,
            trend: '+18%',
            color: 'green',
        },
        {
            title: 'Jenis Ternak',
            value: '8',
            unit: 'Varietas',
            icon: GiRabbit,
            trend: 'Stabil',
            color: 'teal',
        },
        {
            title: 'Produksi Tahunan',
            value: '773',
            unit: 'kg',
            icon: Egg,
            trend: '+7%',
            color: 'blue',
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
            {/* Header Section */}
            <div className='bg-gradient-to-r from-emerald-600 to-emerald-500 text-white pt-42 pb-24 relative overflow-hidden'>
                {/* Background Pattern */}
                <div className='absolute inset-0'>
                    <svg
                        className='absolute inset-0 w-full h-full opacity-10'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <defs>
                            <pattern
                                id='livestock-grid'
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
                            fill='url(#livestock-grid)'
                        />
                    </svg>

                    {/* Floating Elements - using available icons */}
                    <div className='absolute top-20 right-20 w-16 h-16 text-white opacity-10'>
                        <Beef className='w-full h-full animate-pulse' />
                    </div>
                    <div className='absolute bottom-20 left-20 w-12 h-12 text-white opacity-10'>
                        <Bird className='w-full h-full animate-pulse delay-1000' />
                    </div>
                </div>

                <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
                    <div className='text-center'>
                        <div className='flex items-center justify-center mb-4'>
                            <div className='w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4 backdrop-blur-sm border border-white/30'>
                                <Rabbit className='h-8 w-8 text-white' />
                            </div>
                            <h1 className='text-4xl md:text-5xl font-bold'>
                                Sektor Peternakan
                            </h1>
                        </div>
                        <p className='text-emerald-100 text-lg md:text-xl max-w-4xl mx-auto mb-8 leading-relaxed'>
                            Potensi peternakan desa dengan berbagai komoditas
                            unggulan yang menjadi pilar ekonomi alternatif bagi
                            masyarakat Cigalontang.
                        </p>

                        {/* Quick Stats in Header */}
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-8'>
                            <div className='bg-white/15 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20'>
                                <div className='text-2xl font-bold'>6.526</div>
                                <div className='text-emerald-200 text-sm'>
                                    Populasi
                                </div>
                            </div>
                            <div className='bg-white/15 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20'>
                                <div className='text-2xl font-bold'>1.4</div>
                                <div className='text-emerald-200 text-sm'>
                                    Miliar
                                </div>
                            </div>
                            <div className='bg-white/15 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20'>
                                <div className='text-2xl font-bold'>8</div>
                                <div className='text-emerald-200 text-sm'>
                                    Jenis
                                </div>
                            </div>
                            <div className='bg-white/15 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20'>
                                <div className='text-2xl font-bold'>773</div>
                                <div className='text-emerald-200 text-sm'>
                                    kg
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
                                Sektor Peternakan
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

                {/* Populasi Ternak */}
                <div className='mb-16'>
                    <div className='text-center mb-12'>
                        <div className='inline-flex items-center space-x-2 text-emerald-600 mb-4'>
                            <Beef className='w-6 h-6' />
                            <span className='text-sm font-semibold uppercase tracking-wide'>
                                Populasi Ternak
                            </span>
                        </div>
                        <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-2'>
                            Data Hewan Ternak
                        </h2>
                        <div className='w-24 h-1 bg-gradient-to-r from-emerald-400 to-green-400 mx-auto'></div>
                    </div>

                    <div className='bg-white rounded-3xl shadow-xl overflow-hidden mb-10'>
                        <div className='overflow-x-auto'>
                            <table className='min-w-full divide-y divide-emerald-200'>
                                <thead className='bg-emerald-100'>
                                    <tr>
                                        <th className='px-6 py-4 text-left text-sm font-medium text-emerald-800 uppercase tracking-wider'>
                                            Jenis Ternak
                                        </th>
                                        <th className='px-6 py-4 text-left text-sm font-medium text-emerald-800 uppercase tracking-wider'>
                                            Jumlah (ekor)
                                        </th>
                                        <th className='px-6 py-4 text-left text-sm font-medium text-emerald-800 uppercase tracking-wider'>
                                            Nilai Ekonomi (Rp)
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className='bg-white divide-y divide-emerald-200'>
                                    {livestockData.map((item, index) => {
                                        const IconComponent = item.icon
                                        return (
                                            <tr
                                                key={index}
                                                className={
                                                    index % 2 === 0
                                                        ? 'bg-white'
                                                        : 'bg-emerald-50'
                                                }
                                            >
                                                <td className='px-6 py-4 whitespace-nowrap'>
                                                    <div className='flex items-center'>
                                                        <div className='flex-shrink-0 h-10 w-10'>
                                                            <div className='p-2 rounded-lg bg-emerald-100 text-emerald-600'>
                                                                <IconComponent className='w-6 h-6' />
                                                            </div>
                                                        </div>
                                                        <div className='ml-4'>
                                                            <div className='text-sm font-medium text-emerald-900'>
                                                                {item.name}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className='px-6 py-4 whitespace-nowrap text-sm text-emerald-800'>
                                                    {item.population}
                                                </td>
                                                <td className='px-6 py-4 whitespace-nowrap text-sm text-emerald-800'>
                                                    {item.value}
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Produksi Peternakan */}
                <div className='mb-16'>
                    <div className='text-center mb-12'>
                        <div className='inline-flex items-center space-x-2 text-emerald-600 mb-4'>
                            <Egg className='w-6 h-6' />
                            <span className='text-sm font-semibold uppercase tracking-wide'>
                                Produksi Peternakan
                            </span>
                        </div>
                        <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-2'>
                            Hasil Ternak
                        </h2>
                        <div className='w-24 h-1 bg-gradient-to-r from-emerald-400 to-green-400 mx-auto'></div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                        {productionData.map((item, index) => {
                            const IconComponent = item.icon
                            return (
                                <div
                                    key={index}
                                    className='bg-white rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group'
                                >
                                    <div className='text-center'>
                                        <div className='p-4 rounded-full bg-emerald-100 inline-block mb-4 group-hover:scale-110 transition-transform duration-300'>
                                            <IconComponent className='w-8 h-8 text-emerald-600' />
                                        </div>
                                        <h3 className='text-xl font-bold text-emerald-800 mb-2'>
                                            {item.name}
                                        </h3>
                                        <div className='mb-4'>
                                            <span className='text-3xl font-bold text-gray-800'>
                                                {item.amount}
                                            </span>
                                        </div>
                                        <div className='text-lg font-semibold text-emerald-600'>
                                            {item.value}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Potensi dan Tantangan */}
                <div className='mb-16'>
                    <div className='bg-white rounded-3xl shadow-xl overflow-hidden'>
                        <div className='bg-gradient-to-r from-emerald-600 to-emerald-500 px-8 py-6'>
                            <h2 className='text-2xl font-bold text-white flex items-center'>
                                <TrendingUp className='w-6 h-6 mr-3' />
                                Potensi dan Tantangan
                            </h2>
                        </div>
                        <div className='p-8'>
                            <div className='prose prose-emerald max-w-none'>
                                <p className='text-lg text-gray-700 mb-4'>
                                    Peternakan rakyat yang berbasis lahan
                                    pekarangan dan pakan lokal menjadi ciri khas
                                    peternakan di Desa Cigalontang. Dengan
                                    populasi ternak yang terus meningkat, sektor
                                    ini menjadi sumber penghidupan alternatif
                                    yang penting bagi masyarakat.
                                </p>
                                <p className='text-lg text-gray-700'>
                                    Tantangan utama meliputi keterbatasan pakan
                                    berkualitas, kandang modern, dan akses ke
                                    layanan kesehatan hewan. Dengan pembinaan
                                    berkelanjutan dan penguatan kelembagaan
                                    peternak, sektor ini berpotensi menjadi
                                    penggerak ekonomi yang lebih kuat di masa
                                    depan.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className='text-center mt-16 py-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-3xl text-white'>
                    <div className='flex items-center justify-center mb-6'>
                        <Rabbit className='w-12 h-12 text-emerald-200 mr-4' />
                        <h3 className='text-3xl font-bold'>
                            Peternakan Berkelanjutan
                        </h3>
                    </div>
                    <p className='text-emerald-100 max-w-3xl mx-auto mb-6 text-lg'>
                        Dengan pengelolaan yang baik dan dukungan teknologi,
                        sektor peternakan Desa Cigalontang siap berkontribusi
                        lebih besar terhadap ketahanan pangan dan kesejahteraan
                        masyarakat.
                    </p>
                    <div className='flex items-center justify-center space-x-2'>
                        <div className='w-12 h-px bg-emerald-300'></div>
                        <div className='w-3 h-3 bg-white rounded-full'></div>
                        <div className='w-12 h-px bg-emerald-300'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
