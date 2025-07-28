import {
    Wheat,
    Store,
    MapPin,
    Palette,
    TrendingUp,
    ArrowRight,
} from 'lucide-react'

const PotensiUnggulan = () => {
    const potentials = [
        {
            id: 1,
            title: 'Pertanian',
            description:
                'Lumbung padi organik dengan sistem irigasi tradisional yang menghasilkan 2.500 ton gabah berkualitas tinggi per tahun.',
            icon: Wheat,
            image: '/placeholder.svg?height=300&width=400',
            bgColor: 'from-lime-500 to-emerald-600', // Keeping these distinct for variety
            iconBg: 'bg-lime-100',
            iconColor: 'text-lime-600',
            accentColor: 'text-lime-700',
            highlight: 'Komoditas: Padi, Palawija, Sayuran Organik',
            stats: '2.500 ton/tahun',
        },
        {
            id: 2,
            title: 'UMKM',
            description:
                '150+ usaha mikro dengan omzet kolektif Rp3,2 miliar per bulan, didukung pelatihan dan pembiayaan desa.',
            icon: Store,
            image: '/placeholder.svg?height=300&width=400',
            bgColor: 'from-amber-500 to-orange-600',
            iconBg: 'bg-amber-100',
            iconColor: 'text-amber-600',
            accentColor: 'text-amber-700',
            highlight: 'Produk: Makanan Tradisional, Kerajinan, Jasa',
            stats: '150+ usaha',
        },
        {
            id: 3,
            title: 'Wisata',
            description:
                'Agrowisata kebun teh dan budaya Sunda yang menarik 5.000+ wisatawan per tahun dengan pendapatan Rp800 juta.',
            icon: MapPin,
            image: '/placeholder.svg?height=300&width=400',
            bgColor: 'from-sky-500 to-blue-600',
            iconBg: 'bg-sky-100',
            iconColor: 'text-sky-600',
            accentColor: 'text-sky-700',
            highlight: 'Destinasi: Perkebunan Teh, Kampung Budaya, Air Terjun',
            stats: '5.000+ wisatawan',
        },
        {
            id: 4,
            title: 'Industri Kreatif',
            description:
                'Sentra batik tulis dan kerajinan bambu dengan 50+ perajin terampil yang mengekspor produk ke 3 negara.',
            icon: Palette,
            image: '/placeholder.svg?height=300&width=400',
            bgColor: 'from-purple-500 to-fuchsia-600',
            iconBg: 'bg-purple-100',
            iconColor: 'text-purple-600',
            accentColor: 'text-purple-700',
            highlight: 'Produk: Batik Tulis, Anyaman Bambu, Tenun',
            stats: 'Ekspor 3 negara',
        },
    ]

    return (
        <section className='relative py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden'>
            {/* Background decorative elements - keeping subtle blurs for depth */}
            <div className='absolute inset-0 opacity-10'>
                <div className='absolute top-20 left-10 w-40 h-40 bg-lime-400 rounded-full blur-3xl animate-pulse'></div>
                <div
                    className='absolute top-60 right-20 w-32 h-32 bg-emerald-400 rounded-full blur-3xl animate-pulse'
                    style={{ animationDelay: '1s' }}
                ></div>
                <div
                    className='absolute bottom-40 left-1/4 w-36 h-36 bg-teal-400 rounded-full blur-3xl animate-pulse'
                    style={{ animationDelay: '2s' }}
                ></div>
            </div>

            <div className='relative max-w-7xl mx-auto'>
                {/* Header Section */}
                <div className='text-center mb-16'>
                    <div className='inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-lime-400 to-lime-500 rounded-2xl mb-6 shadow-lg'>
                        <TrendingUp className='w-8 h-8 text-gray-900' />
                    </div>

                    <h2 className='text-4xl md:text-5xl font-bold text-lime-700 mb-4 leading-tight'>
                        Potensi Unggulan Desa Cigalontang
                    </h2>

                    <p className='text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed'>
                        Kekuatan lokal yang menjadi tulang punggung perekonomian
                        dan kemajuan masyarakat desa
                    </p>

                    {/* Decorative line */}
                    <div className='flex items-center justify-center mt-8'>
                        <div className='h-1 w-20 bg-lime-400 rounded-full'></div>
                        <div className='h-2 w-2 bg-emerald-400 rounded-full mx-4'></div>
                        <div className='h-1 w-20 bg-teal-400 rounded-full'></div>
                    </div>
                </div>

                {/* Cards Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {potentials.map((potential) => {
                        const IconComponent = potential.icon
                        return (
                            <div
                                key={potential.id}
                                className='group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100'
                            >
                                {/* Image Section with Gradient Overlay */}
                                <div className='relative h-48 overflow-hidden'>
                                    <img
                                        src={
                                            potential.image ||
                                            '/placeholder.svg'
                                        }
                                        alt={`${potential.title} Desa Cigalontang`}
                                        className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                                    />
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-t ${potential.bgColor} opacity-80`}
                                    ></div>
                                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent'></div>

                                    {/* Stats badge */}
                                    <div className='absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700'>
                                        {potential.stats}
                                    </div>

                                    {/* Floating icon */}
                                    <div className='absolute bottom-4 left-4'>
                                        <div
                                            className={`${potential.iconBg} p-3 rounded-full shadow-lg backdrop-blur-sm`}
                                        >
                                            <IconComponent
                                                className={`w-6 h-6 ${potential.iconColor}`}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className='p-6'>
                                    <div className='mb-4'>
                                        <h3 className='text-xl md:text-2xl font-bold text-gray-800 mb-2 group-hover:text-lime-700 transition-colors duration-300'>
                                            {potential.title}
                                        </h3>
                                        <p className='text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300'>
                                            {potential.description}
                                        </p>
                                    </div>

                                    {/* Footer with highlight */}
                                    <div className='border-t border-gray-100 pt-4'>
                                        <div
                                            className={`flex items-start ${potential.accentColor}`}
                                        >
                                            <TrendingUp className='w-4 h-4 mr-2 mt-0.5 flex-shrink-0' />
                                            <span className='text-sm font-medium leading-relaxed'>
                                                {potential.highlight}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Bottom accent line */}
                                    <div
                                        className={`mt-4 h-1 w-0 bg-gradient-to-r ${potential.bgColor} rounded-full group-hover:w-full transition-all duration-700`}
                                    ></div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Call to Action Button */}
                <div className='mt-16 text-center'>
                    <button className='group inline-flex items-center px-8 py-4 rounded-2xl bg-gradient-to-r from-lime-400 to-lime-500 font-semibold text-white shadow-lg hover:from-lime-300 hover:to-lime-400 hover:shadow-xl hover:shadow-lime-400/25 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0'>
                        <span className='mr-2'>
                            Jelajahi Seluruh Potensi Desa
                        </span>
                        <ArrowRight className='w-5 h-5 transition-transform duration-300 group-hover:translate-x-1' />
                    </button>
                </div>

                {/* Bottom decorative elements */}
                <div className='flex justify-center mt-12'>
                    <div className='flex items-center space-x-3'>
                        <div className='w-2 h-2 bg-lime-400 rounded-full animate-bounce'></div>
                        <div
                            className='w-3 h-3 bg-emerald-400 rounded-full animate-bounce'
                            style={{ animationDelay: '0.1s' }}
                        ></div>
                        <div
                            className='w-2 h-2 bg-teal-400 rounded-full animate-bounce'
                            style={{ animationDelay: '0.2s' }}
                        ></div>
                        <div
                            className='w-3 h-3 bg-lime-500 rounded-full animate-bounce'
                            style={{ animationDelay: '0.3s' }}
                        ></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PotensiUnggulan
