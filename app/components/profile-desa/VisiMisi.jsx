import { Target, ListChecks, LampDesk } from 'lucide-react'

const VisiMisi = () => {
    return (
        <section
            id='visi-misi'
            className='py-16 bg-gradient-to-b from-white to-lime-50'
        >
            <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Header */}
                <div className='text-center mb-16'>
                    <div className='inline-flex items-center justify-center p-4 bg-lime-100 rounded-full shadow-xs mb-6'>
                        <Target className='w-8 h-8 text-lime-700' />
                    </div>
                    <h2 className='text-3xl font-bold text-gray-800 mb-3'>
                        Visi & Misi Desa Cigalontang
                    </h2>
                    <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
                        Arah pembangunan dan tujuan jangka panjang desa kami
                    </p>
                </div>

                {/* Content Grid */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    {/* Visi Card */}
                    <div className='bg-white p-8 rounded-2xl shadow-xs border border-lime-100 hover:shadow-sm transition-all'>
                        <div className='flex items-center gap-5 mb-6'>
                            <div className='p-3 bg-lime-100 rounded-xl text-lime-700 flex-shrink-0'>
                                <LampDesk className='w-6 h-6' />
                            </div>
                            <h3 className='text-2xl font-bold text-gray-800'>
                                Visi Desa
                            </h3>
                        </div>

                        <blockquote className='text-xl italic font-medium text-gray-700 mb-6 pl-2 border-l-4 border-lime-400'>
                            "Terwujudnya Desa Cigalontang yang Maju, Mandiri,
                            dan Berbudaya dengan Berlandaskan Nilai-nilai
                            Kearifan Lokal"
                        </blockquote>

                        <div className='bg-lime-50 p-4 rounded-lg'>
                            <p className='text-gray-600'>
                                Visi ini mencakup periode 2023-2028 dan menjadi
                                panduan bagi seluruh program pembangunan desa.
                            </p>
                        </div>
                    </div>

                    {/* Misi Card */}
                    <div className='bg-white p-8 rounded-2xl shadow-xs border border-lime-100 hover:shadow-sm transition-all'>
                        <div className='flex items-center gap-5 mb-6'>
                            <div className='p-3 bg-lime-100 rounded-xl text-lime-700 flex-shrink-0'>
                                <ListChecks className='w-6 h-6' />
                            </div>
                            <h3 className='text-2xl font-bold text-gray-800'>
                                Misi Desa
                            </h3>
                        </div>

                        <div className='space-y-5'>
                            {[
                                'Meningkatkan kualitas sumber daya manusia melalui pendidikan dan pelatihan',
                                'Mengembangkan ekonomi kreatif berbasis potensi lokal dan UMKM',
                                'Melestarikan lingkungan hidup dan mengembangkan wisata alam berkelanjutan',
                                'Memperkuat tata kelola pemerintahan yang transparan dan akuntabel',
                                'Meningkatkan kualitas infrastruktur dasar dan digitalisasi desa',
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className='flex gap-4 group'
                                >
                                    <div className='flex-shrink-0 mt-0.5'>
                                        <div className='w-7 h-7 rounded-full bg-lime-100 flex items-center justify-center group-hover:bg-lime-200 transition-colors'>
                                            <span className='text-lime-700 font-bold'>
                                                {index + 1}
                                            </span>
                                        </div>
                                    </div>
                                    <p className='text-gray-700 group-hover:text-gray-800 transition-colors'>
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VisiMisi
