'use client'
import Link from 'next/link'
import { MapPin, Users, Landmark, Ruler } from 'lucide-react'
import { useEffect, useState } from 'react'

const ProfilSingkatDesa = () => {
    // const [jumlahPenduduk, setJumlahPenduduk] = useState('')
    // const [jumlahRW, setJumlahRW] = useState('')
    // const [jumlahRT, setJumlahRT] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 2000) // 2 detik loading

        return () => clearTimeout(timer)
    }, [])

    // useEffect(() => {
    //     fetch(process.env.SPREAD_API)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             const penduduk = data[0]['jumlah_penduduk']
    //             const rw = data[0]['RW']
    //             const rt = data[0]['RT']

    //             setJumlahPenduduk(
    //                 Number(penduduk).toLocaleString('id-ID') + ' jiwa'
    //             )

    //             console.log(rw);

    //             setJumlahRW(rw)
    //             setJumlahRT(rt)
    //             setIsLoading(false)
    //         })
    // }, [])

    return (
        <section className='max-w-6xl mx-auto px-4 py-12'>
            <div
                className='text-center mb-8'
                data-aos='fade-up'
            >
                <h2 className='text-2xl md:text-4xl font-semibold text-emerald-700 mb-2'>
                    Profil Singkat Desa Cigalontang
                </h2>
                <div
                    className='w-20 h-1 bg-emerald-400 mx-auto rounded-full'
                    data-aos='fade-up'
                    data-aos-delay='100'
                ></div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
                {/* Jumlah Penduduk */}
                <div
                    className='bg-white rounded-xl shadow-sm p-6 border border-emerald-100 hover:shadow-md transition-all'
                    data-aos='fade-up'
                    data-aos-delay='100'
                >
                    <div className='flex items-center mb-4'>
                        <Users className='h-5 w-5 text-emerald-600 mr-2' />
                        <h3 className='text-lg font-medium text-emerald-800'>
                            Jumlah Penduduk
                        </h3>
                    </div>
                    <div className='min-h-[28px] flex items-center'>
                        {isLoading ? (
                            <div className='flex items-center'>
                                <div className='w-4 h-4 border-2 border-emerald-200 border-t-emerald-600 rounded-full animate-spin mr-2'></div>
                                <span className='text-gray-400'>Memuat...</span>
                            </div>
                        ) : (
                            <p className='text-emerald-600 font-bold'>
                                3900 jiwa
                            </p>
                        )}
                    </div>
                </div>

                {/* Jumlah RW */}
                <div
                    className='bg-white rounded-xl shadow-sm p-6 border border-emerald-100 hover:shadow-md transition-all'
                    data-aos='fade-up'
                    data-aos-delay='150'
                >
                    <div className='flex items-center mb-4'>
                        <Landmark className='h-5 w-5 text-emerald-600 mr-2' />
                        <h3 className='text-lg font-medium text-emerald-800'>
                            Rukun Warga (RW)
                        </h3>
                    </div>
                    <div className='min-h-[28px] flex items-center'>
                        {isLoading ? (
                            <div className='flex items-center'>
                                <div className='w-4 h-4 border-2 border-emerald-200 border-t-emerald-600 rounded-full animate-spin mr-2'></div>
                                <span className='text-gray-400'>Memuat...</span>
                            </div>
                        ) : (
                            <p className='text-emerald-600 font-bold'>8 RW</p>
                        )}
                    </div>
                </div>

                {/* Jumlah RT */}
                <div
                    className='bg-white rounded-xl shadow-sm p-6 border border-emerald-100 hover:shadow-md transition-all'
                    data-aos='fade-up'
                    data-aos-delay='200'
                >
                    <div className='flex items-center mb-4'>
                        <Landmark className='h-5 w-5 text-emerald-600 mr-2' />
                        <h3 className='text-lg font-medium text-emerald-800'>
                            Rukun Tetangga (RT)
                        </h3>
                    </div>
                    <div className='min-h-[28px] flex items-center'>
                        {isLoading ? (
                            <div className='flex items-center'>
                                <div className='w-4 h-4 border-2 border-emerald-200 border-t-emerald-600 rounded-full animate-spin mr-2'></div>
                                <span className='text-gray-400'>Memuat...</span>
                            </div>
                        ) : (
                            <p className='text-emerald-600 font-bold'>24 RT</p>
                        )}
                    </div>
                </div>

                {/* Lokasi */}
                <div
                    className='bg-white rounded-xl shadow-sm p-6 border border-emerald-100 hover:shadow-md transition-all'
                    data-aos='fade-up'
                    data-aos-delay='250'
                >
                    <div className='flex items-center mb-4'>
                        <MapPin className='h-5 w-5 text-emerald-600 mr-2' />
                        <h3 className='text-lg font-medium text-emerald-800'>
                            Lokasi
                        </h3>
                    </div>
                    <p className='text-gray-600'>
                        Desa Cigalontang, Kecamatan Cigalontang, Kabupaten
                        Tasikmalaya, Jawa Barat
                    </p>
                </div>

                {/* Luas Wilayah */}
                <div
                    className='bg-white rounded-xl shadow-sm p-6 border border-emerald-100 hover:shadow-md transition-all'
                    data-aos='fade-up'
                    data-aos-delay='300'
                >
                    <div className='flex items-center mb-4'>
                        <Ruler className='h-5 w-5 text-emerald-600 mr-2' />
                        <h3 className='text-lg font-medium text-emerald-800'>
                            Luas Wilayah
                        </h3>
                    </div>
                    <p className='text-gray-600'>
                        <span className='text-emerald-600 font-bold'>
                            537,6 Ha
                        </span>
                    </p>
                </div>

                {/* Potensi Desa */}
                <div
                    className='bg-white rounded-xl shadow-sm p-6 border border-emerald-100 hover:shadow-md transition-all'
                    data-aos='fade-up'
                    data-aos-delay='350'
                >
                    <div className='flex items-center mb-4'>
                        <MapPin className='h-5 w-5 text-emerald-600 mr-2' />
                        <h3 className='text-lg font-medium text-emerald-800'>
                            Potensi Desa
                        </h3>
                    </div>
                    <p className='text-gray-600'>
                        Pertanian, peternakan, dan kerajinan tangan
                    </p>
                </div>
            </div>

            <div
                className='text-center mt-6'
                data-aos='fade-up'
                data-aos-delay='400'
            >
                <Link href='/profil-desa/gambaran-umum'>
                    <button className='cursor-pointer px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg shadow-sm transition-colors inline-flex items-center'>
                        Lihat profil desa lengkap
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-4 w-4 ml-2'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                        >
                            <path
                                fillRule='evenodd'
                                d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                                clipRule='evenodd'
                            />
                        </svg>
                    </button>
                </Link>
            </div>
        </section>
    )
}

export default ProfilSingkatDesa
