'use client'
import { Home, ChevronRight, MapPin } from 'lucide-react'

const WisataDesa = () => {
    const wisataList = [
        // Wisata Alam
        {
            img: '/images/ngalanglang.jpg',
            title: 'Ngalanglang Karancagean Domba',
            kategori: 'Wisata Alam',
        },

        // Wisata Kuliner
        {
            img: '/images/farmers-coffee.jpg',
            title: 'Farmers Coffee Cigalontang',
            kategori: 'Wisata Kuliner',
        },
        {
            img: '/images/ngendang-rasa.jpg',
            title: 'Ngendang Rasa',
            kategori: 'Wisata Kuliner',
        },
        {
            img: '/images/seren-manis.jpg',
            title: 'Seren Manis',
            kategori: 'Wisata Kuliner',
        },

        // Kerajinan Tangan
        {
            img: '/images/anyaman-tatih.jpg',
            title: 'Anyaman Bu Tatih',
            kategori: 'Kerajinan Tangan',
        },
        {
            img: '/images/anyaman-amar.jpg',
            title: 'Anyaman Ki Amar',
            kategori: 'Kerajinan Tangan',
        },

        // Produk Lokal
        {
            img: '/images/gula-aren-popong.jpg',
            title: 'Gula Aren Bu Popong',
            kategori: 'Produk Lokal',
        },
        {
            img: '/images/gula-aren-sarim.jpg',
            title: 'Gula Aren Pak Sarim',
            kategori: 'Produk Lokal',
        },
        {
            img: '/images/ketan-hitam-perdi.jpg',
            title: 'Ketan Hitam Pak Perdi',
            kategori: 'Produk Lokal',
        },
        {
            img: '/images/ketan-hitam-momo.jpg',
            title: 'Ketan Hitam Hj Momo',
            kategori: 'Produk Lokal',
        },
        {
            img: '/images/ranggining.jpg',
            title: 'Pengolahan Ranggining',
            kategori: 'Produk Lokal',
        },

        // Aktivitas Desa
        {
            img: '/images/ngulak-pangangonan.jpg',
            title: 'Ngulak Pangangonan',
            kategori: 'Aktivitas Desa',
        },
    ]

    return (
        <div>
            {/* Header Section */}
            <div className='bg-gradient-to-r from-emerald-700 to-emerald-500 text-white pt-24 pb-12 relative overflow-hidden'>
                <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12'>
                    <div className='text-center'>
                        <div className='flex items-center justify-center mb-4'>
                            <div className='w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-3 backdrop-blur-sm border border-white/30'>
                                <MapPin className='h-6 w-6 text-white' />
                            </div>
                            <h1 className='text-3xl md:text-4xl font-bold'>
                                Eksplorasi Wisata Desa Cigalontang
                            </h1>
                        </div>
                        <p className='text-emerald-100 text-base md:text-lg max-w-3xl mx-auto mb-4 leading-relaxed'>
                            Jelajahi keindahan alam, kuliner, produk lokal,
                            kerajinan tangan, dan aktivitas desa khas
                            Cigalontang yang menghadirkan pengalaman tak
                            terlupakan.
                        </p>
                    </div>
                </div>

                {/* Breadcrumb */}
                <div className='absolute bottom-0 left-0 right-0 pb-4'>
                    <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                        <nav
                            className='flex items-center justify-center text-sm'
                            aria-label='Breadcrumb'
                        >
                            <a
                                href='/'
                                className='flex items-center text-white hover:text-emerald-100 transition-colors duration-200 px-2 py-1 rounded hover:bg-white/10'
                            >
                                <Home className='h-3.5 w-3.5 mr-1' />
                                Beranda
                            </a>
                            <ChevronRight className='h-3.5 w-3.5 mx-1.5 text-emerald-300' />
                            <span className='font-semibold text-white bg-white/15 px-2.5 py-0.5 rounded-lg'>
                                Wisata Desa
                            </span>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Wisata Cards */}
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {wisataList.map(({ img, title, desc, kategori }, i) => (
                        <div
                            key={i}
                            className='bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1'
                        >
                            <img
                                src={img}
                                alt={title}
                                className='h-60 w-full object-cover rounded-t-2xl'
                            />
                            <div className='p-5'>
                                <span className='inline-block px-3 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-800 mb-3'>
                                    {kategori}
                                </span>
                                <h3 className='text-xl font-bold text-gray-800 mb-2'>
                                    {title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WisataDesa
