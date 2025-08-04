import { Users, FileText, ArrowRight } from 'lucide-react'

const StrukturPemerintahan = () => {
    const perangkatDesa = [
        {
            nama: 'Deni Nugraha, S.IP',
            jabatan: 'Kepala Desa',
            sk: '',
            foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        },
        {
            nama: 'Momo',
            jabatan: 'Sekretaris Desa',
            sk: 'SK No. 141.1/01/2016',
            foto: 'https://images.unsplash.com/photo-1494790108755-2616c35cbc87?w=150&h=150&fit=crop&crop=face',
        },
        {
            nama: 'Dedin',
            jabatan: 'Kaur Umum/Tata Usaha',
            sk: 'SK No. 141.1/01/2017',
            foto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        },
        {
            nama: 'Yuda Brahmantiar',
            jabatan: 'Kaur Perencanaan',
            sk: 'SK No. 141.1/02/2017',
            foto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
        },
        {
            nama: 'Dadang Sutisna',
            jabatan: 'Kaur Keuangan',
            sk: 'SK No. 141.1/01/2016',
            foto: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face',
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

            {/* Kepala Desa - Featured Card */}
            <div className='flex justify-center mb-12'>
                <div className='bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl border-2 border-emerald-200 shadow-lg p-8 max-w-sm w-full'>
                    <div className='flex flex-col items-center text-center space-y-4'>
                        {/* Profile Photo */}
                        <div className='relative'>
                            <div className='w-24 h-24 rounded-full overflow-hidden border-4 border-emerald-300 shadow-md'>
                                <img
                                    src={perangkatDesa[0].foto}
                                    alt={perangkatDesa[0].nama}
                                    className='w-full h-full object-cover'
                                />
                            </div>
                            {/* Crown indicator */}
                            <div className='absolute -top-2 -right-2 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center shadow-lg'>
                                <Users className='h-4 w-4 text-white' />
                            </div>
                        </div>

                        {/* Information */}
                        <div className='space-y-2'>
                            <h3 className='text-xl font-bold text-emerald-800'>
                                {perangkatDesa[0].nama}
                            </h3>
                            <p className='text-emerald-700 font-semibold text-lg'>
                                {perangkatDesa[0].jabatan}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Other Government Officials */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10'>
                {perangkatDesa.slice(1, 6).map((pejabat, index) => (
                    <div
                        key={index + 1}
                        className='bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-lg hover:border-emerald-100 transition-all duration-300 group'
                    >
                        <div className='flex flex-col items-center text-center space-y-4'>
                            {/* Profile Photo */}
                            <div className='relative'>
                                <div className='w-16 h-16 rounded-full overflow-hidden border-3 border-emerald-100 group-hover:border-emerald-200 transition-colors duration-300'>
                                    <img
                                        src={pejabat.foto}
                                        alt={pejabat.nama}
                                        className='w-full h-full object-cover'
                                    />
                                </div>
                            </div>

                            {/* Information */}
                            <div className='space-y-2'>
                                <h3 className='text-base font-semibold text-emerald-800'>
                                    {pejabat.nama}
                                </h3>
                                <p className='text-gray-700 font-medium text-sm'>
                                    {pejabat.jabatan}
                                </p>
                                {pejabat.sk && (
                                    <div className='flex items-center justify-center space-x-1'>
                                        <FileText className='h-3 w-3 text-gray-400' />
                                        <p className='text-xs text-gray-400'>
                                            {pejabat.sk}
                                        </p>
                                    </div>
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
