'use client'
import { Users2, MapPin, ArrowRight, Star } from 'lucide-react'
import dataLokasiTokoh from '../data/dataLokasiTokoh'

const CardLokasiTokoh = () => {
    const renderStars = (rating) => (
        <div className='flex items-center mt-2'>
            {[...Array(5)].map((_, i) => (
                <Star
                    key={i}
                    className={`w-4 h-4 ${
                        i < rating
                            ? 'fill-lime-500 text-lime-500'
                            : 'text-gray-300'
                    }`}
                />
            ))}
            <span className='text-xs text-gray-500 ml-1'>({rating}.0)</span>
        </div>
    )

    return (
        <section
            id='lokasi-tokoh'
            className='relative py-16 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden'
        >
            {/* Background decorative elements */}
            <div className='absolute inset-0 opacity-5'>
                <div className='absolute top-10 left-10 w-32 h-32 bg-lime-400 rounded-full blur-3xl'></div>
                <div className='absolute top-40 right-20 w-48 h-48 bg-emerald-400 rounded-full blur-3xl'></div>
            </div>

            <div className='relative max-w-7xl mx-auto'>
                <div
                    className='text-center mb-16'
                    data-aos='fade-up'
                    data-aos-duration='800'
                >
                    <div className='inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-lime-400 to-lime-500 rounded-2xl mb-6 shadow-lg'>
                        <Users2 className='w-8 h-8 text-gray-900' />
                    </div>
                    <h2 className='text-4xl md:text-5xl font-bold text-lime-700 mb-4 leading-tight'>
                        Lokasi Rumah & Kantor Perangkat Desa
                    </h2>
                    <p className='text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed'>
                        Temukan lokasi perangkat desa dengan mudah
                    </p>
                    <div className='flex items-center justify-center mt-8'>
                        <div className='h-1 w-16 bg-lime-400 rounded-full'></div>
                        <div className='h-2 w-2 bg-emerald-400 rounded-full mx-3'></div>
                        <div className='h-1 w-16 bg-teal-400 rounded-full'></div>
                    </div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
                    {dataLokasiTokoh.map((lokasi, index) => {
                        const IconComponent = lokasi.icon
                        return (
                            <div
                                key={index}
                                data-aos='fade-up'
                                data-aos-delay={index * 100}
                                data-aos-duration='700'
                                className='group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-lime-200'
                            >
                                <a
                                    href={lokasi.link}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='block p-6'
                                >
                                    <div className='flex items-start gap-5'>
                                        <div className='relative flex-shrink-0'>
                                            <div className='bg-lime-100 p-3 rounded-lg shadow-inner'>
                                                <IconComponent className='w-6 h-6 text-lime-600' />
                                            </div>
                                        </div>
                                        <div className='flex-1'>
                                            <div className='flex justify-between items-start'>
                                                <h3 className='text-lg font-semibold text-gray-900 group-hover:text-lime-700 transition-colors duration-200'>
                                                    {lokasi.nama}
                                                </h3>
                                                {lokasi.rating &&
                                                    renderStars(lokasi.rating)}
                                            </div>
                                            <p className='text-gray-600 text-sm mt-2 leading-relaxed'>
                                                {lokasi.deskripsi}
                                            </p>
                                            <div className='flex items-center mt-4 text-sm text-lime-600 font-medium group-hover:text-lime-700 transition-colors duration-200'>
                                                <MapPin className='w-4 h-4 mr-2 flex-shrink-0' />
                                                <span>Lihat di Maps</span>
                                                <ArrowRight className='w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-200' />
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <div className='absolute inset-0 bg-gradient-to-br from-white to-lime-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10'></div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default CardLokasiTokoh
