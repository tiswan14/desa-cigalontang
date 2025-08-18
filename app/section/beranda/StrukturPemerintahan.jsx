'use client'

import { Users, User, ArrowRight } from 'lucide-react'

const StrukturPemerintahan = () => {
    const perangkatDesa = [
        {
            nama: 'DENI NUGRAHA, S.IP',
            jabatan: 'Kepala Desa',
            foto: '/kepala-desa.jpg',
        },
        {
            nama: 'Momo S.Ip',
            jabatan: 'Sekretaris Desa',
            foto: '/momo.png',
        },
        {
            nama: 'Dedin S.Kom',
            jabatan: 'Kasi Tata Usaha',
            foto: '/dedin.png',
        },
        {
            nama: 'Yuda Brahmantiar S.Ip',
            jabatan: 'Kaur Perencanaan',
            foto: '/yuda.png',
        },
    ]

    // Pisahkan Kepala Desa dan perangkat lainnya
    const kepalaDesa = perangkatDesa.find((p) => p.jabatan === 'Kepala Desa')
    const perangkatLain = perangkatDesa.filter(
        (p) => p.jabatan !== 'Kepala Desa'
    )

    return (
        <section className='py-20 bg-gradient-to-br from-gray-50 to-white'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Section Header */}
                <div className='text-center mb-16'>
                    <span className='inline-flex items-center px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium mb-6'>
                        <Users className='h-4 w-4 mr-2' />
                        PEMERINTAHAN DESA
                    </span>
                    <h2 className='text-4xl font-bold text-gray-900 mb-4'>
                        Struktur Pemerintahan
                    </h2>
                    <div className='mx-auto w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full mb-6'></div>
                    <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
                        Kepala desa dan perangkat desa yang bekerja bersama
                        dalam pelayanan publik dan pembangunan masyarakat.
                    </p>
                </div>

                {/* === KEPALA DESA - Tampilan Khusus === */}
                {kepalaDesa && (
                    <div className='max-w-2xl mx-auto mb-16'>
                        <div className='group relative bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-emerald-200 transition-all duration-300 hover:shadow-3xl hover:-translate-y-2'>
                            {/* Badge Kepala Desa */}
                            <div className='absolute top-4 left-4 z-10'>
                                <span className='inline-flex items-center px-3 py-1 rounded-full bg-emerald-600 text-white text-sm font-semibold'>
                                    <User className='h-4 w-4 mr-1' />
                                    KEPALA DESA
                                </span>
                            </div>

                            {/* Photo */}
                            <div className='relative h-80 sm:h-72 overflow-hidden bg-gradient-to-br from-emerald-100 to-teal-100'>
                                {kepalaDesa.foto ? (
                                    <img
                                        src={kepalaDesa.foto}
                                        alt={`Foto ${kepalaDesa.nama}`}
                                        className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                                        onError={(e) => {
                                            e.target.onerror = null
                                            e.target.src = ''
                                        }}
                                    />
                                ) : (
                                    <div className='w-full h-full flex items-center justify-center'>
                                        <User className='h-24 w-24 text-emerald-600' />
                                    </div>
                                )}
                                {/* Gradient overlay */}
                                <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent'></div>
                            </div>

                            {/* Info */}
                            <div className='p-8 text-center bg-gradient-to-r from-emerald-50 to-teal-50'>
                                <h3 className='text-3xl font-bold text-gray-800 mb-2'>
                                    {kepalaDesa.nama}
                                </h3>

                                <div className='w-16 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full mx-auto mb-4'></div>
                            </div>
                        </div>
                    </div>
                )}

                {/* === PERANGKAT DESA LAINNYA === */}
                <div className='mb-8'>
                    <h3 className='text-2xl font-bold text-gray-800 text-center mb-8'>
                        Perangkat Desa
                    </h3>
                    <div className='grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                        {perangkatLain.map((pejabat, idx) => (
                            <div
                                key={idx}
                                className='group relative bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1'
                            >
                                {/* Photo */}
                                <div className='relative h-64 overflow-hidden bg-gray-100'>
                                    {pejabat.foto ? (
                                        <img
                                            src={pejabat.foto}
                                            alt={`Foto ${pejabat.nama}`}
                                            className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                                            onError={(e) => {
                                                e.target.onerror = null
                                                e.target.src = ''
                                            }}
                                        />
                                    ) : (
                                        <div className='w-full h-full flex items-center justify-center bg-emerald-100'>
                                            <Users className='h-16 w-16 text-emerald-600' />
                                        </div>
                                    )}
                                </div>

                                {/* Info */}
                                <div className='p-6'>
                                    <h4 className='text-xl font-bold text-gray-800 mb-1'>
                                        {pejabat.nama}
                                    </h4>
                                    <p className='text-emerald-600 font-medium mb-3'>
                                        {pejabat.jabatan}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className='text-center'>
                    <a
                        href='/profil-desa/struktur-organisasi'
                        className='inline-flex items-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg group'
                    >
                        Lihat Struktur Lengkap
                        <ArrowRight className='h-5 w-5 ml-2 transition-transform group-hover:translate-x-1' />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default StrukturPemerintahan
