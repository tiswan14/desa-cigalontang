'use client'
import { useEffect, useState } from 'react'
import {
    Users,
    User,
    User2,
    CreditCard,
    GraduationCap,
    BookOpenText,
    PieChart,
} from 'lucide-react'

const DemografiDesa = () => {
    // Data for population by age
    const [laki, setLaki] = useState('')
    const [perempuan, setPerempuan] = useState('')
    const [jumlahPenduduk, setJumlahPenduduk] = useState('')
    const [jumlahKK, setJumlahKK] = useState('')
    const [pemilikKTP, setPemilikKTP] = useState('')
    const [wajibKTP, setWajibKTP] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(
            'https://api.sheetbest.com/sheets/5c763d63-a8d8-46bd-b4b7-7a566e789acc'
        )
            .then((res) => res.json())
            .then((data) => {
                const laki2 = parseInt(data[0]['Penduduk Laki-Laki'])
                const perempuan2 = parseInt(data[0]['Penduduk Perempuan'])
                const total = laki2 + perempuan2
                const kk = parseInt(data[0]['Jumlah Kepala Keluarga'])
                const pemilikKTP = parseInt(data[0]['Pemilik KTP'])
                const wajibKTP = parseInt(data[0]['Wajib KTP'])

                setLaki(laki2.toLocaleString('id-ID') + ' jiwa')
                setJumlahKK(kk.toLocaleString('id-ID') + ' KK')
                setPerempuan(perempuan2.toLocaleString('id-ID') + ' jiwa')
                setJumlahPenduduk(total.toLocaleString('id-ID') + ' jiwa')
                setPemilikKTP(pemilikKTP.toLocaleString('id-ID') + ' jiwa')
                setWajibKTP(wajibKTP.toLocaleString('id-ID') + ' jiwa')
                setIsLoading(false)
            })
    }, [])
    const ageGroups = [
        { age: '0–6', male: 158, female: 187, total: 345 },
        { age: '7–12', male: 198, female: 222, total: 420 },
        { age: '13–15', male: 96, female: 83, total: 179 },
        { age: '16–18', male: 202, female: 212, total: 414 },
        { age: '19–24', male: 190, female: 214, total: 404 },
        { age: '25–29', male: 227, female: 236, total: 463 },
        { age: '30–34', male: 152, female: 164, total: 316 },
        { age: '35–39', male: 164, female: 164, total: 328 },
        { age: '40–44', male: 129, female: 122, total: 251 },
        { age: '45–49', male: 102, female: 102, total: 204 },
        { age: '50–54', male: 102, female: 97, total: 199 },
        { age: '55–59', male: 82, female: 89, total: 171 },
        { age: '60–64', male: 26, female: 37, total: 63 },
        { age: '65–69', male: 17, female: 79, total: 96 },
        { age: '70–74', male: 13, female: 13, total: 26 },
        { age: '75+', male: 13, female: 8, total: 21 },
    ]

    // Data for education levels
    const educationLevels = [
        { level: 'Tidak sekolah/TK', count: 1106 },
        { level: 'SD', count: 2543 },
        { level: 'SMP', count: 106 },
        { level: 'SLTA', count: 104 },
        { level: 'D1-D3', count: 12 },
        { level: 'S1+', count: 29 },
    ]

    return (
        <div className='min-h-screen bg-gradient-to-br from-emerald-50 to-white'>
            {/* Header */}
            <div className='bg-gradient-to-r from-emerald-600 to-emerald-500 text-white py-16'>
                <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center'>
                        {/* Judul Halaman */}
                        <h1 className='text-4xl md:text-5xl font-bold mb-4'>
                            Demografi Desa
                        </h1>
                        <p className='text-emerald-100 text-lg md:text-xl'>
                            Desa Cigalontang
                        </p>

                        {/* Breadcrumb */}
                        <div
                            className='mt-4'
                            data-aos='fade-right'
                        >
                            <nav
                                className='flex justify-center items-center text-sm text-white/80 space-x-2'
                                aria-label='Breadcrumb'
                            >
                                <a
                                    href='/'
                                    className='hover:text-white hover:underline font-medium transition'
                                >
                                    Beranda
                                </a>
                                <span>/</span>
                                <a
                                    href='/profil-desa'
                                    className='hover:text-white hover:underline font-medium transition'
                                >
                                    Profil Desa
                                </a>
                                <span>/</span>
                                <span className='text-white font-semibold'>
                                    Demografi
                                </span>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
                <div className='max-w-7xl mx-auto space-y-12'>
                    {/* Stats Grid */}
                    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
                        {/* Total Population */}
                        <div className='bg-white rounded-2xl shadow-lg p-6 border-l-4 border-emerald-500 hover:shadow-xl transition-all duration-300'>
                            <div className='flex items-center mb-4'>
                                <div className='w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4'>
                                    <Users className='h-6 w-6 text-emerald-600' />
                                </div>
                                <h2 className='text-lg font-semibold text-gray-800'>
                                    Total Penduduk
                                </h2>
                            </div>
                            <div className='text-center'>
                                {isLoading ? (
                                    <div className='animate-pulse flex justify-center'>
                                        <div className='h-10 w-24 bg-gray-200 rounded'></div>
                                    </div>
                                ) : (
                                    <>
                                        <div className='text-4xl font-bold text-emerald-700 mb-2'>
                                            {jumlahPenduduk.split(' ')[0]}
                                        </div>
                                        <p className='text-gray-600 bg-emerald-50 px-3 py-1 rounded-full text-sm'>
                                            {jumlahPenduduk.split(' ')[1]}
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Gender Distribution */}
                        <div className='bg-white rounded-2xl shadow-lg p-6 border-l-4 border-blue-500 hover:shadow-xl transition-all duration-300'>
                            <div className='flex items-center mb-4'>
                                <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4'>
                                    <User className='h-6 w-6 text-blue-600' />
                                </div>
                                <h2 className='text-lg font-semibold text-gray-800'>
                                    Jenis Kelamin
                                </h2>
                            </div>
                            <div className='grid grid-cols-2 gap-4'>
                                <div className='text-center p-3 bg-blue-50 rounded-lg'>
                                    {isLoading ? (
                                        <div className='animate-pulse'>
                                            <div className='h-8 w-16 bg-gray-200 rounded mx-auto mb-2'></div>
                                            <div className='h-4 w-12 bg-gray-200 rounded mx-auto'></div>
                                        </div>
                                    ) : (
                                        <>
                                            <div className='text-2xl font-bold text-blue-700'>
                                                {laki.split(' ')[0]}
                                            </div>
                                            <p className='text-gray-600 text-sm'>
                                                Laki-laki
                                            </p>
                                        </>
                                    )}
                                </div>
                                <div className='text-center p-3 bg-pink-50 rounded-lg'>
                                    {isLoading ? (
                                        <div className='animate-pulse'>
                                            <div className='h-8 w-16 bg-gray-200 rounded mx-auto mb-2'></div>
                                            <div className='h-4 w-12 bg-gray-200 rounded mx-auto'></div>
                                        </div>
                                    ) : (
                                        <>
                                            <div className='text-2xl font-bold text-pink-700'>
                                                {perempuan.split(' ')[0]}
                                            </div>
                                            <p className='text-gray-600 text-sm'>
                                                Perempuan
                                            </p>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Households */}
                        <div className='bg-white rounded-2xl shadow-lg p-6 border-l-4 border-purple-500 hover:shadow-xl transition-all duration-300'>
                            <div className='flex items-center mb-4'>
                                <div className='w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4'>
                                    <User2 className='h-6 w-6 text-purple-600' />
                                </div>
                                <h2 className='text-lg font-semibold text-gray-800'>
                                    Kepala Keluarga
                                </h2>
                            </div>
                            <div className='text-center'>
                                {isLoading ? (
                                    <div className='animate-pulse'>
                                        <div className='h-10 w-24 bg-gray-200 rounded mx-auto mb-2'></div>
                                        <div className='h-4 w-16 bg-gray-200 rounded mx-auto'></div>
                                    </div>
                                ) : (
                                    <>
                                        <div className='text-4xl font-bold text-purple-700 mb-2'>
                                            {jumlahKK.split(' ')[0]}
                                        </div>
                                        <p className='text-gray-600 bg-purple-50 px-3 py-1 rounded-full text-sm'>
                                            {jumlahKK.split(' ')[1]}
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* ID Cards */}
                        <div className='bg-white rounded-2xl shadow-lg p-6 border-l-4 border-orange-500 hover:shadow-xl transition-all duration-300'>
                            <div className='flex items-center mb-4'>
                                <div className='w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4'>
                                    <CreditCard className='h-6 w-6 text-orange-600' />
                                </div>
                                <h2 className='text-lg font-semibold text-gray-800'>
                                    Kependudukan
                                </h2>
                            </div>
                            <div className='space-y-3'>
                                {isLoading ? (
                                    <>
                                        {/* Loading state for Pemilik KTP */}
                                        <div className='flex justify-between items-center p-2 bg-orange-50 rounded-lg animate-pulse'>
                                            <span className='text-gray-600 text-sm bg-gray-200 rounded h-4 w-20'></span>
                                            <span className='font-bold text-orange-700 bg-gray-200 rounded h-6 w-10'></span>
                                        </div>

                                        {/* Loading state for Wajib KTP */}
                                        <div className='flex justify-between items-center p-2 bg-gray-50 rounded-lg animate-pulse'>
                                            <span className='text-gray-600 text-sm bg-gray-200 rounded h-4 w-16'></span>
                                            <span className='font-bold text-gray-700 bg-gray-200 rounded h-6 w-8'></span>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        {/* Actual data for Pemilik KTP */}
                                        <div className='flex justify-between items-center p-2 bg-orange-50 rounded-lg'>
                                            <span className='text-gray-600 text-sm'>
                                                Pemilik KTP
                                            </span>
                                            <span className='font-bold text-orange-700'>
                                                {pemilikKTP.toLocaleString(
                                                    'id-ID'
                                                )}
                                            </span>
                                        </div>

                                        {/* Actual data for Wajib KTP */}
                                        <div className='flex justify-between items-center p-2 bg-gray-50 rounded-lg'>
                                            <span className='text-gray-600 text-sm'>
                                                Wajib KTP
                                            </span>
                                            <span className='font-bold text-gray-700'>
                                                {wajibKTP.toLocaleString(
                                                    'id-ID'
                                                )}
                                            </span>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Komposisi Usia Penduduk */}
                    <div className='bg-white rounded-2xl shadow-lg p-6 md:p-8 border-l-4 border-emerald-500'>
                        <div className='flex items-center mb-6'>
                            <div className='w-10 h-10 md:w-12 md:h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4'>
                                <PieChart className='h-5 w-5 md:h-6 md:w-6 text-emerald-600' />
                            </div>
                            <h2 className='text-xl md:text-3xl font-semibold text-gray-800'>
                                Komposisi Usia Penduduk
                            </h2>
                        </div>

                        {/* Desktop Table */}
                        <div className='hidden md:block overflow-x-auto'>
                            <table className='w-full'>
                                <thead>
                                    <tr className='bg-emerald-50'>
                                        <th className='text-left py-4 px-6 text-emerald-700 font-semibold rounded-l-lg'>
                                            Kelompok Usia
                                        </th>
                                        <th className='text-center py-4 px-6 text-emerald-700 font-semibold'>
                                            Laki-laki
                                        </th>
                                        <th className='text-center py-4 px-6 text-emerald-700 font-semibold'>
                                            Perempuan
                                        </th>
                                        <th className='text-center py-4 px-6 text-emerald-700 font-semibold rounded-r-lg'>
                                            Total
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ageGroups.map((group, index) => (
                                        <tr
                                            key={index}
                                            className={`hover:bg-emerald-50 transition-colors duration-200 ${
                                                index % 2 === 0
                                                    ? 'bg-gray-50'
                                                    : 'bg-white'
                                            }`}
                                        >
                                            <td className='py-4 px-6 text-gray-700 font-medium'>
                                                {group.age} tahun
                                            </td>
                                            <td className='py-4 px-6 text-center text-blue-600 font-medium'>
                                                {group.male}
                                            </td>
                                            <td className='py-4 px-6 text-center text-pink-600 font-medium'>
                                                {group.female}
                                            </td>
                                            <td className='py-4 px-6 text-center text-emerald-700 font-bold'>
                                                {group.total}
                                            </td>
                                        </tr>
                                    ))}
                                    <tr className='bg-emerald-100 font-bold'>
                                        <td className='py-4 px-6 text-emerald-800 rounded-l-lg'>
                                            Total
                                        </td>
                                        <td className='py-4 px-6 text-center text-emerald-800'>
                                            1.871
                                        </td>
                                        <td className='py-4 px-6 text-center text-emerald-800'>
                                            2.029
                                        </td>
                                        <td className='py-4 px-6 text-center text-emerald-800 rounded-r-lg'>
                                            3.900
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Mobile Version - Shadow Cards */}
                        <div className='md:hidden space-y-4'>
                            {ageGroups.map((group, index) => (
                                <div
                                    key={index}
                                    className='bg-white shadow-md rounded-xl p-4'
                                >
                                    <div className='text-sm text-gray-500 mb-1'>
                                        Kelompok Usia:{' '}
                                        <span className='font-semibold text-gray-800'>
                                            {group.age} tahun
                                        </span>
                                    </div>
                                    <div className='flex justify-between text-sm'>
                                        <span className='text-blue-600'>
                                            Laki-laki: {group.male}
                                        </span>
                                        <span className='text-pink-600'>
                                            Perempuan: {group.female}
                                        </span>
                                    </div>
                                    <div className='mt-2 text-right font-bold text-emerald-700 text-base'>
                                        Total: {group.total}
                                    </div>
                                </div>
                            ))}

                            {/* Total Summary Card */}
                            <div className='bg-emerald-100 shadow-md rounded-xl p-4 text-emerald-900 font-semibold'>
                                <div className='flex justify-between'>
                                    <span>Total Laki-laki:</span>
                                    <span>1.871</span>
                                </div>
                                <div className='flex justify-between'>
                                    <span>Total Perempuan:</span>
                                    <span>2.029</span>
                                </div>
                                <div className='flex justify-between mt-2 pt-2 border-t border-emerald-300 font-bold'>
                                    <span>Total Penduduk:</span>
                                    <span>3.900</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Education Levels */}
                    <div className='bg-white rounded-2xl shadow-lg p-8 border-l-4 border-emerald-500'>
                        <div className='flex items-center mb-6'>
                            <div className='w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4'>
                                <GraduationCap className='h-6 w-6 text-emerald-600' />
                            </div>
                            <h2 className='text-2xl md:text-3xl font-semibold text-gray-800'>
                                Tingkat Pendidikan
                            </h2>
                        </div>

                        <div className='grid lg:grid-cols-2 gap-8'>
                            {/* Table View */}
                            <div>
                                <h3 className='text-xl font-semibold text-gray-700 mb-6'>
                                    Data Pendidikan
                                </h3>
                                <div className='space-y-4'>
                                    {educationLevels.map((edu, index) => (
                                        <div
                                            key={index}
                                            className='flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-emerald-50 transition-colors duration-200'
                                        >
                                            <span className='text-gray-700 font-medium'>
                                                {edu.level}
                                            </span>
                                            <span className='font-bold text-emerald-700 bg-white px-4 py-2 rounded-full'>
                                                {edu.count.toLocaleString(
                                                    'id-ID'
                                                )}{' '}
                                                {/* Consistent ID locale formatting */}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Visual Representation */}
                            <div>
                                <h3 className='text-xl font-semibold text-gray-700 mb-6'>
                                    Visualisasi Data
                                </h3>
                                <div className='bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl p-8'>
                                    <div className='text-center mb-6'>
                                        <BookOpenText className='h-16 w-16 text-emerald-500 mx-auto mb-4' />
                                        <p className='text-gray-600'>
                                            Diagram Tingkat Pendidikan
                                        </p>
                                    </div>

                                    {/* Simple Bar Visualization */}
                                    <div className='space-y-3'>
                                        {educationLevels.map((edu, index) => {
                                            const maxCount = Math.max(
                                                ...educationLevels.map(
                                                    (e) => e.count
                                                )
                                            )
                                            const percentage =
                                                (edu.count / maxCount) * 100
                                            const colors = [
                                                'bg-red-400',
                                                'bg-blue-400',
                                                'bg-green-400',
                                                'bg-yellow-400',
                                                'bg-purple-400',
                                                'bg-pink-400',
                                            ]

                                            return (
                                                <div
                                                    key={index}
                                                    className='space-y-1'
                                                >
                                                    <div className='flex justify-between text-sm'>
                                                        <span className='text-gray-600'>
                                                            {edu.level}
                                                        </span>
                                                        <span className='font-medium text-gray-800'>
                                                            {edu.count}
                                                        </span>
                                                    </div>
                                                    <div className='w-full bg-gray-200 rounded-full h-3'>
                                                        <div
                                                            className={`h-3 rounded-full transition-all duration-1000 ${
                                                                colors[
                                                                    index %
                                                                        colors.length
                                                                ]
                                                            }`}
                                                            style={{
                                                                width: `${percentage}%`,
                                                            }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Bottom Element */}
                    <div className='text-center py-8'>
                        <div className='inline-flex items-center space-x-2 text-emerald-600'>
                            <div className='w-12 h-px bg-emerald-300'></div>
                            <div className='w-3 h-3 bg-emerald-500 rounded-full'></div>
                            <div className='w-12 h-px bg-emerald-300'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DemografiDesa
