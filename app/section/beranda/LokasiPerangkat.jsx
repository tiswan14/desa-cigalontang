import { MapPin, ArrowRight, Building2 } from 'lucide-react'
import Link from 'next/link'

const LokasiPerangkat = () => {
    return (
        <section className='relative py-16 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden'>
            {/* Background decorative elements - keeping subtle blurs for depth */}
            <div className='absolute inset-0 opacity-5'>
                <div className='absolute top-8 left-10 w-24 h-24 bg-lime-400 rounded-full blur-2xl'></div>
                <div className='absolute bottom-8 right-10 w-32 h-32 bg-emerald-400 rounded-full blur-2xl'></div>
            </div>

            <div className='relative max-w-6xl mx-auto'>
                <div className='bg-white rounded-3xl shadow-lg border border-gray-100 p-8 md:p-12'>
                    <div className='flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12'>
                        {/* Icon Section */}
                        <div className='flex-shrink-0'>
                            <div className='relative'>
                                {/* Main icon container */}
                                <div className='w-20 h-20 md:w-24 md:h-24 bg-lime-100 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300'>
                                    <MapPin className='w-10 h-10 md:w-12 md:h-12 text-lime-600' />
                                </div>

                                {/* Floating accent */}
                                <div className='absolute -top-2 -right-2 w-6 h-6 bg-lime-400 rounded-full flex items-center justify-center shadow-md'>
                                    <Building2 className='w-3 h-3 text-gray-900' />
                                </div>

                                {/* Pulse ring */}
                                <div className='absolute inset-0 rounded-2xl bg-lime-200 opacity-0 animate-ping'></div>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className='flex-1 space-y-4'>
                            <div>
                                <h2 className='text-xl md:text-2xl font-bold text-lime-700 leading-tight'>
                                    Lokasi Kantor dan Perangkat Desa
                                </h2>

                                <p className='mt-3 text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl'>
                                    Temukan lokasi lengkap kantor desa dan
                                    perangkat pemerintahan melalui peta digital
                                    interaktif yang mudah diakses.
                                </p>
                            </div>

                            {/* Additional info badges */}
                            <div className='flex flex-wrap gap-3 pt-2'>
                                <div className='inline-flex items-center px-3 py-1 bg-lime-100 text-lime-700 rounded-full text-sm font-medium'>
                                    <MapPin className='w-4 h-4 mr-1' />
                                    Peta Digital
                                </div>
                                <div className='inline-flex items-center px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium'>
                                    <Building2 className='w-4 h-4 mr-1' />
                                    Info Lengkap
                                </div>
                            </div>
                        </div>

                        {/* CTA Button Section */}
                        <div className='flex-shrink-0 w-full lg:w-auto'>
                            <Link
                                href='/peta-perangkatdesa'
                                className='group relative inline-flex items-center justify-center w-full lg:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-lime-400 to-lime-500 font-semibold text-gray-900 shadow-lg hover:from-lime-300 hover:to-lime-400 hover:shadow-xl hover:shadow-lime-400/25 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0'
                            >
                                {/* Button background animation - simplified for solid color */}
                                <div className='absolute inset-0 bg-gradient-to-r from-lime-300 to-lime-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

                                <span className='relative z-10 mr-3'>
                                    Lihat Lokasi Perangkat Desa
                                </span>
                                <ArrowRight className='relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-2' />

                                {/* Shine effect */}
                                <div className='absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500'></div>
                            </Link>
                        </div>
                    </div>

                    {/* Bottom decorative line */}
                    <div className='mt-8 flex justify-center'>
                        <div className='h-1 w-24 bg-lime-400 rounded-full'></div>
                    </div>
                </div>
            </div>

            {/* Floating elements */}
            <div className='absolute top-1/2 left-4 transform -translate-y-1/2 opacity-10'>
                <div className='w-2 h-2 bg-lime-400 rounded-full animate-pulse'></div>
            </div>
            <div className='absolute top-1/3 right-4 transform -translate-y-1/2 opacity-10'>
                <div
                    className='w-3 h-3 bg-emerald-400 rounded-full animate-pulse'
                    style={{ animationDelay: '1s' }}
                ></div>
            </div>
        </section>
    )
}

export default LokasiPerangkat
