'use client'

import { Users, User, UserCircle, BarChart3, User2 } from 'lucide-react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Cell,
} from 'recharts'
import Link from 'next/link'

const DataJenisKelaminClient = () => {
    // Data jumlah penduduk berdasarkan jenis kelamin
    const dataJenisKelamin = [
        { jenisKelamin: 'Laki-laki', jumlah: 1913, color: '#3b82f6' },
        { jenisKelamin: 'Perempuan', jumlah: 1987, color: '#ec4899' },
    ]

    // Data jenis kelamin per dusun (data simulasi berdasarkan proporsi)
    const dataDusun = [
        {
            dusun: 'Cigalontang',
            'Laki-laki': 853,
            Perempuan: 865,
        },
        {
            dusun: 'Panyandungan',
            'Laki-laki': 258,
            Perempuan: 268,
        },
        {
            dusun: 'Cigalontang Girang',
            'Laki-laki': 244,
            Perempuan: 256,
        },
    ]

    const totalPenduduk = dataJenisKelamin.reduce(
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
                        <User2
                            className='w-10 h-10 md:w-12 md:h-12 text-emerald-200 mr-3'
                            strokeWidth={1.5}
                        />
                        <h1 className='text-3xl md:text-4xl font-bold'>
                            Data Jenis Kelamin
                        </h1>
                    </div>

                    <p className='text-lg md:text-xl font-medium text-emerald-100 mx-auto max-w-4xl'>
                        Distribusi penduduk Desa Cigalontang berdasarkan jenis
                        kelamin untuk memberikan gambaran komposisi penduduk
                        laki-laki dan perempuan.
                    </p>

                    <nav
                        className='mt-6 flex justify-center items-center text-sm font-medium text-emerald-100'
                        aria-label='Breadcrumb'
                    >
                        <Link
                            href='/'
                            className='hover:text-white transition-colors duration-200'
                        >
                            Beranda
                        </Link>
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
                        <Link
                            href='/data-desa'
                            className='hover:text-white transition-colors duration-200'
                        >
                            Data Desa
                        </Link>
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
                        <span className='text-white'>Jenis Kelamin</span>
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
                                <User className='h-6 w-6 text-blue-600' />
                            </div>
                            <div className='text-3xl font-bold text-blue-700 mb-2'>
                                1,913
                            </div>
                            <p className='text-gray-600'>Laki-laki</p>
                        </div>

                        <div className='bg-white rounded-2xl shadow-lg p-6 border-l-4 border-pink-500 text-center'>
                            <div className='w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                                <UserCircle className='h-6 w-6 text-pink-600' />
                            </div>
                            <div className='text-3xl font-bold text-pink-700 mb-2'>
                                1,987
                            </div>
                            <p className='text-gray-600'>Perempuan</p>
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

                    {/* Chart Section */}
                    <div className='bg-white rounded-2xl shadow-lg p-8 border-l-4 border-emerald-500'>
                        <div className='flex items-center mb-6'>
                            <div className='w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4'>
                                <BarChart3 className='h-6 w-6 text-emerald-600' />
                            </div>
                            <h2 className='text-2xl md:text-3xl font-semibold text-gray-800'>
                                Distribusi Jenis Kelamin Masyarakat
                            </h2>
                        </div>

                        <div className='mb-8'>
                            <ResponsiveContainer
                                width='100%'
                                height={400}
                            >
                                <BarChart
                                    data={dataJenisKelamin}
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
                                        dataKey='jenisKelamin'
                                        tick={{ fontSize: 12 }}
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
                                        radius={[4, 4, 0, 0]}
                                    >
                                        {dataJenisKelamin.map(
                                            (entry, index) => (
                                                <Cell
                                                    key={`cell-${index}`}
                                                    fill={entry.color}
                                                />
                                            )
                                        )}
                                    </Bar>
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
                                    {dataJenisKelamin.map((item, index) => (
                                        <div
                                            key={index}
                                            className='flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-emerald-50 transition-colors duration-200'
                                        >
                                            <span className='text-gray-700 font-medium'>
                                                {item.jenisKelamin}
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
                                    Persentase Jenis Kelamin
                                </h3>
                                <div className='space-y-3'>
                                    {dataJenisKelamin.map((item, index) => {
                                        const percentage = (
                                            (item.jumlah / totalPenduduk) *
                                            100
                                        ).toFixed(2)
                                        return (
                                            <div
                                                key={index}
                                                className='space-y-1'
                                            >
                                                <div className='flex justify-between text-sm'>
                                                    <span className='text-gray-600'>
                                                        {item.jenisKelamin}
                                                    </span>
                                                    <span className='font-medium text-gray-800'>
                                                        {percentage}%
                                                    </span>
                                                </div>
                                                <div className='w-full bg-gray-200 rounded-full h-2'>
                                                    <div
                                                        className='h-2 rounded-full transition-all duration-1000'
                                                        style={{
                                                            width: `${percentage}%`,
                                                            backgroundColor:
                                                                item.color,
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
                                Sebaran Jenis Kelamin per Dusun
                            </h2>
                        </div>

                        <div className='overflow-x-auto'>
                            <table className='w-full'>
                                <thead>
                                    <tr className='bg-emerald-50'>
                                        <th className='text-left py-4 px-6 text-emerald-700 font-semibold rounded-l-lg'>
                                            Dusun
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
                                    {dataDusun.map((dusun, index) => {
                                        const total =
                                            dusun['Laki-laki'] +
                                            dusun['Perempuan']
                                        return (
                                            <tr
                                                key={index}
                                                className={`border-b border-gray-100 hover:bg-emerald-50 transition-colors duration-200 ${
                                                    index % 2 === 0
                                                        ? 'bg-gray-50'
                                                        : 'bg-white'
                                                }`}
                                            >
                                                <td className='py-4 px-6 text-gray-800 font-semibold'>
                                                    {dusun.dusun}
                                                </td>
                                                <td className='py-4 px-6 text-center text-blue-600 font-semibold'>
                                                    {dusun[
                                                        'Laki-laki'
                                                    ].toLocaleString()}
                                                </td>
                                                <td className='py-4 px-6 text-center text-pink-600 font-semibold'>
                                                    {dusun[
                                                        'Perempuan'
                                                    ].toLocaleString()}
                                                </td>
                                                <td className='py-4 px-6 text-center text-emerald-600 font-bold'>
                                                    {total.toLocaleString()}
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>

                        {/* Summary per Dusun */}
                        <div className='grid md:grid-cols-3 gap-6 mt-8'>
                            {dataDusun.map((dusun, index) => {
                                const total =
                                    dusun['Laki-laki'] + dusun['Perempuan']
                                const malePct = (
                                    (dusun['Laki-laki'] / total) *
                                    100
                                ).toFixed(1)
                                const femalePct = (
                                    (dusun['Perempuan'] / total) *
                                    100
                                ).toFixed(1)
                                return (
                                    <div
                                        key={index}
                                        className='bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-xl border border-emerald-200'
                                    >
                                        <h4 className='font-semibold text-emerald-800 mb-4 text-center'>
                                            {dusun.dusun}
                                        </h4>
                                        <div className='space-y-3'>
                                            <div className='flex justify-between items-center'>
                                                <span className='text-blue-600 font-medium'>
                                                    Laki-laki
                                                </span>
                                                <span className='text-blue-700 font-bold'>
                                                    {dusun['Laki-laki']} (
                                                    {malePct}%)
                                                </span>
                                            </div>
                                            <div className='flex justify-between items-center'>
                                                <span className='text-pink-600 font-medium'>
                                                    Perempuan
                                                </span>
                                                <span className='text-pink-700 font-bold'>
                                                    {dusun['Perempuan']} (
                                                    {femalePct}%)
                                                </span>
                                            </div>
                                            <div className='border-t border-emerald-200 pt-2'>
                                                <div className='flex justify-between items-center'>
                                                    <span className='text-emerald-700 font-semibold'>
                                                        Total
                                                    </span>
                                                    <span className='text-emerald-800 font-bold text-lg'>
                                                        {total}
                                                    </span>
                                                </div>
                                            </div>
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

export default DataJenisKelaminClient
