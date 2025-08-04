'use client'
import {
    Home,
    ChevronRight,
    Mountain,
    Coffee,
    ShoppingBag,
    Footprints,
    MapPin,
    Palette,
} from 'lucide-react'

const WisataDesa = () => {
    return (
        <div>
            {/* Header Section */}
            <div className='bg-gradient-to-r from-emerald-700 to-emerald-500 text-white pt-42 pb-24 relative overflow-hidden'>
                {/* Background Pattern */}
                <div className='absolute inset-0'>
                    <svg
                        className='absolute inset-0 w-full h-full opacity-10'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <defs>
                            <pattern
                                id='tourism-grid'
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
                            fill='url(#tourism-grid)'
                        />
                    </svg>

                    {/* Floating Elements */}
                    <div className='absolute top-20 right-20 w-16 h-16 text-white opacity-10'>
                        <Mountain className='w-full h-full animate-pulse' />
                    </div>
                    <div className='absolute bottom-20 left-20 w-12 h-12 text-white opacity-10'>
                        <Coffee className='w-full h-full animate-pulse delay-1000' />
                    </div>
                </div>

                <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
                    <div className='text-center'>
                        <div className='flex items-center justify-center mb-4'>
                            <div className='w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4 backdrop-blur-sm border border-white/30'>
                                <MapPin className='h-8 w-8 text-white' />
                            </div>
                            <h1 className='text-4xl md:text-5xl font-bold'>
                                Eksplorasi Wisata Desa Cigalontang
                            </h1>
                        </div>
                        <p className='text-emerald-100 text-lg md:text-xl max-w-4xl mx-auto mb-8 leading-relaxed'>
                            Jelajahi keindahan alam, cita rasa kuliner, dan
                            kearifan lokal khas Desa Cigalontang dalam satu
                            pengalaman yang tak terlupakan.
                        </p>

                        {/* Quick Stats */}
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-8'>
                            {[
                                ['12', 'Objek Wisata'],
                                ['4', 'Kategori'],
                                ['50+', 'Produk Lokal'],
                                ['100%', 'Buatan Warga'],
                            ].map(([stat, label], index) => (
                                <div
                                    key={index}
                                    className='bg-white/15 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20'
                                >
                                    <div className='text-2xl font-bold'>
                                        {stat}
                                    </div>
                                    <div className='text-emerald-100 text-sm'>
                                        {label}
                                    </div>
                                </div>
                            ))}
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
                            <span className='font-semibold text-white bg-white/15 px-3 py-1 rounded-lg'>
                                Wisata Desa
                            </span>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {/* Kategori Wisata */}
                    {[
                        {
                            icon: <Mountain className='h-6 w-6 mr-2' />,
                            title: 'Wisata Alam',
                            items: [
                                [
                                    'Ngalanglang Karancagean Domba',
                                    'Petualangan alam di peternakan domba nan asri.',
                                ],
                            ],
                        },
                        {
                            icon: <Coffee className='h-6 w-6 mr-2' />,
                            title: 'Wisata Kuliner',
                            items: [
                                [
                                    'Farmers Coffee Cigalontang',
                                    'Nikmati kopi lokal dengan cita rasa otentik.',
                                ],
                                [
                                    'Ngendang Rasa',
                                    'Cita rasa tradisional berpadu modernitas.',
                                ],
                                [
                                    'Seren Manis',
                                    'Kudapan manis khas dari desa.',
                                ],
                            ],
                        },
                        {
                            icon: <Palette className='h-6 w-6 mr-2' />,
                            title: 'Kerajinan Tangan',
                            items: [
                                [
                                    'Anyaman Bu Tatih',
                                    'Karya anyaman tangan berkualitas tinggi.',
                                ],
                                [
                                    'Anyaman Ki Amar',
                                    'Sentuhan seni dalam setiap anyaman.',
                                ],
                            ],
                        },
                        {
                            icon: <ShoppingBag className='h-6 w-6 mr-2' />,
                            title: 'Produk Lokal',
                            items: [
                                [
                                    'Gula Aren Bu Popong',
                                    'Manis alami dari alam Cigalontang.',
                                ],
                                [
                                    'Gula Aren Pak Sarim',
                                    'Gula organik tanpa bahan tambahan.',
                                ],
                                [
                                    'Ketan Hitam Pak Perdi',
                                    'Rasa otentik dari resep warisan.',
                                ],
                                [
                                    'Ketan Hitam Hj Momo',
                                    'Inovasi dalam olahan ketan hitam.',
                                ],
                                [
                                    'Pengolahan Ranggining',
                                    'Wisata edukatif dalam pengolahan hasil bumi.',
                                ],
                            ],
                        },
                        {
                            icon: <Footprints className='h-6 w-6 mr-2' />,
                            title: 'Aktivitas Desa',
                            items: [
                                [
                                    'Ngulak Pangangonan',
                                    'Berinteraksi langsung dengan hewan ternak.',
                                ],
                            ],
                        },
                    ].map(({ icon, title, items }, idx) => (
                        <div
                            key={idx}
                            className='bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100'
                        >
                            <div className='bg-emerald-100 p-4'>
                                <h2 className='text-2xl font-bold text-emerald-800 flex items-center'>
                                    {icon}
                                    {title}
                                </h2>
                            </div>
                            <div className='p-6'>
                                {items.map(([subtitle, desc], i) => (
                                    <div
                                        className='mb-6'
                                        key={i}
                                    >
                                        <h3 className='text-lg font-semibold text-gray-800 mb-2'>
                                            {subtitle}
                                        </h3>
                                        <p className='text-gray-600'>{desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WisataDesa
