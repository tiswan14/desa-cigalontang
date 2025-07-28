import {
    Mail,
    AlertCircle,
    ClipboardList,
    FileEdit,
    MessageSquareWarning,
    FormInput,
} from 'lucide-react'

const LayananPublik = () => {
    const services = [
        {
            icon: <Mail className='w-8 h-8 text-lime-600' />,
            title: 'Surat Menyurat',
            description:
                'Pengajuan surat keterangan, domisili, dan surat resmi lainnya',
            link: '/layanan/surat',
            bgColor: 'bg-lime-50',
            borderColor: 'border-lime-200',
        },
        {
            icon: <AlertCircle className='w-8 h-8 text-lime-600' />,
            title: 'Pengaduan',
            description:
                'Laporkan masalah atau berikan masukan untuk pembangunan desa',
            link: '/layanan/pengaduan',
            bgColor: 'bg-lime-50',
            borderColor: 'border-lime-200',
        },
        {
            icon: <ClipboardList className='w-8 h-8 text-lime-600' />,
            title: 'Formulir Online',
            description:
                'Isi formulir administrasi kependudukan secara digital',
            link: '/layanan/formulir',
            bgColor: 'bg-lime-50',
            borderColor: 'border-lime-200',
        },
        {
            icon: <FileEdit className='w-8 h-8 text-lime-600' />,
            title: 'Permohonan Administratif',
            description: 'Ajukan permohonan dokumen kependudukan online',
            link: '/layanan/permohonan',
            bgColor: 'bg-lime-50',
            borderColor: 'border-lime-200',
        },
        {
            icon: <MessageSquareWarning className='w-8 h-8 text-lime-600' />,
            title: 'Aduan Darurat',
            description: 'Layanan respon cepat untuk keadaan darurat',
            link: '/layanan/darurat',
            bgColor: 'bg-lime-50',
            borderColor: 'border-lime-200',
        },
        {
            icon: <FormInput className='w-8 h-8 text-lime-600' />,
            title: 'Registrasi Penduduk',
            description: 'Pendaftaran penduduk baru dan perpindahan',
            link: '/layanan/registrasi',
            bgColor: 'bg-lime-50',
            borderColor: 'border-lime-200',
        },
    ]

    return (
        <section className='py-16 px-4 sm:px-6 lg:px-8 bg-white'>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-12'>
                    <h2 className='text-3xl font-bold text-gray-800'>
                        Layanan Publik Online
                    </h2>
                    <p className='mt-4 text-lg text-gray-600'>
                        Akses layanan desa secara digital - Cepat, Mudah, Tanpa
                        Antri
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {services.map((service, index) => (
                        <a
                            href={service.link}
                            key={index}
                            className={`group border rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:border-lime-300 ${service.bgColor} ${service.borderColor}`}
                        >
                            <div className='flex items-start'>
                                <div className='p-3 rounded-lg bg-white border border-lime-100 group-hover:bg-lime-100 transition-colors mr-4'>
                                    {service.icon}
                                </div>
                                <div>
                                    <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                                        {service.title}
                                    </h3>
                                    <p className='text-gray-600'>
                                        {service.description}
                                    </p>
                                    <div className='mt-3 text-lime-600 flex items-center text-sm font-medium'>
                                        Akses layanan
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            className='h-4 w-4 ml-1 transition-transform group-hover:translate-x-1'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            stroke='currentColor'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M14 5l7 7m0 0l-7 7m7-7H3'
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                <div className='mt-12 text-center'>
                    <a
                        href='/layanan'
                        className='inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-lime-600 hover:bg-lime-700 transition-colors duration-300'
                    >
                        Lihat Semua Layanan Publik
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-5 w-5 ml-2 -mr-1'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M14 5l7 7m0 0l-7 7m7-7H3'
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default LayananPublik
