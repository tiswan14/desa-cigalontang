import {
    Sprout,
    Wheat,
    LandPlot,
    Droplets,
    Users,
    Tractor,
    Warehouse,
    ChevronRight,
    Home,
} from 'lucide-react'

export default function SektorPertanian() {
    return (
        <div className='min-h-screen bg-white py-16'>
            {/* Header with Breadcrumb */}
            <div className='bg-gradient-to-r from-emerald-600 to-emerald-500 text-white pt-16 pb-24 relative'>
                <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center'>
                        <div className='flex items-center justify-center mb-4'>
                            <div className='w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4'>
                                <Sprout className='h-8 w-8 text-white' />
                            </div>
                            <h1 className='text-4xl md:text-5xl font-bold'>
                                Sektor Pertanian
                            </h1>
                        </div>
                        <p className='text-emerald-100 text-lg md:text-xl max-w-3xl mx-auto mb-8'>
                            Potensi pertanian desa dengan berbagai komoditas
                            unggulan dan dukungan fasilitas modern untuk
                            kesejahteraan masyarakat Cigalontang.
                        </p>
                    </div>
                </div>
                <div className='absolute bottom-0 left-0 right-0 pb-6'>
                    <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                        <nav
                            className='flex items-center justify-center text-sm'
                            aria-label='Breadcrumb'
                        >
                            <a
                                href='/'
                                className='flex items-center text-white hover:text-emerald-100 transition-colors duration-200'
                            >
                                <Home className='h-4 w-4 mr-1' />
                                Beranda
                            </a>
                            <ChevronRight className='h-4 w-4 mx-2 text-emerald-300' />
                            <a
                                href='/potensi-desa'
                                className='text-white hover:text-emerald-100 transition-colors duration-200'
                            >
                                Potensi Desa
                            </a>
                            <ChevronRight className='h-4 w-4 mx-2 text-emerald-300' />
                            <span className='font-semibold text-white'>
                                Sektor Pertanian
                            </span>
                        </nav>
                    </div>
                </div>
            </div>

            <main className='container mx-auto px-4 pb-16 py-12'>
                <section
                    className='mb-16'
                    data-aos='fade-up'
                >
                    <h2 className='text-2xl font-semibold text-emerald-800 mb-6 flex items-center'>
                        <LandPlot className='w-6 h-6 mr-2 text-emerald-600' />
                        Data Umum Pertanian
                    </h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                        <div className='bg-emerald-50 p-6 rounded-lg'>
                            <div className='text-2xl font-bold text-emerald-700 mb-1'>
                                196.2 ha
                            </div>
                            <p className='text-gray-600'>Luas sawah</p>
                        </div>
                        <div
                            className='bg-emerald-50 p-6 rounded-lg'
                            data-aos='fade-up'
                            data-aos-delay='100'
                        >
                            <div className='text-2xl font-bold text-emerald-700 mb-1'>
                                154.9 ha
                            </div>
                            <p className='text-gray-600'>Luas ladang & kebun</p>
                        </div>
                        <div
                            className='bg-emerald-50 p-6 rounded-lg'
                            data-aos='fade-up'
                            data-aos-delay='150'
                        >
                            <div className='text-2xl font-bold text-emerald-700 mb-1'>
                                Baik
                            </div>
                            <p className='text-gray-600'>
                                Akses irigasi teknis
                            </p>
                            <Droplets
                                className='mt-2 text-emerald-600'
                                size={20}
                            />
                        </div>
                        <div
                            className='bg-emerald-50 p-6 rounded-lg'
                            data-aos='fade-up'
                            data-aos-delay='200'
                        >
                            <div className='text-2xl font-bold text-emerald-700 mb-1'>
                                1.532
                            </div>
                            <p className='text-gray-600'>Buruh tani & petani</p>
                            <Users
                                className='mt-2 text-emerald-600'
                                size={20}
                            />
                        </div>
                    </div>
                </section>

                <section
                    className='mb-16'
                    data-aos='fade-up'
                >
                    <h2 className='text-2xl font-semibold text-emerald-800 mb-6 flex items-center'>
                        <Wheat className='w-6 h-6 mr-2 text-emerald-600' />
                        Komoditas Unggulan
                    </h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                        <div className='bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
                            <div className='text-4xl mb-3'>🌾</div>
                            <h3 className='font-semibold text-emerald-700 mb-1'>
                                Padi
                            </h3>
                            <p className='text-2xl font-bold text-emerald-800'>
                                25 ton/tahun
                            </p>
                        </div>
                        <div
                            className='bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow'
                            data-aos='fade-up'
                            data-aos-delay='100'
                        >
                            <div className='text-4xl mb-3'>🌽</div>
                            <h3 className='font-semibold text-emerald-700 mb-1'>
                                Jagung
                            </h3>
                            <p className='text-2xl font-bold text-emerald-800'>
                                1.5 ton/tahun
                            </p>
                        </div>
                        <div
                            className='bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow'
                            data-aos='fade-up'
                            data-aos-delay='150'
                        >
                            <div className='text-4xl mb-3'>🥜</div>
                            <h3 className='font-semibold text-emerald-700 mb-1'>
                                Kacang Tanah
                            </h3>
                            <p className='text-2xl font-bold text-emerald-800'>
                                0.5 ton/tahun
                            </p>
                        </div>
                        <div
                            className='bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow'
                            data-aos='fade-up'
                            data-aos-delay='200'
                        >
                            <div className='text-4xl mb-3'>🍅</div>
                            <h3 className='font-semibold text-emerald-700 mb-1'>
                                Sayuran
                            </h3>
                            <p className='text-2xl font-bold text-emerald-800'>
                                30 ton/tahun
                            </p>
                        </div>
                    </div>
                </section>

                <section data-aos='fade-up'>
                    <h2 className='text-2xl font-semibold text-emerald-800 mb-6 flex items-center'>
                        <Users className='w-6 h-6 mr-2 text-emerald-600' />
                        Kelompok Tani & Fasilitas
                    </h2>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                        <div>
                            <h3 className='text-xl font-medium text-emerald-700 mb-4'>
                                Kelompok Tani
                            </h3>
                            <div className='space-y-4'>
                                <div className='bg-emerald-50 p-5 rounded-lg'>
                                    <h4 className='font-semibold text-emerald-800'>
                                        Tunas Harapan
                                    </h4>
                                    <p className='text-gray-600'>
                                        34 anggota aktif
                                    </p>
                                </div>
                                <div
                                    className='bg-emerald-50 p-5 rounded-lg'
                                    data-aos='fade-up'
                                    data-aos-delay='100'
                                >
                                    <h4 className='font-semibold text-emerald-800'>
                                        Mekar Sari
                                    </h4>
                                    <p className='text-gray-600'>
                                        27 anggota aktif
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
