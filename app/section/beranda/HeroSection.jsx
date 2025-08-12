'use client'
import React from 'react'
import Image from 'next/image'
import {
    Compass,
    Mail,
    MapPin,
    MapPinCheck,
    MapPinCheckIcon,
    Users,
} from 'lucide-react'
import Link from 'next/link'

const HeroSection = () => {
    return (
        <section className='relative h-screen min-h-[500px] w-full overflow-hidden mt-8 md:mt-3 md:py-0'>
            {/* Background Image dengan Enhanced Overlay */}
            <div className='absolute inset-0 z-0'>
                <Image
                    src='/sawah.jpg'
                    alt='Pemandangan Desa'
                    fill
                    className='object-cover'
                    quality={100}
                    priority
                    sizes='(max-width: 768px) 100vw, 100vw'
                />
                <div className='absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80'></div>
                <div className='absolute inset-0 bg-gradient-to-r from-emerald-900/20 via-transparent to-lime-900/20'></div>

                {/* Floating particles effect */}
                <div className='absolute inset-0 opacity-20'>
                    <div className='absolute top-1/4 left-1/4 w-2 h-2 bg-lime-400 rounded-full animate-ping'></div>
                    <div className='absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse'></div>
                    <div className='absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-lime-300 rounded-full animate-ping animation-delay-1000'></div>
                </div>
            </div>

            {/* Konten */}
            <div className='container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-white'>
                {/* Location Badge */}
                <div
                    data-aos='fade-down'
                    data-aos-delay='200'
                    className='mb-6 hidden md:flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm border border-white/20'
                >
                    <MapPin className='h-4 w-4 text-emerald-400' />
                    <span className='text-sm font-medium'>
                        Tasikmalaya, Jawa Barat
                    </span>
                </div>

                {/* Main Title */}
                <h1
                    data-aos='fade-up'
                    data-aos-delay='400'
                    className='mb-4 text-3xl sm:text-4xl md:text-4xl lg:text-6xl font-bold leading-tight'
                >
                    <span className='block mb-2 text-gray-200'>
                        Selamat Datang di Website Resmi
                    </span>
                    <span className='block text-emerald-500 font-bold'>
                        Desa Cigalontang
                    </span>
                </h1>

                {/* Subtitle */}
                <h2
                    data-aos='fade-up'
                    data-aos-delay='600'
                    className='mb-2 text-base sm:text-lg md:text-xl text-white/90 flex items-center gap-2 justify-center flex-wrap'
                >
                    <MapPinCheckIcon className='h-5 w-5 text-emerald-500' />
                    Kecamatan Cigalontang, Kabupaten Tasikmalaya
                </h2>

                {/* Description */}
                <p
                    data-aos='fade-up'
                    data-aos-delay='800'
                    className='mb-8 mt-4 max-w-2xl text-sm sm:text-base md:text-lg text-white/80 leading-relaxed'
                >
                    Portal informasi desa dan potensi lokal untuk kemajuan
                    bersama.
                </p>

                {/* Buttons */}
                <div
                    data-aos='fade-up'
                    data-aos-delay='1000'
                    className='w-full flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6 md:gap-8 lg:gap-10'
                >
                    {/* Tombol 1 - Jelajahi Profil */}
                    <Link
                        href='/profil-desa'
                        className='group flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 md:px-8 md:py-4 font-semibold text-white text-xs sm:text-sm md:text-base transition-all duration-300 hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/25 hover:-translate-y-0.5 active:translate-y-0'
                    >
                        <Compass className='h-5 w-5 group-hover:rotate-12 transition-transform duration-300' />
                        Jelajahi Profil Desa
                    </Link>
                    {/* Tombol 2 - Hubungi Kami */}
                    <Link
                        href='/kontak'
                        className='group flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border-2 border-white/50 px-6 py-3 md:px-8 md:py-4 font-semibold text-white text-xs sm:text-sm md:text-base transition-all duration-300 hover:bg-white hover:text-gray-900 hover:border-white hover:shadow-lg hover:shadow-white/25 hover:-translate-y-0.5 active:translate-y-0 backdrop-blur-sm bg-white/5'
                    >
                        <Mail className='h-5 w-5 group-hover:scale-110 transition-transform duration-300' />
                        Hubungi Kami
                    </Link>
                </div>
            </div>

            {/* Bottom Fade */}
            <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent z-5'></div>
        </section>
    )
}

export default HeroSection
