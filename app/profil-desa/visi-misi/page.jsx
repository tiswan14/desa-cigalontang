import { ChevronRight, Goal, ListChecks } from 'lucide-react'
import React from 'react'

const VisiMisiPage = () => {
    const visi =
        'Mewujudkan desa Cigalontang sebagai desa yang religious Islami, mandiri, unggul, dan terdepan, dalam pembangunan ekonomi, sosial, dan budaya di Kabupaten Tasikmalaya pada tahun 2029'

    const misi = [
        'Meningkatkan tata kelola pemerintahan yang lebih transparan di segala bidang demi terciptanya pelayanan bagi masyarakat yang lebih baik.',
        'Meningkatkan sumber daya manusia yang berakhlakulkarimah.',
        'Meningkatkan daya beli masyarakat.',
        'Meningkatkan derajat kesehatan dan pendidikan masyarakat.',
        'Meningkatkan KAMTIBMAS yang berkualitas.',
        'Meningkatkan pendapatan asli desa.',
        'Meningkatkan partisipasi dan swadaya masyarakat.',
    ]

    return (
        <div className='min-h-screen bg-gradient-to-br from-emerald-50 to-white py-[80px]'>
            {/* Header dengan gradient background */}
            <div
                className='bg-gradient-to-r from-emerald-600 to-emerald-500 text-white py-12 md:py-16'
                data-aos='fade-down'
                data-aos-duration='1000'
            >
                <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center'>
                        {/* Judul dan Subjudul */}
                        <h1 className='text-2xl md:text-5xl font-bold mb-2 md:mb-4'>
                            Visi dan Misi
                        </h1>
                        <p className='text-base md:text-xl text-emerald-100'>
                            Desa Cigalontang
                        </p>

                        {/* Breadcrumb */}
                        <div
                            className='mt-4'
                            data-aos='fade-right'
                        >
                            <nav
                                className='flex justify-center items-center text-sm text-white/80 space-x-2'
                                aria-label='Breadcrumb'
                            >
                                <a
                                    href='/'
                                    className='hover:text-white hover:underline font-medium transition'
                                >
                                    Beranda
                                </a>
                                <span>/</span>
                                <a
                                    href='/profil-desa'
                                    className='hover:text-white hover:underline font-medium transition'
                                >
                                    Profil Desa
                                </a>
                                <span>/</span>
                                <span className='text-white font-semibold'>
                                    Visi & Misi
                                </span>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12'>
                <div className='max-w-4xl mx-auto space-y-12 md:space-y-16'>
                    {/* Visi Section */}
                    <div
                        className='bg-white rounded-2xl shadow-lg p-6 md:p-12 border-l-4 border-emerald-500'
                        data-aos='fade-up'
                        data-aos-delay='100'
                        data-aos-duration='1000'
                    >
                        <div className='text-center mb-6 md:mb-8'>
                            <div className='flex items-center justify-center gap-3'>
                                <Goal
                                    className='w-8 h-8 text-emerald-500'
                                    strokeWidth={2}
                                />
                                <h2 className='text-xl md:text-4xl font-semibold text-gray-800'>
                                    Visi
                                </h2>
                            </div>
                            <div className='w-20 md:w-24 h-1 bg-emerald-500 mx-auto rounded-full mt-3'></div>
                        </div>

                        <div className='text-center'>
                            <blockquote className='text-base md:text-xl text-gray-700 italic leading-relaxed font-medium'>
                                "{visi}"
                            </blockquote>
                        </div>
                    </div>

                    {/* Misi Section */}
                    <div
                        className='bg-white rounded-2xl shadow-lg p-6 md:p-12 border-l-4 border-emerald-500'
                        data-aos='fade-up'
                        data-aos-delay='200'
                        data-aos-duration='1000'
                    >
                        <div className='text-center mb-6 md:mb-8'>
                            <div className='flex items-center justify-center gap-3'>
                                <ListChecks
                                    className='w-8 h-8 text-emerald-500'
                                    strokeWidth={2}
                                />
                                <h2 className='text-xl md:text-4xl font-semibold text-gray-800'>
                                    Misi
                                </h2>
                            </div>
                            <div className='w-20 md:w-24 h-1 bg-emerald-500 mx-auto rounded-full mt-3'></div>
                        </div>

                        <div className='space-y-6'>
                            {misi.map((item, index) => (
                                <div
                                    key={index}
                                    className='flex items-start space-x-4 group'
                                    data-aos='fade-up'
                                    data-aos-delay={300 + index * 100}
                                    data-aos-duration='800'
                                >
                                    <div className='flex-shrink-0 relative'>
                                        <div className='w-8 h-8 md:w-10 md:h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center font-semibold text-sm md:text-lg shadow-md group-hover:bg-emerald-600 transition-colors duration-200'>
                                            {index + 1}
                                        </div>
                                    </div>
                                    <div className='flex-1'>
                                        <p className='text-base md:text-lg text-gray-700 leading-relaxed'>
                                            {item}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Decorative Bottom Element */}
                    <div
                        className='text-center py-6 md:py-8'
                        data-aos='zoom-in'
                        data-aos-delay='300'
                        data-aos-duration='800'
                    >
                        <div className='inline-flex items-center space-x-2 text-emerald-600'>
                            <div className='w-10 md:w-12 h-px bg-emerald-300'></div>
                            <div className='w-2.5 md:w-3 h-2.5 md:h-3 bg-emerald-500 rounded-full'></div>
                            <div className='w-10 md:w-12 h-px bg-emerald-300'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VisiMisiPage
