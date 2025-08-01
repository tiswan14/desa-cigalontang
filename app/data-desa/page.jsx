import React from 'react'
import {
    BarChart3,
    GraduationCap,
    Users,
    Calendar,
    CreditCard,
    ArrowRight,
    TrendingUp,
    Database,
} from 'lucide-react'

const DataDesaPage = () => {
    const dataCategories = [
        {
            title: 'Pendidikan',
            description:
                'Data tingkat pendidikan masyarakat dari berbagai jenjang',
            icon: GraduationCap,
            href: '/data-desa/pendidikan',
            color: 'emerald',
            stats: '3,900 Data',
        },
        {
            title: 'Jenis Kelamin',
            description: 'Komposisi penduduk berdasarkan jenis kelamin',
            icon: Users,
            href: '/data-desa/jenis-kelamin',
            color: 'blue',
            stats: 'L: 1,913 | P: 1,987',
        },
        {
            title: 'Usia',
            description: 'Distribusi penduduk berdasarkan kelompok usia',
            icon: Calendar,
            href: '/data-desa/usia',
            color: 'purple',
            stats: '16 Kelompok',
        },
        {
            title: 'Kependudukan',
            description: 'Data administrasi kependudukan dan dokumen',
            icon: CreditCard,
            href: '/data-desa/kependudukan',
            color: 'orange',
            stats: '1,306 KK',
        },
    ]

    const getColorClasses = (color) => {
        const colors = {
            emerald: {
                bg: 'bg-emerald-50',
                border: 'border-emerald-500',
                text: 'text-emerald-700',
                icon: 'text-emerald-600',
                iconBg: 'bg-emerald-100',
                hover: 'hover:bg-emerald-100',
            },
            blue: {
                bg: 'bg-blue-50',
                border: 'border-blue-500',
                text: 'text-blue-700',
                icon: 'text-blue-600',
                iconBg: 'bg-blue-100',
                hover: 'hover:bg-blue-100',
            },
            purple: {
                bg: 'bg-purple-50',
                border: 'border-purple-500',
                text: 'text-purple-700',
                icon: 'text-purple-600',
                iconBg: 'bg-purple-100',
                hover: 'hover:bg-purple-100',
            },
            orange: {
                bg: 'bg-orange-50',
                border: 'border-orange-500',
                text: 'text-orange-700',
                icon: 'text-orange-600',
                iconBg: 'bg-orange-100',
                hover: 'hover:bg-orange-100',
            },
        }
        return colors[color]
    }

    return (
        <div className='min-h-screen bg-gradient-to-br from-emerald-50 to-white'>
            {/* Header */}
            <header className='bg-gradient-to-r from-emerald-600 to-emerald-500 py-36 text-center text-white relative overflow-hidden'>
                {/* Decorative elements */}
                <div className='absolute inset-0 opacity-10'>
                    <div className='absolute top-0 right-0 w-32 h-32 bg-white rounded-full -mr-16 -mt-16'></div>
                    <div className='absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full -ml-32 -mb-32'></div>
                </div>

                <div className='container mx-auto px-4 relative z-10'>
                    <div className='flex flex-col items-center'>
                        {/* Icon and Title */}
                        <div className='inline-flex items-center justify-center mb-4'>
                            <Database
                                className='w-10 h-10 md:w-12 md:h-12 text-emerald-200 mr-3'
                                strokeWidth={1.5}
                            />
                            <h1 className='text-3xl md:text-4xl font-bold'>
                                Data Desa Cigalontang
                            </h1>
                        </div>

                        {/* Subtitle */}
                        <p className='text-lg md:text-xl font-medium max-w-2xl text-emerald-100'>
                            Kumpulan data dan statistik komprehensif mengenai
                            demografi, pendidikan, dan karakteristik masyarakat
                            Desa Cigalontang.
                        </p>

                        {/* Breadcrumb Navigation */}
                        <nav
                            className='mt-6 flex items-center text-sm font-medium text-emerald-100'
                            aria-label='Breadcrumb'
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
                            <span className='text-white'>Data Desa</span>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
                <div className='max-w-7xl mx-auto'>
                    {/* Introduction */}
                    <div className='bg-white rounded-2xl shadow-lg p-8 border-l-4 border-emerald-500 mb-12'>
                        <div className='flex items-center mb-6'>
                            <div className='w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4'>
                                <TrendingUp className='h-6 w-6 text-emerald-600' />
                            </div>
                            <h2 className='text-2xl font-semibold text-gray-800'>
                                Kategori Data Tersedia
                            </h2>
                        </div>
                        <p className='text-gray-700 text-lg leading-relaxed'>
                            Eksplorasi berbagai kategori data demografi dan
                            sosial masyarakat Desa Cigalontang. Setiap kategori
                            menyediakan analisis mendalam dan visualisasi data
                            yang mudah dipahami.
                        </p>
                    </div>

                    {/* Data Categories Grid */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
                        {dataCategories.map((category, index) => {
                            const IconComponent = category.icon
                            const colorClasses = getColorClasses(category.color)

                            return (
                                <a
                                    key={index}
                                    href={category.href}
                                    className={`group bg-white rounded-2xl shadow-lg p-6 border-l-4 ${colorClasses.border} hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer`}
                                >
                                    <div className='flex flex-col h-full'>
                                        {/* Icon and Title */}
                                        <div className='flex items-center mb-4'>
                                            <div
                                                className={`w-12 h-12 ${colorClasses.iconBg} rounded-full flex items-center justify-center mr-3`}
                                            >
                                                <IconComponent
                                                    className={`h-6 w-6 ${colorClasses.icon}`}
                                                />
                                            </div>
                                            <div className='flex-1'>
                                                <h3 className='text-lg font-semibold text-gray-800 group-hover:text-gray-900'>
                                                    {category.title}
                                                </h3>
                                            </div>
                                            <ArrowRight className='h-5 w-5 text-gray-400 group-hover:text-gray-600 transform group-hover:translate-x-1 transition-all duration-200' />
                                        </div>

                                        {/* Description */}
                                        <p className='text-gray-600 text-sm leading-relaxed mb-4 flex-1'>
                                            {category.description}
                                        </p>

                                        {/* Stats */}
                                        <div
                                            className={`${colorClasses.bg} ${colorClasses.hover} group-hover:${colorClasses.hover} px-3 py-2 rounded-lg transition-colors duration-200`}
                                        >
                                            <p
                                                className={`text-sm font-medium ${colorClasses.text}`}
                                            >
                                                {category.stats}
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>

                    {/* Quick Stats */}
                    <div className='bg-white rounded-2xl shadow-lg p-8 border-l-4 border-emerald-500 mb-12'>
                        <div className='flex items-center mb-6'>
                            <div className='w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4'>
                                <BarChart3 className='h-6 w-6 text-emerald-600' />
                            </div>
                            <h2 className='text-2xl font-semibold text-gray-800'>
                                Ringkasan Data
                            </h2>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                            <div className='text-center p-4 bg-emerald-50 rounded-xl'>
                                <div className='text-3xl font-bold text-emerald-700 mb-2'>
                                    3,900
                                </div>
                                <p className='text-emerald-600'>
                                    Total Penduduk
                                </p>
                            </div>
                            <div className='text-center p-4 bg-blue-50 rounded-xl'>
                                <div className='text-3xl font-bold text-blue-700 mb-2'>
                                    1,306
                                </div>
                                <p className='text-blue-600'>Kepala Keluarga</p>
                            </div>
                            <div className='text-center p-4 bg-purple-50 rounded-xl'>
                                <div className='text-3xl font-bold text-purple-700 mb-2'>
                                    8
                                </div>
                                <p className='text-purple-600'>RW</p>
                            </div>
                            <div className='text-center p-4 bg-orange-50 rounded-xl'>
                                <div className='text-3xl font-bold text-orange-700 mb-2'>
                                    24
                                </div>
                                <p className='text-orange-600'>RT</p>
                            </div>
                        </div>
                    </div>

                    {/* Additional Information */}
                    <div className='bg-white rounded-2xl shadow-lg p-8 border-l-4 border-emerald-500'>
                        <div className='text-center'>
                            <h3 className='text-xl font-semibold text-gray-800 mb-4'>
                                Informasi Data
                            </h3>
                            <div className='grid md:grid-cols-3 gap-6'>
                                <div className='bg-emerald-50 p-4 rounded-lg'>
                                    <h4 className='font-semibold text-emerald-700 mb-2'>
                                        Sumber Data
                                    </h4>
                                    <p className='text-gray-600 text-sm'>
                                        Kantor Desa Cigalontang
                                    </p>
                                </div>
                                <div className='bg-blue-50 p-4 rounded-lg'>
                                    <h4 className='font-semibold text-blue-700 mb-2'>
                                        Pembaruan Terakhir
                                    </h4>
                                    <p className='text-gray-600 text-sm'>
                                        Januari 2024
                                    </p>
                                </div>
                                <div className='bg-purple-50 p-4 rounded-lg'>
                                    <h4 className='font-semibold text-purple-700 mb-2'>
                                        Periode Data
                                    </h4>
                                    <p className='text-gray-600 text-sm'>
                                        2024
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Bottom Element */}
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

export default DataDesaPage
