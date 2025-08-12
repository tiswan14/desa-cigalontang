import { Home, ChevronRight, Mail, Phone, MapPin, Clock } from 'lucide-react'
import { Sprout, Wheat } from 'lucide-react'

export default function ContactPage() {
    return (
        <div className='min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50'>
            {/* Consistent Header */}
            <div className='bg-gradient-to-r from-emerald-600 to-emerald-500 text-white pt-42 pb-24 relative overflow-hidden'>
                {/* Background Pattern */}
                <div className='absolute inset-0'>
                    <svg
                        className='absolute inset-0 w-full h-full opacity-10'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <defs>
                            <pattern
                                id='agriculture-grid'
                                width='40'
                                height='40'
                                patternUnits='userSpaceOnUse'
                            >
                                <path
                                    d='M 40 0 L 0 0 0 40'
                                    fill='none'
                                    stroke='rgba(255,255,255,0.1)'
                                    strokeWidth='1'
                                />
                            </pattern>
                        </defs>
                        <rect
                            width='100%'
                            height='100%'
                            fill='url(#agriculture-grid)'
                        />
                    </svg>

                    {/* Floating Elements */}
                    <div className='absolute top-20 right-20 w-16 h-16 text-white opacity-10'>
                        <Wheat className='w-full h-full animate-pulse' />
                    </div>
                    <div className='absolute bottom-20 left-20 w-12 h-12 text-white opacity-10'>
                        <Sprout className='w-full h-full animate-pulse delay-1000' />
                    </div>
                </div>

                <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
                    <div className='text-center'>
                        <div className='flex items-center justify-center mb-4'>
                            <div className='w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4 backdrop-blur-sm border border-white/30'>
                                <Sprout className='h-8 w-8 text-white' />
                            </div>
                            <h1 className='text-4xl md:text-5xl font-bold'>
                                Hubungi Kami
                            </h1>
                        </div>
                        <p className='text-emerald-100 text-lg md:text-xl max-w-4xl mx-auto mb-8 leading-relaxed'>
                            Silakan hubungi kami untuk informasi, pelayanan
                            administrasi, atau kerja sama dengan Pemerintah
                            Desa.
                        </p>
                    </div>
                </div>

                {/* Breadcrumb */}
                <div className='absolute bottom-0 left-0 right-0 pb-6'>
                    <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                        <nav
                            className='flex items-center justify-center text-sm'
                            aria-label='Breadcrumb'
                        >
                            <a
                                href='/'
                                className='flex items-center text-white hover:text-emerald-100 transition-colors duration-200 px-2 py-1 rounded hover:bg-white/10'
                            >
                                <Home className='h-4 w-4 mr-1' />
                                Beranda
                            </a>
                            <ChevronRight className='h-4 w-4 mx-2 text-emerald-300' />
                            <span className='font-semibold text-white bg-white/15 px-3 py-1 rounded-lg'>
                                Hubungi Kami
                            </span>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className='container mx-auto px-4 py-16 -mt-16 relative z-10'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
                    {/* Contact Information */}
                    <div className='bg-white rounded-xl shadow-lg p-8 border border-emerald-100'>
                        <h2 className='text-2xl font-bold text-emerald-800 mb-6'>
                            Informasi Kontak
                        </h2>

                        <div className='space-y-6'>
                            <div className='flex items-start'>
                                <div className='p-3 bg-emerald-100 rounded-full text-emerald-600 mr-4'>
                                    <MapPin className='w-5 h-5' />
                                </div>
                                <div>
                                    <h3 className='font-semibold text-gray-800'>
                                        Alamat
                                    </h3>
                                    <p className='text-gray-600'>
                                        Desa Cigalontang, Kec. Cigalontang,
                                        Kabupaten Tasikmalaya, Jawa Barat 46463
                                    </p>
                                </div>
                            </div>

                            <div className='flex items-start'>
                                <div className='p-3 bg-emerald-100 rounded-full text-emerald-600 mr-4'>
                                    <Phone className='w-5 h-5' />
                                </div>
                                <div>
                                    <h3 className='font-semibold text-gray-800'>
                                        Telepon
                                    </h3>
                                    <p className='text-gray-600'>
                                        (0265) 123456
                                    </p>
                                </div>
                            </div>

                            <div className='flex items-start'>
                                <div className='p-3 bg-emerald-100 rounded-full text-emerald-600 mr-4'>
                                    <Mail className='w-5 h-5' />
                                </div>
                                <div>
                                    <h3 className='font-semibold text-gray-800'>
                                        Email
                                    </h3>
                                    <p className='text-gray-600'>
                                        desacigalontang@email.com
                                    </p>
                                </div>
                            </div>

                            <div className='flex items-start'>
                                <div className='p-3 bg-emerald-100 rounded-full text-emerald-600 mr-4'>
                                    <Clock className='w-5 h-5' />
                                </div>
                                <div>
                                    <h3 className='font-semibold text-gray-800'>
                                        Jam Operasional
                                    </h3>
                                    <p className='text-gray-600'>
                                        Senin – Jumat, 08.00 – 15.00 WIB
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Google Maps Embed */}
                        <div className='mt-8 rounded-xl overflow-hidden border border-gray-200'>
                            <iframe
                                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.254501234792!2d108.08439207499613!3d-7.349675992654183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f578cd79c1d71%3A0x1e4b77b74b3a41e7!2sCigalontang%2C%20Tasikmalaya%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1691756234567!5m2!1sen!2sid'
                                width='600'
                                height='450'
                                style={{ border: 0 }}
                                allowFullScreen=''
                                loading='lazy'
                                referrerPolicy='no-referrer-when-downgrade'
                            />
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className='bg-white rounded-xl shadow-lg p-8 border border-emerald-100'>
                        <h2 className='text-2xl font-bold text-emerald-800 mb-6'>
                            Kirim Pesan
                        </h2>

                        <form className='space-y-6'>
                            <div>
                                <label
                                    htmlFor='name'
                                    className='block text-sm font-medium text-gray-700 mb-1'
                                >
                                    Nama Lengkap
                                </label>
                                <input
                                    type='text'
                                    id='name'
                                    name='name'
                                    className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition'
                                    placeholder='Masukkan nama lengkap'
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor='email'
                                    className='block text-sm font-medium text-gray-700 mb-1'
                                >
                                    Alamat Email
                                </label>
                                <input
                                    type='email'
                                    id='email'
                                    name='email'
                                    className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition'
                                    placeholder='Masukkan alamat email'
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor='message'
                                    className='block text-sm font-medium text-gray-700 mb-1'
                                >
                                    Pesan
                                </label>
                                <textarea
                                    id='message'
                                    name='message'
                                    rows='5'
                                    className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition'
                                    placeholder='Tulis pesan Anda di sini...'
                                ></textarea>
                            </div>

                            <button
                                type='submit'
                                className='w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 shadow-md hover:shadow-lg'
                            >
                                Kirim Pesan
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
