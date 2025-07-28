import {
    BookOpenText,
    Landmark,
    Calendar,
    Coffee,
    Leaf,
    Wifi,
    School,
    Lightbulb,
} from 'lucide-react'

const Sejarah = () => {
    return (
        <section
            id='sejarah'
            className='min-h-screen py-20 bg-gradient-to-b from-white to-lime-50'
        >
            <div className='max-w-6xl mx-auto px-5'>
                {/* Header */}
                <div className='text-center mb-16'>
                    <div className='inline-flex items-center justify-center p-4 bg-lime-100 rounded-full mb-5 shadow-sm'>
                        <BookOpenText className='w-8 h-8 text-lime-700' />
                    </div>
                    <h2 className='text-4xl font-bold text-gray-800 mb-3'>
                        Sejarah Desa Cigalontang
                    </h2>
                    <p className='text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed'>
                        Jejak perjalanan dari masa awal hingga transformasi
                        digital
                    </p>
                </div>

                {/* Content Grid */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    {/* Left Column - Historical Facts */}
                    <div className='space-y-8'>
                        {/* Origin Card */}
                        <div className='bg-white p-8 rounded-2xl shadow-xs border border-lime-50 hover:shadow-sm transition-all duration-300 hover:border-lime-200'>
                            <div className='flex items-start gap-5 mb-5'>
                                <div className='p-3 bg-lime-100 rounded-xl text-lime-700 flex-shrink-0'>
                                    <Landmark className='w-6 h-6' />
                                </div>
                                <div>
                                    <h3 className='text-2xl font-semibold text-gray-800 mb-2'>
                                        Asal-usul Nama
                                    </h3>
                                    <p className='text-gray-600 leading-relaxed'>
                                        "Cigalontang" berasal dari bahasa Sunda
                                        "Ci" (air) dan "Galontang" (mengalir
                                        deras), mencerminkan geografi desa yang
                                        diapit dua sungai bersumber dari Gunung
                                        Galunggung.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Settlement Card */}
                        <div className='bg-white p-8 rounded-2xl shadow-xs border border-lime-50 hover:shadow-sm transition-all duration-300 hover:border-lime-200'>
                            <div className='flex items-start gap-5 mb-5'>
                                <div className='p-3 bg-lime-100 rounded-xl text-lime-700 flex-shrink-0'>
                                    <Calendar className='w-6 h-6' />
                                </div>
                                <div>
                                    <h3 className='text-2xl font-semibold text-gray-800 mb-2'>
                                        Awal Permukiman (1825)
                                    </h3>
                                    <p className='text-gray-600 leading-relaxed'>
                                        Diperkirakan mulai dihuni tahun 1825
                                        oleh kelompok petani Sunda. Pola
                                        permukiman awal mengikuti aliran sungai
                                        dengan rumah panggung kayu.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Colonial Card */}
                        <div className='bg-white p-8 rounded-2xl shadow-xs border border-lime-50 hover:shadow-sm transition-all duration-300 hover:border-lime-200'>
                            <div className='flex items-start gap-5 mb-5'>
                                <div className='p-3 bg-lime-100 rounded-xl text-lime-700 flex-shrink-0'>
                                    <Coffee className='w-6 h-6' />
                                </div>
                                <div>
                                    <h3 className='text-2xl font-semibold text-gray-800 mb-2'>
                                        Era Kolonial Belanda
                                    </h3>
                                    <p className='text-gray-600 leading-relaxed'>
                                        Menjadi sentra perkebunan kopi dan teh
                                        tahun 1880-1942. Sistem irigasi
                                        peninggalan Belanda masih berfungsi
                                        hingga kini.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Timeline */}
                    <div className='bg-white p-8 rounded-2xl shadow-xs border border-lime-50'>
                        <h3 className='text-2xl font-semibold text-gray-800 mb-8 flex items-center gap-3'>
                            <span className='w-3 h-3 bg-lime-500 rounded-full'></span>
                            Garis Waktu Perkembangan
                        </h3>

                        <div className='relative pl-10'>
                            {/* Timeline line */}
                            <div className='absolute left-5 top-0 h-full w-0.5 bg-lime-100'></div>

                            {/* Timeline Items */}
                            <div className='space-y-10'>
                                {/* 1950-1975 */}
                                <div className='relative'>
                                    <div className='absolute left-0 -ml-11 top-1 w-5 h-5 rounded-full bg-lime-500 border-4 border-lime-100 flex items-center justify-center'>
                                        <School className='w-3 h-3 text-white' />
                                    </div>
                                    <div className='bg-lime-50 p-6 rounded-xl'>
                                        <h4 className='font-bold text-gray-800 text-lg mb-2 flex items-center gap-2'>
                                            1950–1975
                                        </h4>
                                        <p className='text-gray-600 leading-relaxed'>
                                            Pembangunan infrastruktur dasar:
                                            jalan desa, jembatan kayu, dan SD
                                            Negeri pertama (1958). Sistem gotong
                                            royong menjadi budaya utama.
                                        </p>
                                    </div>
                                </div>

                                {/* 1980-2000 */}
                                <div className='relative'>
                                    <div className='absolute left-0 -ml-11 top-1 w-5 h-5 rounded-full bg-lime-500 border-4 border-lime-100 flex items-center justify-center'>
                                        <Lightbulb className='w-3 h-3 text-white' />
                                    </div>
                                    <div className='bg-lime-50 p-6 rounded-xl'>
                                        <h4 className='font-bold text-gray-800 text-lg mb-2 flex items-center gap-2'>
                                            1980–2000
                                        </h4>
                                        <p className='text-gray-600 leading-relaxed'>
                                            Listrik masuk desa (1985), program
                                            intensifikasi pertanian, dan
                                            pendirian koperasi unit desa. Mulai
                                            berkembang industri rumah tangga.
                                        </p>
                                    </div>
                                </div>

                                {/* 2000-Sekarang */}
                                <div className='relative'>
                                    <div className='absolute left-0 -ml-11 top-1 w-5 h-5 rounded-full bg-lime-500 border-4 border-lime-100 flex items-center justify-center'>
                                        <Wifi className='w-3 h-3 text-white' />
                                    </div>
                                    <div className='bg-lime-50 p-6 rounded-xl'>
                                        <h4 className='font-bold text-gray-800 text-lg mb-2 flex items-center gap-2'>
                                            2000–Sekarang
                                        </h4>
                                        <p className='text-gray-600 leading-relaxed'>
                                            Transformasi digital: website desa
                                            (2015), pelayanan administrasi
                                            online, pengembangan e-commerce
                                            UMKM, dan promosi wisata berbasis
                                            digital.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Fun Fact */}
                        <div className='mt-12 bg-lime-100/60 p-6 rounded-xl border border-lime-200'>
                            <div className='flex items-start gap-4'>
                                <div className='p-2 bg-lime-200 rounded-lg text-lime-700 flex-shrink-0'>
                                    <Leaf className='w-5 h-5' />
                                </div>
                                <div>
                                    <h4 className='font-bold text-lime-800 text-lg mb-2'>
                                        Fakta Unik
                                    </h4>
                                    <p className='text-gray-700 leading-relaxed'>
                                        Desa ini menjadi lokasi syarat film
                                        dokumenter "Jejak Nusantara" (2018)
                                        karena mempertahankan tradisi "Seren
                                        Taun" sambil mengadopsi teknologi
                                        modern.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sejarah
