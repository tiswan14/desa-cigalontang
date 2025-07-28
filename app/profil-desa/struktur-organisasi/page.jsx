import { Users, FileText, ArrowLeft, Home } from 'lucide-react'
import Link from 'next/link'

const StrukturLengkapPemerintahan = () => {
    const strukturPemerintahan = [
        {
            kategori: 'Pimpinan',
            data: [
                {
                    nama: 'Deni Nugraha, S.IP',
                    jabatan: 'Kepala Desa',
                    foto: 'https://via.placeholder.com/150',
                },
            ],
        },
        {
            kategori: 'Sekretariat',
            data: [
                {
                    nama: 'Momo',
                    jabatan: 'Sekretaris Desa',
                    foto: 'https://via.placeholder.com/150',
                },
                {
                    nama: 'Dedin',
                    jabatan: 'Kaur Umum/Tata Usaha',
                    foto: 'https://via.placeholder.com/150',
                },
                {
                    nama: 'Yuda Brahmantiar',
                    jabatan: 'Kaur Perencanaan',
                    foto: 'https://via.placeholder.com/150',
                },
                {
                    nama: 'Dadang Sutisna',
                    jabatan: 'Kaur Keuangan',
                    foto: 'https://via.placeholder.com/150',
                },
            ],
        },
        {
            kategori: 'Bidang Pemerintahan',
            data: [
                {
                    nama: 'Naman Mulyadi',
                    jabatan: 'Kasi Pemerintahan',
                    foto: 'https://via.placeholder.com/150',
                },
            ],
        },
        {
            kategori: 'Bidang Kesejahteraan',
            data: [
                {
                    nama: 'Wawan Sutiawan',
                    jabatan: 'Kasi Kesejahteraan',
                    foto: 'https://via.placeholder.com/150',
                },
            ],
        },
        {
            kategori: 'Bidang Pelayanan',
            data: [
                {
                    nama: 'Ade Wina',
                    jabatan: 'Kasi Pelayanan',
                    foto: 'https://via.placeholder.com/150',
                },
            ],
        },
        {
            kategori: 'Kepala Dusun',
            data: [
                {
                    nama: 'Oya',
                    jabatan: 'Kepala Dusun I',
                    foto: 'https://via.placeholder.com/150',
                },
                {
                    nama: 'Nita Nurjanah',
                    jabatan: 'Kepala Dusun II',
                    foto: 'https://via.placeholder.com/150',
                },
                {
                    nama: 'Elina',
                    jabatan: 'Kepala Dusun III',
                    foto: 'https://via.placeholder.com/150',
                },
            ],
        },
    ]

    return (
        <div className='bg-gray-50 min-h-screen py-'>
            {/* Header */}
            <header className='bg-emerald-700 text-white py-6'>
                <div className='max-w-7xl mx-auto px-4 flex justify-between items-center'>
                    <div className='flex items-center space-x-4'>
                        <Link
                            href='/'
                            className='hover:bg-emerald-600 p-2 rounded-full transition'
                        >
                            <Home className='h-6 w-6' />
                        </Link>
                        <h1 className='text-2xl font-bold'>
                            Struktur Pemerintahan Desa Cigalontang
                        </h1>
                    </div>
                    <Link
                        href='/profil-desa'
                        className='flex items-center text-sm hover:underline'
                    >
                        <ArrowLeft className='h-4 w-4 mr-1' />
                        Kembali ke Profil Desa
                    </Link>
                </div>
            </header>

            {/* Main Content */}
            <main className='max-w-7xl mx-auto px-4 py-12'>
                {/* Introduction */}
                <div className='mb-12 bg-white rounded-xl shadow-sm p-6 border border-emerald-100'>
                    <div className='flex items-center mb-4'>
                        <Users className='h-6 w-6 text-emerald-600 mr-2' />
                        <h2 className='text-xl font-semibold text-emerald-800'>
                            Struktur Organisasi
                        </h2>
                    </div>
                    <p className='text-gray-600'>
                        Berikut adalah struktur lengkap pemerintahan Desa
                        Cigalontang yang terdiri dari kepala desa, perangkat
                        desa, dan kepala dusun yang bertugas melayani
                        masyarakat.
                    </p>
                </div>

                {/* Structure Sections */}
                {strukturPemerintahan.map((section, index) => (
                    <div
                        key={index}
                        className='mb-12'
                    >
                        <h3 className='text-lg font-bold text-emerald-700 mb-6 pb-2 border-b border-emerald-100'>
                            {section.kategori}
                        </h3>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                            {section.data.map((pejabat, idx) => (
                                <div
                                    key={idx}
                                    className='bg-white rounded-xl shadow-sm p-5 border border-gray-200 hover:shadow-md hover:border-emerald-100 transition-all duration-300'
                                >
                                    <div className='flex flex-col items-center text-center'>
                                        {/* Profile Photo */}
                                        <div className='mb-4'>
                                            <img
                                                src={pejabat.foto}
                                                alt={pejabat.nama}
                                                className='w-24 h-24 rounded-full object-cover border-2 border-emerald-100 shadow-md'
                                            />
                                        </div>

                                        {/* Name & Position */}
                                        <h4 className='text-lg font-bold text-emerald-700 mb-1'>
                                            {pejabat.nama}
                                        </h4>
                                        <p className='text-gray-600 text-sm'>
                                            {pejabat.jabatan}
                                        </p>

                                        {/* SK Number if available */}
                                        {pejabat.sk && (
                                            <p className='text-xs text-gray-400 mt-2'>
                                                {pejabat.sk}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {/* Additional Info */}
                <div className='bg-emerald-50 rounded-xl p-6 border border-emerald-100'>
                    <h3 className='text-lg font-semibold text-emerald-700 mb-3'>
                        Tentang Struktur Pemerintahan
                    </h3>
                    <p className='text-gray-600 text-sm'>
                        Struktur organisasi ini berdasarkan Peraturan Desa No. X
                        Tahun 20XX tentang Susunan Organisasi dan Tata Kerja
                        Pemerintah Desa Cigalontang. Untuk informasi lebih
                        lanjut dapat menghubungi Kantor Desa Cigalontang.
                    </p>
                </div>
            </main>
        </div>
    )
}

export default StrukturLengkapPemerintahan
