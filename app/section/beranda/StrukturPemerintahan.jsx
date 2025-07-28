import { Users, FileText, ArrowRight } from 'lucide-react'

const StrukturPemerintahan = () => {
    const perangkatDesa = [
        { nama: 'Deni Nugraha, S.IP', jabatan: 'Kepala Desa', sk: '' },
        {
            nama: 'Momo',
            jabatan: 'Sekretaris Desa',
            sk: 'SK No. 141.1/01/2016',
        },
        {
            nama: 'Dedin',
            jabatan: 'Kaur Umum/Tata Usaha',
            sk: 'SK No. 141.1/01/2017',
        },
        {
            nama: 'Yuda Brahmantiar',
            jabatan: 'Kaur Perencanaan',
            sk: 'SK No. 141.1/02/2017',
        },
        {
            nama: 'Dadang Sutisna',
            jabatan: 'Kaur Keuangan',
            sk: 'SK No. 141.1/01/2016',
        },
    ]

    return (
        <section className='max-w-6xl mx-auto px-4 py-16'>
            {/* Section Header */}
            <div className='text-center mb-12'>
                <div className='flex items-center justify-center mb-3'>
                    <Users className='h-6 w-6 text-emerald-600 mr-2' />
                    <h2 className='text-2xl md:text-4xl font-bold text-emerald-700'>
                        Pemerintahan Desa
                    </h2>
                </div>
                <div className='w-20 h-1 bg-emerald-400 mx-auto mb-4'></div>
                <p className='text-gray-600 max-w-2xl mx-auto'>
                    Struktur pemerintahan Desa Cigalontang terdiri dari kepala
                    desa dan perangkat desa yang bekerja bersama dalam pelayanan
                    publik dan pembangunan masyarakat.
                </p>
            </div>

            {/* Government Structure Cards */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10'>
                {perangkatDesa.slice(0, 6).map((pejabat, index) => (
                    <div
                        key={index}
                        className='bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:border-emerald-100 transition-all duration-300'
                    >
                        <div className='flex items-start space-x-4'>
                            <div className='p-2 bg-emerald-50 rounded-lg'>
                                <FileText className='h-5 w-5 text-emerald-600' />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold text-emerald-800 mb-1'>
                                    {pejabat.nama}
                                </h3>
                                <p className='text-gray-700 font-medium mb-1'>
                                    {pejabat.jabatan}
                                </p>
                                {pejabat.sk && (
                                    <p className='text-xs text-gray-400'>
                                        {pejabat.sk}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA Button */}
            <div className='text-center'>
                <a
                    href='/profil-desa/struktur-organisasi'
                    className='inline-flex items-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg shadow-sm transition-colors duration-300'
                >
                    Lihat Struktur Lengkap
                    <ArrowRight className='h-4 w-4 ml-2' />
                </a>
            </div>
        </section>
    )
}

export default StrukturPemerintahan
