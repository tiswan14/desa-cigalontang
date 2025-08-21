'use client'

import { Building2, Users } from 'lucide-react'

const StrukturOrganisasiClient = () => {
    // Sample data structure - replace with your actual data
    const strukturPemerintahan = [
        {
            kategori: 'Kepala Desa',
            data: [
                {
                    nama: 'DENI NUGRAHA, S.IP',
                    jabatan: 'Kepala Desa',
                    sk: '',
                    foto: '/kades.png',
                },
            ],
        },
        {
            kategori: 'Perangkat Desa',
            data: [
                {
                    nama: 'Momo S.Ip',
                    jabatan: 'Sekretaris Desa',
                    sk: 'SK: 141.1/01/2016',
                    foto: '/momo.png',
                },
                {
                    nama: 'Dedin S.Kom',
                    jabatan: 'Kasi Tata Usaha',
                    sk: 'SK: 141.1/01/2017',
                    foto: '/dedin.png',
                },
                {
                    nama: 'Yuda Brahmantiar S.Ip',
                    jabatan: 'Kaur Perencanaan',
                    sk: 'SK: 141.1/02/2017',
                    foto: '/yuda.png',
                },
                {
                    nama: 'Dadang Sutisna S.Pd',
                    jabatan: 'Kaur Keuangan',
                    sk: 'SK: 141.1/01/2016',
                    foto: '/dadang.png',
                },
                {
                    nama: 'Wawan Sutiawan',
                    jabatan: 'Kasi Kesra',
                    sk: 'SK: 141.1/01/2016',
                    foto: '/wawan.png',
                },
                {
                    nama: 'Naman Mulyadi',
                    jabatan: 'Kasi Pemerintahan',
                    sk: 'SK: 141.1/01/2018',
                    foto: '/naman.png',
                },
                {
                    nama: 'Rina Hamidah',
                    jabatan: 'Staff Desa',
                    sk: 'SK: 141.1/02/2017',
                    foto: '/rina.png',
                },
                {
                    nama: 'Heri',
                    jabatan: 'Staff Desa',
                    sk: 'SK: 141.1/02/2017',
                    foto: '/heri.png',
                },
            ],
        },
        {
            kategori: 'Kepala Dusun',
            data: [
                {
                    nama: 'Oya',
                    jabatan: 'Kadus I',
                    sk: 'SK: 141.1/02/2017',
                    foto: '/oya.png',
                },
                {
                    nama: 'Iday Rustandi',
                    jabatan: 'Kadus II',
                    sk: 'SK: 141.1/02/2017',
                    foto: '/iday.png',
                },
                {
                    nama: 'Engku Kuswanda',
                    jabatan: 'Kadus III',
                    sk: 'SK: 141.1/02/2017',
                    foto: '/engku.png',
                },
            ],
        },
    ]

    return (
        <div className='min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 lg:py-20'>
            {/* Modern Header */}
            <header className='relative bg-gradient-to-r from-emerald-700 to-emerald-600 py-16 text-white overflow-hidden'>
                <div className='absolute inset-0 opacity-5'>
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('/img/pattern.svg')] bg-repeat opacity-20"></div>
                </div>

                <div className='container mx-auto px-4 relative z-10'>
                    <div className='max-w-4xl mx-auto text-center'>
                        <div className='inline-flex items-center justify-center mb-6 bg-emerald-800/20 backdrop-blur-sm px-6 py-3 rounded-full border border-emerald-500/30'>
                            <Building2 className='w-6 h-6 mr-2 text-emerald-300' />
                            <span className='text-emerald-100 font-medium'>
                                Struktur Organisasi
                            </span>
                        </div>

                        <h1 className='text-4xl md:text-5xl font-bold mb-6 leading-tight'>
                            Susunan Pemerintahan{' '}
                            <br className='hidden sm:block' />
                            <span className='text-emerald-200'>
                                Desa Cigalontang
                            </span>
                        </h1>

                        <p className='text-lg md:text-xl text-emerald-100 max-w-2xl mx-auto leading-relaxed'>
                            Kenali para pemimpin dan pelayan masyarakat yang
                            membangun desa kita bersama.
                        </p>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
                <div className='max-w-7xl mx-auto'>
                    {/* Introduction Card */}

                    {/* Structure Sections */}
                    {strukturPemerintahan.map((section, index) => (
                        <div
                            key={index}
                            className='mb-20'
                        >
                            {/* Section Header */}
                            <div className='mb-12 text-center'>
                                <h3 className='text-3xl font-bold text-gray-800 mb-4 relative inline-block'>
                                    <span className='absolute bottom-0 left-0 w-full h-2 bg-emerald-200/50 rounded-full -z-0'></span>
                                </h3>
                            </div>

                            {/* Cards Grid */}
                            <div
                                className={`grid gap-8 ${
                                    section.kategori === 'Kepala Desa'
                                        ? 'justify-center lg:grid-cols-1 max-w-md mx-auto'
                                        : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                                }`}
                            >
                                {section.data.map((pejabat, idx) => (
                                    <div
                                        key={idx}
                                        className={`group relative bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                                            section.kategori === 'Kepala Desa'
                                                ? 'scale-105'
                                                : ''
                                        }`}
                                    >
                                        {/* Photo Section - Portrait Height */}
                                        <div
                                            className={`relative overflow-hidden bg-gray-100 ${
                                                section.kategori ===
                                                'Kepala Desa'
                                                    ? 'h-96' // Taller for Kepala Desa
                                                    : 'h-80' // Slightly shorter for others
                                            }`}
                                        >
                                            {pejabat.foto ? (
                                                <img
                                                    src={pejabat.foto}
                                                    alt={`Foto ${pejabat.nama}`}
                                                    className={`w-full h-full object-cover ${
                                                        section.kategori ===
                                                        'Kepala Desa'
                                                            ? 'object-top' // Focus on face for portrait
                                                            : 'object-center'
                                                    } transition-transform duration-500 group-hover:scale-105`}
                                                    onError={(e) => {
                                                        e.target.onerror = null
                                                        e.target.src = ''
                                                    }}
                                                />
                                            ) : (
                                                <div
                                                    className={`w-full h-full flex items-center justify-center ${
                                                        section.kategori ===
                                                        'Kepala Desa'
                                                            ? 'bg-emerald-100'
                                                            : 'bg-gray-200'
                                                    }`}
                                                >
                                                    <Users
                                                        className={`${
                                                            section.kategori ===
                                                            'Kepala Desa'
                                                                ? 'h-24 w-24 text-emerald-600'
                                                                : 'h-20 w-20 text-gray-500'
                                                        }`}
                                                    />
                                                </div>
                                            )}
                                            {section.kategori ===
                                                'Kepala Desa' && (
                                                <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent'></div>
                                            )}
                                        </div>

                                        {/* Info Section */}
                                        <div className='p-6'>
                                            <div className='mb-4'>
                                                <h4
                                                    className={`font-bold mb-1 ${
                                                        section.kategori ===
                                                        'Kepala Desa'
                                                            ? 'text-2xl text-gray-800'
                                                            : 'text-xl text-gray-800'
                                                    }`}
                                                >
                                                    {pejabat.nama}
                                                </h4>
                                                <p
                                                    className={`${
                                                        section.kategori ===
                                                        'Kepala Desa'
                                                            ? 'text-emerald-600 font-semibold'
                                                            : 'text-emerald-600 font-medium'
                                                    }`}
                                                >
                                                    {pejabat.jabatan}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default StrukturOrganisasiClient
