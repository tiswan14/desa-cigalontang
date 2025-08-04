'use client'
import { Building2, Users } from 'lucide-react'

const StrukturOrganisasi = () => {
    // Sample data structure - replace with your actual data
    const strukturPemerintahan = [
        {
            kategori: 'Kepala Desa',
            data: [
                {
                    nama: 'DENI NUGRAHA, S.IP',
                    jabatan: 'Kepala Desa',
                    sk: '',
                    foto: '/img/kepala-desa.jpg',
                },
            ],
        },
        {
            kategori: 'Perangkat Desa',
            data: [
                {
                    nama: 'Momo',
                    jabatan: 'Sekretaris Desa',
                    sk: 'SK: 141.1/01/2016',
                    foto: '/momo.png',
                },
                {
                    nama: 'Dedin',
                    jabatan: 'Kaur Umum/Tata Usaha',
                    sk: 'SK: 141.1/01/2017',
                    foto: '/dedin.png',
                },
                {
                    nama: 'Yuda Brahmantiar',
                    jabatan: 'Kaur Perencanaan',
                    sk: 'SK: 141.1/02/2017',
                    foto: '/yuda.png',
                },
                {
                    nama: 'Dadang Sutisna',
                    jabatan: 'Kaur Keuangan',
                    sk: 'SK: 141.1/01/2016',
                    foto: '/img/perangkat/dadang.jpg',
                },
                {
                    nama: 'Wawan Sutiawan',
                    jabatan: 'Kasi Kesejahteraan',
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
                    nama: 'Ade Wina',
                    jabatan: 'Kasi Pelayanan',
                    sk: 'SK: 141.1/02/2017',
                    foto: '/img/perangkat/ade.jpg',
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
                    foto: '/img/perangkat/oya.jpg',
                },
                {
                    nama: 'Iday Rustandi',
                    jabatan: 'Kadus II',
                    sk: 'SK: 141.1/02/2017',
                    foto: '/img/perangkat/nita.jpg',
                },
                {
                    nama: 'Engku Kuswanda',
                    jabatan: 'Kadus III',
                    sk: 'SK: 141.1/02/2017',
                    foto: '/img/perangkat/elina.jpg',
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
                    <div className='bg-white rounded-xl shadow-xl p-8 mb-16 relative overflow-hidden border border-gray-100'>
                        <div className='absolute -top-10 -right-10 w-32 h-32 rounded-full bg-emerald-100/30 blur-3xl'></div>
                        <div className='flex flex-col md:flex-row items-center'>
                            <div className='w-24 h-24 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 md:mb-0 md:mr-8 flex-shrink-0'>
                                <Users className='h-12 w-12 text-emerald-600' />
                            </div>
                            <div>
                                <h2 className='text-2xl md:text-3xl font-bold text-gray-800 mb-4'>
                                    Struktur Pemerintahan Desa
                                </h2>
                                <p className='text-gray-600 leading-relaxed'>
                                    Berikut adalah struktur lengkap pemerintahan
                                    Desa Cigalontang yang terdiri dari kepala
                                    desa, perangkat desa, dan kepala dusun yang
                                    bertugas melayani masyarakat dengan dedikasi
                                    dan profesionalisme.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Structure Sections */}
                    {strukturPemerintahan.map((section, index) => (
                        <div
                            key={index}
                            className='mb-20'
                        >
                            {/* Section Header */}
                            <div className='mb-12 text-center'>
                                <h3 className='text-3xl font-bold text-gray-800 mb-4 relative inline-block'>
                                    <span className='relative z-10 px-4'>
                                        {section.kategori}
                                    </span>
                                    <span className='absolute bottom-0 left-0 w-full h-2 bg-emerald-200/50 rounded-full -z-0'></span>
                                </h3>
                                <p className='text-gray-500 max-w-2xl mx-auto'>
                                    {section.kategori === 'Kepala Desa'
                                        ? 'Pemimpin utama desa yang bertanggung jawab atas penyelenggaraan pemerintahan'
                                        : section.kategori === 'Perangkat Desa'
                                        ? 'Tim profesional yang membantu kepala desa dalam menjalankan pemerintahan'
                                        : 'Koordinator wilayah yang menjadi penghubung antara pemerintah desa dan masyarakat'}
                                </p>
                            </div>

                            {/* Cards Grid */}
                            <div
                                className={`grid gap-8 ${
                                    section.kategori === 'Kepala Desa'
                                        ? 'justify-center lg:grid-cols-1 max-w-2xl mx-auto'
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
                                        {/* Photo Section */}
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
                                                    <Users className='h-20 w-20 text-emerald-600' />
                                                </div>
                                            )}
                                        </div>

                                        {/* Info Section */}
                                        <div className='p-6'>
                                            <div className='mb-4'>
                                                <h4 className='text-xl font-bold text-gray-800 mb-1'>
                                                    {pejabat.nama}
                                                </h4>
                                                <p className='text-emerald-600 font-medium'>
                                                    {pejabat.jabatan}
                                                </p>
                                            </div>

                                            {pejabat.sk && (
                                                <div className='pt-3 border-t border-gray-100'>
                                                    <p className='text-sm text-gray-500'>
                                                        {pejabat.sk}
                                                    </p>
                                                </div>
                                            )}
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

export default StrukturOrganisasi
