'use client'
import {
    ClipboardList,
    Users,
    Map,
    Home,
    School,
    ChartBar,
    Download,
    CalendarCheck,
    RefreshCw,
    Clock,
    Library,
    AlertCircle,
} from 'lucide-react'

const DataDemografi = () => {
    // Data statistik
    const demografiData = {
        totalPenduduk: 8742,
        lakiLaki: 4321,
        perempuan: 4421,
        jumlahKK: 2450,
        luasWilayah: 12.5,
        kepadatan: 699,
        pendidikan: {
            sd: 35,
            smp: 25,
            sma: 20,
            diploma: 12,
            sarjana: 8,
        },
        pekerjaan: {
            petani: 40,
            pedagang: 20,
            pns: 5,
            swasta: 15,
            lain: 20,
        },
    }

    return (
        <section
            id='demografi'
            className='py-20 bg-white'
        >
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5'>
                {/* Header Section */}
                <div className='text-center mb-16'>
                    <div className='inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-lime-400 to-lime-500 rounded-2xl mb-6 shadow-lg'>
                        <ClipboardList className='w-8 h-8 text-white' />
                    </div>
                    <h2 className='text-4xl font-bold text-gray-800 mb-4'>
                        Data Demografi Desa Cigalontang
                    </h2>
                    <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
                        Profil kependudukan dan karakteristik masyarakat Desa
                        Cigalontang
                    </p>
                    <div className='flex justify-center mt-6'>
                        <div className='h-1 w-16 bg-lime-400 rounded-full'></div>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16'>
                    {/* Card 1 - Jumlah Penduduk */}
                    <div className='bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:border-lime-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'>
                        <div className='flex items-center gap-4 mb-5'>
                            <div className='bg-lime-100 p-3 rounded-xl'>
                                <Users className='w-6 h-6 text-lime-700' />
                            </div>
                            <h3 className='text-xl font-bold text-gray-800'>
                                Jumlah Penduduk
                            </h3>
                        </div>
                        <div className='flex justify-between items-end'>
                            <div>
                                <p className='text-5xl font-bold text-lime-600'>
                                    {demografiData.totalPenduduk.toLocaleString()}
                                </p>
                                <p className='text-gray-500 mt-1'>Total Jiwa</p>
                            </div>
                            <div className='text-right'>
                                <div className='flex items-center justify-end space-x-3'>
                                    <span className='text-blue-500 font-medium'>
                                        ♂{' '}
                                        {demografiData.lakiLaki.toLocaleString()}
                                    </span>
                                    <span className='text-gray-300'>|</span>
                                    <span className='text-pink-500 font-medium'>
                                        ♀{' '}
                                        {demografiData.perempuan.toLocaleString()}
                                    </span>
                                </div>
                                <p className='text-sm text-gray-500 mt-1'>
                                    Laki-laki | Perempuan
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 - Kepala Keluarga */}
                    <div className='bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:border-lime-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'>
                        <div className='flex items-center gap-4 mb-5'>
                            <div className='bg-lime-100 p-3 rounded-xl'>
                                <Home className='w-6 h-6 text-lime-700' />
                            </div>
                            <h3 className='text-xl font-bold text-gray-800'>
                                Kepala Keluarga
                            </h3>
                        </div>
                        <p className='text-5xl font-bold text-lime-600'>
                            {demografiData.jumlahKK.toLocaleString()}
                        </p>
                        <p className='text-gray-500 mt-1'>Keluarga Terdaftar</p>
                    </div>

                    {/* Card 3 - Luas Wilayah */}
                    <div className='bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:border-lime-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'>
                        <div className='flex items-center gap-4 mb-5'>
                            <div className='bg-lime-100 p-3 rounded-xl'>
                                <Map className='w-6 h-6 text-lime-700' />
                            </div>
                            <h3 className='text-xl font-bold text-gray-800'>
                                Luas Wilayah
                            </h3>
                        </div>
                        <div className='flex justify-between items-end'>
                            <div>
                                <p className='text-5xl font-bold text-lime-600'>
                                    {demografiData.luasWilayah}
                                </p>
                                <p className='text-gray-500 mt-1'>Km²</p>
                            </div>
                            <div className='text-right'>
                                <p className='text-gray-700 font-medium'>
                                    {demografiData.kepadatan} jiwa/km²
                                </p>
                                <p className='text-sm text-gray-500 mt-1'>
                                    Kepadatan Penduduk
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Charts Section */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16'>
                    {/* Pendidikan Chart */}
                    <div className='bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300'>
                        <div className='flex items-center gap-4 mb-8'>
                            <div className='bg-lime-100 p-3 rounded-xl'>
                                <School className='w-6 h-6 text-lime-700' />
                            </div>
                            <h3 className='text-xl font-bold text-gray-800'>
                                Tingkat Pendidikan
                            </h3>
                        </div>

                        <div className='space-y-5'>
                            {Object.entries(demografiData.pendidikan).map(
                                ([key, value]) => (
                                    <div
                                        key={key}
                                        className='group'
                                    >
                                        <div className='flex justify-between items-center mb-2'>
                                            <span className='text-gray-700 font-medium capitalize'>
                                                {key}
                                            </span>
                                            <span className='text-gray-600 font-medium'>
                                                {value}%
                                            </span>
                                        </div>
                                        <div className='w-full bg-gray-100 rounded-full h-3'>
                                            <div
                                                className='bg-gradient-to-r from-lime-400 to-lime-600 h-3 rounded-full transition-all duration-500 group-hover:opacity-90'
                                                style={{ width: `${value}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>

                    {/* Pekerjaan Chart */}
                    <div className='bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300'>
                        <div className='flex items-center gap-4 mb-8'>
                            <div className='bg-lime-100 p-3 rounded-xl'>
                                <ChartBar className='w-6 h-6 text-lime-700' />
                            </div>
                            <h3 className='text-xl font-bold text-gray-800'>
                                Profesi Penduduk
                            </h3>
                        </div>

                        <div className='space-y-5'>
                            {Object.entries(demografiData.pekerjaan).map(
                                ([key, value]) => (
                                    <div
                                        key={key}
                                        className='group'
                                    >
                                        <div className='flex justify-between items-center mb-2'>
                                            <span className='text-gray-700 font-medium capitalize'>
                                                {key}
                                            </span>
                                            <span className='text-gray-600 font-medium'>
                                                {value}%
                                            </span>
                                        </div>
                                        <div className='w-full bg-gray-100 rounded-full h-3'>
                                            <div
                                                className='bg-gradient-to-r from-emerald-400 to-emerald-600 h-3 rounded-full transition-all duration-500 group-hover:opacity-90'
                                                style={{ width: `${value}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className='flex flex-col items-center bg-white rounded-xl p-6 text-center border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300'>
                    <div className='flex items-center justify-center gap-4 mb-4'>
                        <CalendarCheck className='w-5 h-5 text-lime-600' />
                        <RefreshCw className='w-5 h-5 text-lime-600' />
                    </div>

                    <div className='space-y-2'>
                        <div className='flex items-center justify-center gap-2 text-gray-700'>
                            <Clock className='w-4 h-4 text-lime-600' />
                            <span className='font-semibold'>
                                Update Terakhir:
                            </span>
                            <span className='font-medium'>Januari 2024</span>
                        </div>

                        <div className='flex items-center justify-center gap-2 text-gray-700'>
                            <Library className='w-4 h-4 text-lime-600' />
                            <span className='font-semibold'>Sumber:</span>
                            <span>Kantor Desa Cigalontang</span>
                        </div>
                    </div>

                    <div className='mt-4 flex items-center justify-center text-sm text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full'>
                        <AlertCircle className='w-4 h-4 mr-1.5 text-lime-600' />
                        <span>Data akan diperbarui secara berkala</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DataDemografi
