'use client'
import React, { useState } from 'react'
import {
    Home,
    ChevronRight,
    MapPin,
    Package,
    Camera,
    ShoppingBag,
    Filter,
    Grid3X3,
    List,
    Star,
    Phone,
    Eye,
} from 'lucide-react'

const WisataUMKMDesa = () => {
    const [activeFilter, setActiveFilter] = useState('all')
    const [viewMode, setViewMode] = useState('grid')
    const dataList = [
        {
            img: '/farmer.jpg',
            title: 'Farmers Coffee Cigalontang',
            kategori: 'Produk Lokal',
            type: 'umkm',
            desc: 'Kopi berkualitas dengan cita rasa khas pegunungan Cigalontang',
            price: 'Rp 20.000 - 50.000',
            contact: '6281234567890',
        },
        {
            img: '/gula-aren-apid-logo.jpg',
            title: 'Gula Aren Cigun Pak Apid',
            kategori: 'Produk Lokal',
            type: 'umkm',
            desc: 'Gula aren murni tanpa campuran bahan kimia, diolah secara tradisional dengan rasa manis alami yang menyehatkan',
            price: 'Rp 15.000 - 35.000',
            contact: '6282378409311',
        },
        {
            img: '/pangangonan.jpg',
            title: 'Situ Pangangonan',
            kategori: 'Wisata',
            type: 'wisata',
            desc: 'Situ Pangangonan, danau alami dengan suasana asri dan menenangkan.',
            rating: 4.4,
            location:
                'https://www.google.com/maps?q=Situ+Pangangonan+Nyalindung',
        },
        {
            img: '/kujang.jpg',
            title: 'Pandai besi Cipta Mandiri',
            kategori: 'Produk Lokal',
            type: 'umkm',
            desc: 'Pandai besi Cipta Mandiri, pengrajin tradisional yang menghasilkan alat pertanian dan perkakas berkualitas.',
            rating: 4.4,
            contact: '6282119787430',
        }
    ]

    // Fungsi untuk mengarahkan ke WhatsApp
    const handleContactSeller = (phoneNumber) => {
        const message =
            'Halo, saya tertarik dengan produk Anda. Bisa info lebih lanjut?'
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            message
        )}`
        window.open(whatsappUrl, '_blank')
    }

    // Fungsi untuk mengarahkan ke Google Maps
    const handleViewLocation = (mapsUrl) => {
        window.open(mapsUrl, '_blank')
    }

    const categories = [
        { id: 'all', name: 'Semua', count: dataList.length },
        {
            id: 'wisata',
            name: 'Wisata Desa',
            count: dataList.filter((item) => item.type === 'wisata').length,
        },
        {
            id: 'umkm',
            name: 'UMKM Produk',
            count: dataList.filter((item) => item.type === 'umkm').length,
        },
    ]

    const filteredData =
        activeFilter === 'all'
            ? dataList
            : dataList.filter((item) => item.type === activeFilter)

    const wisataData = dataList.filter((item) => item.type === 'wisata')
    const umkmData = dataList.filter((item) => item.type === 'umkm')

    return (
        <div className='min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50'>
            {/* Header Section */}
            <div className='bg-gradient-to-r from-emerald-700 to-emerald-500 text-white pt-32 pb-24 relative overflow-hidden'>
                {/* Background Pattern */}
                <div className='absolute inset-0'>
                    <svg
                        className='absolute inset-0 w-full h-full opacity-10'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <defs>
                            <pattern
                                id='tourism-grid'
                                width='60'
                                height='60'
                                patternUnits='userSpaceOnUse'
                            >
                                <path
                                    d='M 60 0 L 0 0 0 60'
                                    fill='none'
                                    stroke='rgba(255,255,255,0.1)'
                                    strokeWidth='1'
                                />
                                <circle
                                    cx='30'
                                    cy='30'
                                    r='2'
                                    fill='rgba(255,255,255,0.1)'
                                />
                            </pattern>
                        </defs>
                        <rect
                            width='100%'
                            height='100%'
                            fill='url(#tourism-grid)'
                        />
                    </svg>
                </div>

                <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
                    <div className='text-center'>
                        <div className='flex items-center justify-center mb-6'>
                            <div className='w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4 backdrop-blur-sm border border-white/30'>
                                <MapPin className='h-8 w-8 text-white' />
                            </div>
                            <h1 className='text-4xl md:text-5xl font-bold'>
                                Wisata & UMKM Desa
                            </h1>
                        </div>
                        <p className='text-emerald-100 text-lg md:text-xl max-w-4xl mx-auto mb-8 leading-relaxed'>
                            Jelajahi destinasi wisata menarik dan dukung produk
                            UMKM lokal Cigalontang. Temukan pengalaman autentik
                            dan produk berkualitas dari masyarakat desa.
                        </p>

                        {/* Quick Stats */}
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-8'>
                            <div className='bg-white/15 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20'>
                                <div className='text-2xl font-bold'>
                                    {wisataData.length}
                                </div>
                                <div className='text-emerald-200 text-sm'>
                                    Destinasi Wisata
                                </div>
                            </div>
                            <div className='bg-white/15 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20'>
                                <div className='text-2xl font-bold'>
                                    {umkmData.length}
                                </div>
                                <div className='text-emerald-200 text-sm'>
                                    Produk UMKM
                                </div>
                            </div>
                            <div className='bg-white/15 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20'>
                                <div className='text-2xl font-bold'>2</div>
                                <div className='text-emerald-200 text-sm'>
                                    Kategori
                                </div>
                            </div>
                            <div className='bg-white/15 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20'>
                                <div className='text-2xl font-bold'>4.5</div>
                                <div className='text-emerald-200 text-sm'>
                                    Rating Rata-rata
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
                            <span className='font-semibold text-white bg-white/15 px-3 py-1 rounded-lg'>
                                Wisata & UMKM
                            </span>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-16 relative z-10'>
                {/* Filter Tabs */}
                <div className='bg-white rounded-2xl shadow-xl border border-emerald-100 mb-8'>
                    <div className='p-6'>
                        <div className='flex flex-wrap items-center justify-between gap-4 mb-6'>
                            <div className='flex items-center space-x-2'>
                                <Filter className='w-5 h-5 text-emerald-600' />
                                <span className='text-sm font-semibold text-emerald-600 uppercase tracking-wide'>
                                    Filter Kategori
                                </span>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`p-2 rounded-lg transition-colors ${
                                        viewMode === 'grid'
                                            ? 'bg-emerald-100 text-emerald-600'
                                            : 'text-gray-400 hover:text-emerald-600'
                                    }`}
                                >
                                    <Grid3X3 className='w-4 h-4' />
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`p-2 rounded-lg transition-colors ${
                                        viewMode === 'list'
                                            ? 'bg-emerald-100 text-emerald-600'
                                            : 'text-gray-400 hover:text-emerald-600'
                                    }`}
                                >
                                    <List className='w-4 h-4' />
                                </button>
                            </div>
                        </div>

                        <div className='flex flex-wrap gap-3'>
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveFilter(category.id)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                        activeFilter === category.id
                                            ? 'bg-emerald-600 text-white shadow-lg'
                                            : 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100'
                                    }`}
                                >
                                    {category.name} ({category.count})
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Content Grid */}
                <div
                    className={
                        viewMode === 'grid'
                            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                            : 'space-y-4'
                    }
                >
                    {filteredData.map((item, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-gray-100 overflow-hidden ${
                                viewMode === 'list' ? 'flex' : ''
                            }`}
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className={
                                    viewMode === 'list'
                                        ? 'w-48 h-32 object-cover flex-shrink-0'
                                        : 'h-48 w-full object-cover'
                                }
                            />
                            <div className='p-5 flex-1'>
                                <div className='flex items-start justify-between mb-3'>
                                    <span
                                        className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                                            item.type === 'wisata'
                                                ? 'bg-blue-100 text-blue-800'
                                                : 'bg-orange-100 text-orange-800'
                                        }`}
                                    >
                                        {item.kategori}
                                    </span>
                                    {item.type === 'wisata' ? (
                                        <Camera className='w-4 h-4 text-blue-500' />
                                    ) : (
                                        <Package className='w-4 h-4 text-orange-500' />
                                    )}
                                </div>

                                <h3 className='text-lg font-bold text-gray-800 mb-2'>
                                    {item.title}
                                </h3>
                                <p className='text-gray-600 text-sm mb-3 line-clamp-2'>
                                    {item.desc}
                                </p>

                                {/* Wisata Info */}
                                {item.type === 'wisata' && (
                                    <div className='space-y-2'>
                                        <div className='flex items-center justify-between text-sm'>
                                            <div className='flex items-center space-x-1'>
                                                <Star className='w-4 h-4 text-yellow-500 fill-current' />
                                                <span className='font-medium'>
                                                    {item.rating}
                                                </span>
                                            </div>
                                            <div className='flex items-center space-x-1 text-gray-500'>
                                                <MapPin className='w-4 h-4' />
                                                <span>Lihat di Maps</span>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() =>
                                                handleViewLocation(
                                                    item.location
                                                )
                                            }
                                            className='cursor-pointer w-full bg-blue-50 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium flex items-center justify-center space-x-2'
                                        >
                                            <MapPin className='w-4 h-4' />
                                            <span>Lihat Lokasi</span>
                                        </button>
                                    </div>
                                )}

                                {/* UMKM Info */}
                                {item.type === 'umkm' && (
                                    <div className='space-y-2'>
                                        <div className='flex items-center justify-between text-sm'>
                                            <span className='font-semibold text-emerald-600'>
                                                {item.price}
                                            </span>
                                            <div className='flex items-center space-x-1 text-gray-500'>
                                                <Phone className='w-4 h-4' />
                                                <span>{item.contact}</span>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() =>
                                                handleContactSeller(
                                                    item.contact
                                                )
                                            }
                                            className='cursor-pointer w-full bg-orange-50 text-orange-600 py-2 px-4 rounded-lg hover:bg-orange-100 transition-colors text-sm font-medium flex items-center justify-center space-x-2'
                                        >
                                            <ShoppingBag className='w-4 h-4' />
                                            <span>Hubungi Penjual</span>
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WisataUMKMDesa
