'use client'
import { GraduationCap, BookOpen, Users, BarChart3 } from 'lucide-react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts'

const DataPendidikan = () => {
    // Data jumlah penduduk berdasarkan pendidikan
    const dataPendidikan = [
        { pendidikan: 'TK/Tidak Sekolah', jumlah: 1106, color: '#ef4444' },
        { pendidikan: 'SD', jumlah: 2543, color: '#3b82f6' },
        { pendidikan: 'SMP', jumlah: 106, color: '#10b981' },
        { pendidikan: 'SLTA', jumlah: 104, color: '#f59e0b' },
        { pendidikan: 'D1', jumlah: 0, color: '#8b5cf6' },
        { pendidikan: 'D2', jumlah: 2, color: '#ec4899' },
        { pendidikan: 'D3', jumlah: 10, color: '#06b6d4' },
        { pendidikan: 'S1', jumlah: 26, color: '#84cc16' },
        { pendidikan: 'S2', jumlah: 3, color: '#f97316' },
        { pendidikan: 'S3', jumlah: 0, color: '#6366f1' },
    ]

    // Data pendidikan per dusun
    const dataDusun = [
        {
            dusun: 'Cigalontang',
            PAUD: 20,
            TK_RA: 0,
            SD: 713,
            SLTP: 92,
            SLTA: 9,
            D1: 0,
            D2: 0,
            D3: 3,
            S1: 16,
            S2: 0,
            S3: 0,
        },
        {
            dusun: 'Panyandungan',
            PAUD: 0,
            TK_RA: 5,
            SD: 195,
            SLTP: 52,
            SLTA: 2,
            D1: 0,
            D2: 0,
            D3: 0,
            S1: 4,
            S2: 0,
            S3: 0,
        },
        {
            dusun: 'Cigalontang Girang',
            PAUD: 0,
            TK_RA: 58,
            SD: 111,
            SLTP: 40,
            SLTA: 22,
            D1: 0,
            D2: 0,
            D3: 13,
            S1: 0,
            S2: 0,
            S3: 0,
        },
    ]

    const totalPenduduk = dataPendidikan.reduce(
        (sum, item) => sum + item.jumlah,
        0
    )

    return (
        <div className='min-h-screen bg-gradient-to-br from-emerald-50 to-white'>
            {/* Main Header */}
            <header className='relative bg-gradient-to-r from-emerald-600 to-emerald-500 h-[40vh] text-white overflow-hidden mt-20'>
                {/* Background Dekoratif */}
                <div className='absolute inset-0 opacity-10 z-0'>
                    <div className='absolute top-0 right-0 w-32 h-32 bg-white rounded-full -mr-16 -mt-16'></div>
                    <div className='absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full -ml-32 -mb-32'></div>
                </div>

                {/* Konten Tengah */}
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center w-full px-2 sm:px-4 md:px-6'>
                    <div className='inline-flex items-center justify-center mb-4'>
                        <GraduationCap
                            className='w-10 h-10 md:w-12 md:h-12 text-emerald-200 mr-3'
                            strokeWidth={1.5}
                        />

                        <h1 className='text-3xl md:text-4xl font-bold'>
                            Data Pendidikan
                        </h1>
                    </div>

                    <p className='text-lg md:text-xl font-medium text-emerald-100 mx-auto max-w-4xl'>
                        Profil lengkap tingkat pendidikan masyarakat Desa
                        Cigalontang berdasarkan jenjang pendidikan dan sebaran
                        wilayah dusun.
                    </p>

                    {/* Breadcrumb */}
                    <nav
                        className='mt-6 flex justify-center items-center text-sm font-medium text-emerald-100'
                        aria-label='Breadcrumb'
                    >
                        <a
                            href='/'
                            className='hover:text-white transition-colors duration-200'
                        >
                            Beranda
                        </a>
                        <svg
                            className='w-4 h-4 mx-2'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                        >
                            <path
                                fillRule='evenodd'
                                d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                                clipRule='evenodd'
                            />
                        </svg>
                        <a
                            href='/data-desa'
                            className='hover:text-white transition-colors duration-200'
                        >
                            Data Desa
                        </a>
                        <svg
                            className='w-4 h-4 mx-2'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                        >
                            <path
                                fillRule='evenodd'
                                d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                                clipRule='evenodd'
                            />
                        </svg>
                        <span className='text-white'>Pendidikan</span>
                    </nav>
                </div>
            </header>

            {/* Main Content */}
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
                <div className='max-w-7xl mx-auto space-y-12'>
                    {/* Summary Stats */}
                    <div className='grid md:grid-cols-4 gap-6'>
                        <div className='bg-white rounded-2xl shadow-lg p-6 border-l-4 border-emerald-500 text-center'>
                            <div className='w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                                <Users className='h-6 w-6 text-emerald-600' />
                            </div>
                            <div className='text-3xl font-bold text-emerald-700 mb-2'>
                                {totalPenduduk.toLocaleString()}
                            </div>
                            <p className='text-gray-600'>Total Penduduk</p>
                        </div>

                        <div className='bg-white rounded-2xl shadow-lg p-6 border-l-4 border-blue-500 text-center'>
                            <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                                <BookOpen className='h-6 w-6 text-blue-600' />
                            </div>
                            <div className='text-3xl font-bold text-blue-700 mb-2'>
                                2,543
                            </div>
                            <p className='text-gray-600'>Lulusan SD</p>
                        </div>

                        <div className='bg-white rounded-2xl shadow-lg p-6 border-l-4 border-purple-500 text-center'>
                            <div className='w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                                <GraduationCap className='h-6 w-6 text-purple-600' />
                            </div>
                            <div className='text-3xl font-bold text-purple-700 mb-2'>
                                41
                            </div>
                            <p className='text-gray-600'>Pendidikan Tinggi</p>
                        </div>

                        <div className='bg-white rounded-2xl shadow-lg p-6 border-l-4 border-orange-500 text-center'>
                            <div className='w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                                <BarChart3 className='h-6 w-6 text-orange-600' />
                            </div>
                            <div className='text-3xl font-bold text-orange-700 mb-2'>
                                3
                            </div>
                            <p className='text-gray-600'>Dusun</p>
                        </div>
                    </div>

                    {/* Bar Chart Section */}
                    <div className='bg-white rounded-2xl shadow-lg p-8 border-l-4 border-emerald-500'>
                        <div className='flex items-center mb-6'>
                            <div className='w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4'>
                                <BarChart3 className='h-6 w-6 text-emerald-600' />
                            </div>
                            <h2 className='text-2xl md:text-3xl font-semibold text-gray-800'>
                                Distribusi Pendidikan Masyarakat
                            </h2>
                        </div>

                        <div className='mb-8'>
                            <ResponsiveContainer
                                width='100%'
                                height={400}
                            >
                                <BarChart
                                    data={dataPendidikan}
                                    margin={{
                                        top: 20,
                                        right: 30,
                                        left: 20,
                                        bottom: 5,
                                    }}
                                >
                                    <CartesianGrid
                                        strokeDasharray='3 3'
                                        stroke='#f0f0f0'
                                    />
                                    <XAxis
                                        dataKey='pendidikan'
                                        tick={{ fontSize: 12 }}
                                        angle={-45}
                                        textAnchor='end'
                                        height={80}
                                    />
                                    <YAxis tick={{ fontSize: 12 }} />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: '#f0fdf4',
                                            border: '1px solid #10b981',
                                            borderRadius: '8px',
                                        }}
                                        formatter={(value) => [
                                            value.toLocaleString(),
                                            'Jumlah',
                                        ]}
                                    />
                                    <Bar
                                        dataKey='jumlah'
                                        fill='#10b981'
                                        radius={[4, 4, 0, 0]}
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>

                        {/* Data Table Summary */}
                        <div className='grid md:grid-cols-2 gap-6'>
                            <div>
                                <h3 className='text-lg font-semibold text-gray-700 mb-4'>
                                    Ringkasan Data
                                </h3>
                                <div className='space-y-3'>
                                    {dataPendidikan
                                        .filter((item) => item.jumlah > 0)
                                        .map((item, index) => (
                                            <div
                                                key={index}
                                                className='flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-emerald-50 transition-colors duration-200'
                                            >
                                                <span className='text-gray-700 font-medium'>
                                                    {item.pendidikan}
                                                </span>
                                                <span className='font-bold text-emerald-700 bg-white px-3 py-1 rounded-full'>
                                                    {item.jumlah.toLocaleString()}
                                                </span>
                                            </div>
                                        ))}
                                </div>
                            </div>

                            <div>
                                <h3 className='text-lg font-semibold text-gray-700 mb-4'>
                                    Persentase Pendidikan
                                </h3>
                                <div className='space-y-3'>
                                    {dataPendidikan
                                        .filter((item) => item.jumlah > 0)
                                        .map((item, index) => {
                                            const percentage = (
                                                (item.jumlah / totalPenduduk) *
                                                100
                                            ).toFixed(1)
                                            return (
                                                <div
                                                    key={index}
                                                    className='space-y-1'
                                                >
                                                    <div className='flex justify-between text-sm'>
                                                        <span className='text-gray-600'>
                                                            {item.pendidikan}
                                                        </span>
                                                        <span className='font-medium text-gray-800'>
                                                            {percentage}%
                                                        </span>
                                                    </div>
                                                    <div className='w-full bg-gray-200 rounded-full h-2'>
                                                        <div
                                                            className='bg-emerald-500 h-2 rounded-full transition-all duration-1000'
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

                    {/* Data per Dusun */}
                    <div className='bg-white rounded-2xl shadow-lg p-8 border-l-4 border-emerald-500'>
                        <div className='flex items-center mb-6'>
                            <div className='w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4'>
                                <Users className='h-6 w-6 text-emerald-600' />
                            </div>
                            <h2 className='text-2xl md:text-3xl font-semibold text-gray-800'>
                                Sebaran Pendidikan per Dusun
                            </h2>
                        </div>

                        <div className='overflow-x-auto'>
                            <table className='w-full'>
                                <thead>
                                    <tr className='bg-emerald-50'>
                                        <th className='text-left py-4 px-4 text-emerald-700 font-semibold rounded-l-lg'>
                                            Dusun
                                        </th>
                                        <th className='text-center py-4 px-3 text-emerald-700 font-semibold'>
                                            PAUD
                                        </th>
                                        <th className='text-center py-4 px-3 text-emerald-700 font-semibold'>
                                            TK/RA
                                        </th>
                                        <th className='text-center py-4 px-3 text-emerald-700 font-semibold'>
                                            SD
                                        </th>
                                        <th className='text-center py-4 px-3 text-emerald-700 font-semibold'>
                                            SLTP
                                        </th>
                                        <th className='text-center py-4 px-3 text-emerald-700 font-semibold'>
                                            SLTA
                                        </th>
                                        <th className='text-center py-4 px-3 text-emerald-700 font-semibold'>
                                            D1
                                        </th>
                                        <th className='text-center py-4 px-3 text-emerald-700 font-semibold'>
                                            D2
                                        </th>
                                        <th className='text-center py-4 px-3 text-emerald-700 font-semibold'>
                                            D3
                                        </th>
                                        <th className='text-center py-4 px-3 text-emerald-700 font-semibold'>
                                            S1
                                        </th>
                                        <th className='text-center py-4 px-3 text-emerald-700 font-semibold'>
                                            S2
                                        </th>
                                        <th className='text-center py-4 px-3 text-emerald-700 font-semibold rounded-r-lg'>
                                            S3
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dataDusun.map((dusun, index) => (
                                        <tr
                                            key={index}
                                            className={`border-b border-gray-100 hover:bg-emerald-50 transition-colors duration-200 ${
                                                index % 2 === 0
                                                    ? 'bg-gray-50'
                                                    : 'bg-white'
                                            }`}
                                        >
                                            <td className='py-4 px-4 text-gray-800 font-semibold'>
                                                {dusun.dusun}
                                            </td>
                                            <td className='py-4 px-3 text-center text-gray-600'>
                                                {dusun.PAUD || '–'}
                                            </td>
                                            <td className='py-4 px-3 text-center text-gray-600'>
                                                {dusun.TK_RA || '–'}
                                            </td>
                                            <td className='py-4 px-3 text-center text-blue-600 font-semibold'>
                                                {dusun.SD}
                                            </td>
                                            <td className='py-4 px-3 text-center text-green-600 font-semibold'>
                                                {dusun.SLTP}
                                            </td>
                                            <td className='py-4 px-3 text-center text-yellow-600 font-semibold'>
                                                {dusun.SLTA}
                                            </td>
                                            <td className='py-4 px-3 text-center text-gray-600'>
                                                {dusun.D1 || '–'}
                                            </td>
                                            <td className='py-4 px-3 text-center text-gray-600'>
                                                {dusun.D2 || '–'}
                                            </td>
                                            <td className='py-4 px-3 text-center text-purple-600 font-semibold'>
                                                {dusun.D3 || '–'}
                                            </td>
                                            <td className='py-4 px-3 text-center text-emerald-600 font-semibold'>
                                                {dusun.S1 || '–'}
                                            </td>
                                            <td className='py-4 px-3 text-center text-gray-600'>
                                                {dusun.S2 || '–'}
                                            </td>
                                            <td className='py-4 px-3 text-center text-gray-600'>
                                                {dusun.S3 || '–'}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Summary per Dusun */}
                        <div className='grid md:grid-cols-3 gap-6 mt-8'>
                            {dataDusun.map((dusun, index) => {
                                const total = Object.values(dusun)
                                    .slice(1)
                                    .reduce((sum, val) => sum + (val || 0), 0)
                                return (
                                    <div
                                        key={index}
                                        className='bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-xl border border-emerald-200'
                                    >
                                        <h4 className='font-semibold text-emerald-800 mb-2 text-center'>
                                            {dusun.dusun}
                                        </h4>
                                        <div className='text-center'>
                                            <div className='text-2xl font-bold text-emerald-700 mb-1'>
                                                {total}
                                            </div>
                                            <p className='text-emerald-600 text-sm'>
                                                Total Penduduk
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}
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

export default DataPendidikan
