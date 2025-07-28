import {
    MapPin,
    Compass,
    Mountain,
    Ruler,
    CloudRain,
    LandPlot,
    Users,
} from 'lucide-react'

const GambaranUmumDesa = () => {
    return (
        <section className='max-w-6xl mx-auto px-4 py-12'>
            <div
                className='text-center mb-12'
                data-aos='fade-down'
                data-aos-duration='800'
            >
                <h1 className='text-3xl md:text-4xl font-bold text-emerald-700 mb-4'>
                    GAMBARAN UMUM DESA CIGALONTANG
                </h1>
                <div className='w-24 h-1 bg-emerald-500 mx-auto'></div>
            </div>

            <div className='grid md:grid-cols-2 gap-8'>
                {/* 1. Lokasi & Luas Wilayah */}
                <div
                    className='bg-white rounded-xl shadow-md p-6 border border-emerald-50'
                    data-aos='fade-up'
                    data-aos-delay='100'
                    data-aos-duration='800'
                >
                    <div className='flex items-center mb-4'>
                        <MapPin className='h-6 w-6 text-emerald-600 mr-2' />
                        <h2 className='text-xl font-semibold text-emerald-800'>
                            Lokasi & Luas Wilayah
                        </h2>
                    </div>
                    <p className='text-gray-600 mb-4'>
                        Luas Wilayah:{' '}
                        <span className='font-bold text-emerald-700'>
                            537,6 Ha
                        </span>
                    </p>

                    <div className='space-y-3'>
                        <h3 className='font-medium text-emerald-700 mb-2'>
                            Penggunaan Lahan:
                        </h3>
                        {[
                            ['Sawah', '196,2 Ha'],
                            ['Kolam', '5,8 Ha'],
                            ['Perkebunan', '3,5 Ha'],
                            ['Tegal/Ladang', '151,424 Ha'],
                            ['Pemukiman', '21,25 Ha'],
                            ['Lain-lain', '3,32 Ha'],
                        ].map(([label, value], index) => (
                            <div
                                key={index}
                                className='flex justify-between py-2 border-b border-emerald-50'
                            >
                                <span className='text-gray-600'>{label}</span>
                                <span className='font-medium text-emerald-700'>
                                    {value}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 2. Batas Wilayah Desa */}
                <div
                    className='bg-white rounded-xl shadow-md p-6 border border-emerald-50'
                    data-aos='fade-left'
                    data-aos-delay='200'
                    data-aos-duration='800'
                >
                    <div className='flex items-center mb-4'>
                        <Compass className='h-6 w-6 text-emerald-600 mr-2' />
                        <h2 className='text-xl font-semibold text-emerald-800'>
                            Batas Wilayah Desa
                        </h2>
                    </div>
                    <div className='space-y-3'>
                        {[
                            ['Utara', 'Kabupaten Garut (Kehutanan)'],
                            ['Timur', 'Desa Sirnaraja'],
                            ['Selatan', 'Desa Jayapura'],
                            ['Barat', 'Desa Puspamukti'],
                        ].map(([arah, lokasi], index) => (
                            <div
                                key={index}
                                className='flex items-center py-2 border-b border-emerald-50'
                            >
                                <span className='w-24 font-medium text-emerald-700'>
                                    {arah}
                                </span>
                                <span className='text-gray-600'>{lokasi}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3. Topografi & Iklim */}
                <div
                    className='bg-white rounded-xl shadow-md p-6 border border-emerald-50'
                    data-aos='zoom-in'
                    data-aos-delay='300'
                    data-aos-duration='800'
                >
                    <div className='flex items-center mb-4'>
                        <Mountain className='h-6 w-6 text-emerald-600 mr-2' />
                        <h2 className='text-xl font-semibold text-emerald-800'>
                            Topografi & Iklim
                        </h2>
                    </div>
                    <div className='space-y-3'>
                        <div className='flex items-center py-2 border-b border-emerald-50'>
                            <Ruler className='h-5 w-5 text-emerald-500 mr-2' />
                            <span className='text-gray-600'>
                                Ketinggian:{' '}
                                <span className='font-medium text-emerald-700'>
                                    ±700 meter di atas permukaan laut
                                </span>
                            </span>
                        </div>
                        <div className='flex items-center py-2'>
                            <CloudRain className='h-5 w-5 text-emerald-500 mr-2' />
                            <span className='text-gray-600'>
                                Curah Hujan:{' '}
                                <span className='font-medium text-emerald-700'>
                                    1200–1500 mm per tahun
                                </span>
                            </span>
                        </div>
                    </div>
                </div>

                {/* 4. Jarak Administratif */}
                <div
                    className='bg-white rounded-xl shadow-md p-6 border border-emerald-50'
                    data-aos='fade-right'
                    data-aos-delay='400'
                    data-aos-duration='800'
                >
                    <div className='flex items-center mb-4'>
                        <LandPlot className='h-6 w-6 text-emerald-600 mr-2' />
                        <h2 className='text-xl font-semibold text-emerald-800'>
                            Jarak Administratif
                        </h2>
                    </div>
                    <div className='space-y-3'>
                        <div className='flex justify-between py-2 border-b border-emerald-50'>
                            <span className='text-gray-600'>
                                Jarak ke Ibu Kota Kecamatan
                            </span>
                            <span className='font-medium text-emerald-700'>
                                7 km
                            </span>
                        </div>
                        <div className='flex justify-between py-2'>
                            <span className='text-gray-600'>
                                Jarak ke Kabupaten
                            </span>
                            <span className='font-medium text-emerald-700'>
                                34 km
                            </span>
                        </div>
                    </div>
                </div>

                {/* 5. Pembagian Wilayah Administratif */}
                <div
                    className='bg-white rounded-xl shadow-md p-6 border border-emerald-50 md:col-span-2'
                    data-aos='fade-up'
                    data-aos-delay='500'
                    data-aos-duration='800'
                >
                    <div className='flex items-center mb-4'>
                        <Users className='h-6 w-6 text-emerald-600 mr-2' />
                        <h2 className='text-xl font-semibold text-emerald-800'>
                            Pembagian Wilayah Administratif
                        </h2>
                    </div>
                    <p className='text-gray-600 mb-4'>
                        Desa Cigalontang terdiri dari:
                    </p>

                    <div className='grid md:grid-cols-3 gap-6'>
                        {[
                            ['Kedusunan I – Cigalontang', '3 RW / 9 RT'],
                            ['Kedusunan II – Panyandungan', '2 RW / 6 RT'],
                            [
                                'Kedusunan III – Cigalontang Girang',
                                '3 RW / 9 RT',
                            ],
                        ].map(([nama, info], index) => (
                            <div
                                key={index}
                                className='bg-emerald-50 p-4 rounded-lg border border-emerald-100'
                                data-aos='zoom-in'
                                data-aos-delay={600 + index * 100}
                                data-aos-duration='800'
                            >
                                <h3 className='font-medium text-emerald-800 mb-2'>
                                    {nama}
                                </h3>
                                <p className='text-emerald-600'>{info}</p>
                            </div>
                        ))}
                    </div>

                    <div className='mt-6 p-4 bg-emerald-100 rounded-lg'>
                        <p className='font-medium text-emerald-800 text-center'>
                            Total: <span className='font-bold'>8 RW</span> dan{' '}
                            <span className='font-bold'>24 RT</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GambaranUmumDesa
