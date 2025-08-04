'use client'

import {
    UserRoundSearch,
    Users,
    Baby,
    GraduationCap,
    Briefcase,
    Heart,
    BarChart3,
    Target,
} from 'lucide-react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts'
import { useState } from 'react'
import Link from 'next/link'

const DataKelompokUsia = () => {
    // Data kelompok usia
    const dataUsia = [
        {
            kelompok: '0 – 6 tahun',
            lakiLaki: 158,
            perempuan: 187,
            jumlah: 345,
            kategori: 'balita',
        },
        {
            kelompok: '7 – 12 tahun',
            lakiLaki: 198,
            perempuan: 222,
            jumlah: 420,
            kategori: 'anak',
        },
        {
            kelompok: '13 – 15 tahun',
            lakiLaki: 96,
            perempuan: 83,
            jumlah: 179,
            kategori: 'remaja',
        },
        {
            kelompok: '16 – 18 tahun',
            lakiLaki: 202,
            perempuan: 212,
            jumlah: 414,
            kategori: 'remaja',
        },
        {
            kelompok: '19 – 24 tahun',
            lakiLaki: 190,
            perempuan: 214,
            jumlah: 404,
            kategori: 'produktif',
        },
        // ... (rest of your dataUsia array)
    ]

    const [filter, setFilter] = useState('all')

    const totalLakiLaki = dataUsia.reduce((sum, item) => sum + item.lakiLaki, 0)
    const totalPerempuan = dataUsia.reduce(
        (sum, item) => sum + item.perempuan,
        0
    )
    const totalPenduduk = totalLakiLaki + totalPerempuan

    // Filter data berdasarkan kategori
    const filteredData =
        filter === 'all'
            ? dataUsia
            : dataUsia.filter((item) => item.kategori === filter)

    // Statistik berdasarkan kategori
    const getStatsByCategory = (category) => {
        const categoryData = dataUsia.filter(
            (item) => item.kategori === category
        )
        return categoryData.reduce((sum, item) => sum + item.jumlah, 0)
    }

    const statsCards = [
        {
            title: 'Balita & Anak',
            count: getStatsByCategory('balita') + getStatsByCategory('anak'),
            icon: Baby,
            color: 'bg-blue-500',
            bgColor: 'bg-blue-50',
            textColor: 'text-blue-600',
        },
        {
            title: 'Remaja',
            count: getStatsByCategory('remaja'),
            icon: GraduationCap,
            color: 'bg-purple-500',
            bgColor: 'bg-purple-50',
            textColor: 'text-purple-600',
        },
        {
            title: 'Usia Produktif',
            count: getStatsByCategory('produktif'),
            icon: Briefcase,
            color: 'bg-emerald-500',
            bgColor: 'bg-emerald-50',
            textColor: 'text-emerald-600',
        },
        {
            title: 'Lanjut Usia',
            count: getStatsByCategory('lansia'),
            icon: Heart,
            color: 'bg-orange-500',
            bgColor: 'bg-orange-50',
            textColor: 'text-orange-600',
        },
    ]

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
                        <Target
                            className='w-10 h-10 md:w-12 md:h-12 text-emerald-200 mr-3'
                            strokeWidth={1.5}
                        />
                        <h1 className='text-3xl md:text-4xl font-bold'>
                            Data Kelompok Usia
                        </h1>
                    </div>

                    <p className='text-lg md:text-xl font-medium text-emerald-100 mx-auto max-w-4xl'>
                        Distribusi penduduk berdasarkan kelompok usia di Desa
                        Cigalontang untuk menggambarkan struktur demografi
                        masyarakat secara lengkap dan informatif.
                    </p>

                    {/* Breadcrumb */}
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
                        <span className='text-white'>Kelompok Usia</span>
                    </nav>
                </div>
            </header>

            {/* Main Content */}
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
                <div className='max-w-7xl mx-auto space-y-12'>
                    {/* Summary Stats */}
                    <div className='grid md:grid-cols-4 gap-6'>
                        {statsCards.map((stat, index) => {
                            const IconComponent = stat.icon
                            const percentage = (
                                (stat.count / totalPenduduk) *
                                100
                            ).toFixed(1)
                            return (
                                <div
                                    key={index}
                                    className='bg-white rounded-2xl shadow-lg p-6 border-l-4 border-emerald-500 text-center'
                                >
                                    <div
                                        className={`w-12 h-12 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
                                    >
                                        <IconComponent
                                            className={`h-6 w-6 ${stat.textColor}`}
                                            strokeWidth={1.5}
                                        />
                                    </div>
                                    <div
                                        className={`text-3xl font-bold ${stat.textColor} mb-2`}
                                    >
                                        {stat.count.toLocaleString()}
                                    </div>
                                    <p className='text-gray-600'>
                                        {stat.title}
                                    </p>
                                    <p className='text-sm text-gray-500 mt-1'>
                                        {percentage}% dari total
                                    </p>
                                </div>
                            )
                        })}
                    </div>

                    {/* Chart Section */}
                    <div className='bg-white rounded-2xl shadow-lg p-8 border-l-4 border-emerald-500'>
                        <div className='flex items-center justify-between mb-6'>
                            <div className='flex items-center'>
                                <div className='w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4'>
                                    <BarChart3 className='h-6 w-6 text-emerald-600' />
                                </div>
                                <h2 className='text-2xl md:text-3xl font-semibold text-gray-800'>
                                    Distribusi Kelompok Usia
                                </h2>
                            </div>

                            <select
                                value={filter}
                                onChange={(e) => setFilter(e.target.value)}
                                className='px-4 py-2 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-emerald-800 font-medium'
                            >
                                <option value='all'>Semua Kelompok</option>
                                <option value='balita'>
                                    Balita (0-6 tahun)
                                </option>
                                <option value='anak'>Anak (7-12 tahun)</option>
                                <option value='remaja'>
                                    Remaja (13-18 tahun)
                                </option>
                                <option value='produktif'>
                                    Usia Produktif (19-59 tahun)
                                </option>
                                <option value='lansia'>
                                    Lanjut Usia (60+ tahun)
                                </option>
                            </select>
                        </div>

                        <div className='h-96'>
                            <ResponsiveContainer
                                width='100%'
                                height='100%'
                            >
                                <BarChart
                                    data={filteredData}
                                    margin={{
                                        top: 20,
                                        right: 30,
                                        left: 20,
                                        bottom: 60,
                                    }}
                                >
                                    <CartesianGrid
                                        strokeDasharray='3 3'
                                        stroke='#f0f0f0'
                                    />
                                    <XAxis
                                        dataKey='kelompok'
                                        tick={{ fontSize: 11 }}
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
                                        formatter={(value, name) => [
                                            value.toLocaleString(),
                                            name === 'lakiLaki'
                                                ? 'Laki-laki'
                                                : name === 'perempuan'
                                                ? 'Perempuan'
                                                : 'Total',
                                        ]}
                                    />
                                    <Bar
                                        dataKey='lakiLaki'
                                        fill='#3b82f6'
                                        name='lakiLaki'
                                        radius={[4, 4, 0, 0]}
                                    />
                                    <Bar
                                        dataKey='perempuan'
                                        fill='#ec4899'
                                        name='perempuan'
                                        radius={[4, 4, 0, 0]}
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Data Table */}
                    <div className='bg-white rounded-2xl shadow-lg p-8 border-l-4 border-emerald-500'>
                        <div className='flex items-center mb-6'>
                            <div className='w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4'>
                                <Users className='h-6 w-6 text-emerald-600' />
                            </div>
                            <h2 className='text-2xl md:text-3xl font-semibold text-gray-800'>
                                Tabel Data Kelompok Usia
                            </h2>
                        </div>

                        <div className='overflow-x-auto'>
                            <table className='w-full'>
                                <thead className='bg-emerald-50'>
                                    <tr>
                                        <th className='text-left py-4 px-6 text-emerald-800 font-semibold rounded-l-lg'>
                                            Kelompok Usia
                                        </th>
                                        <th className='text-center py-4 px-6 text-emerald-800 font-semibold'>
                                            Laki-laki
                                        </th>
                                        <th className='text-center py-4 px-6 text-emerald-800 font-semibold'>
                                            Perempuan
                                        </th>
                                        <th className='text-center py-4 px-6 text-emerald-800 font-semibold'>
                                            Jumlah
                                        </th>
                                        <th className='text-center py-4 px-6 text-emerald-800 font-semibold rounded-r-lg'>
                                            Persentase
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredData.map((item, index) => {
                                        const percentage = (
                                            (item.jumlah / totalPenduduk) *
                                            100
                                        ).toFixed(1)
                                        return (
                                            <tr
                                                key={index}
                                                className={`border-b border-gray-100 hover:bg-emerald-50 transition-colors duration-200 ${
                                                    index % 2 === 0
                                                        ? 'bg-gray-50'
                                                        : 'bg-white'
                                                }`}
                                            >
                                                <td className='py-4 px-6 text-emerald-800 font-medium'>
                                                    {item.kelompok}
                                                </td>
                                                <td className='py-4 px-6 text-center text-blue-600 font-semibold'>
                                                    {item.lakiLaki.toLocaleString()}
                                                </td>
                                                <td className='py-4 px-6 text-center text-pink-600 font-semibold'>
                                                    {item.perempuan.toLocaleString()}
                                                </td>
                                                <td className='py-4 px-6 text-center text-emerald-700 font-bold'>
                                                    {item.jumlah.toLocaleString()}
                                                </td>
                                                <td className='py-4 px-6 text-center text-gray-600'>
                                                    {percentage}%
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                                <tfoot className='bg-emerald-100'>
                                    <tr>
                                        <td className='py-4 px-6 text-emerald-800 font-bold rounded-bl-lg'>
                                            Total
                                        </td>
                                        <td className='py-4 px-6 text-center text-blue-700 font-bold'>
                                            {totalLakiLaki.toLocaleString()}
                                        </td>
                                        <td className='py-4 px-6 text-center text-pink-700 font-bold'>
                                            {totalPerempuan.toLocaleString()}
                                        </td>
                                        <td className='py-4 px-6 text-center text-emerald-800 font-bold text-lg'>
                                            {totalPenduduk.toLocaleString()}
                                        </td>
                                        <td className='py-4 px-6 text-center text-emerald-700 font-bold rounded-br-lg'>
                                            100%
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>

                    {/* Analysis Section */}
                    <div className='grid md:grid-cols-2 gap-8'>
                        <div className='bg-white rounded-2xl shadow-lg p-8 border-l-4 border-emerald-500'>
                            <div className='flex items-center mb-6'>
                                <div className='w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4'>
                                    <BarChart3 className='h-6 w-6 text-emerald-600' />
                                </div>
                                <h2 className='text-2xl md:text-3xl font-semibold text-gray-800'>
                                    Analisis Demografi
                                </h2>
                            </div>

                            <div className='space-y-4'>
                                <div className='flex justify-between items-center p-4 bg-emerald-50 rounded-lg'>
                                    <span className='text-gray-700 font-medium'>
                                        Rasio Jenis Kelamin
                                    </span>
                                    <span className='font-bold text-emerald-700'>
                                        {Math.round(
                                            (totalLakiLaki / totalPerempuan) *
                                                100
                                        )}
                                        :100
                                    </span>
                                </div>
                                <div className='flex justify-between items-center p-4 bg-gray-50 rounded-lg'>
                                    <span className='text-gray-700 font-medium'>
                                        Kelompok Terbesar
                                    </span>
                                    <span className='font-bold text-gray-700'>
                                        25-29 tahun (463 jiwa)
                                    </span>
                                </div>
                                <div className='flex justify-between items-center p-4 bg-gray-50 rounded-lg'>
                                    <span className='text-gray-700 font-medium'>
                                        Dependency Ratio
                                    </span>
                                    <span className='font-bold text-gray-700'>
                                        {Math.round(
                                            ((getStatsByCategory('balita') +
                                                getStatsByCategory('anak') +
                                                getStatsByCategory('lansia')) /
                                                getStatsByCategory(
                                                    'produktif'
                                                )) *
                                                100
                                        )}
                                        %
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className='bg-white rounded-2xl shadow-lg p-8 border-l-4 border-emerald-500'>
                            <div className='flex items-center mb-6'>
                                <div className='w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4'>
                                    <UserRoundSearch className='h-6 w-6 text-emerald-600' />
                                </div>
                                <h2 className='text-2xl md:text-3xl font-semibold text-gray-800'>
                                    Catatan Demografi
                                </h2>
                            </div>

                            <div className='prose prose-emerald text-sm'>
                                <p className='text-gray-700 leading-relaxed mb-3'>
                                    <strong>Bonus Demografi:</strong> Dengan{' '}
                                    {getStatsByCategory('produktif')} jiwa (
                                    {(
                                        (getStatsByCategory('produktif') /
                                            totalPenduduk) *
                                        100
                                    ).toFixed(1)}
                                    %) berada di usia produktif, desa memiliki
                                    potensi sumber daya manusia yang besar.
                                </p>
                                <p className='text-gray-700 leading-relaxed mb-3'>
                                    <strong>Struktur Usia:</strong> Piramida
                                    penduduk menunjukkan distribusi yang relatif
                                    stabil dengan dominasi usia produktif yang
                                    menguntungkan untuk pembangunan ekonomi.
                                </p>
                                <p className='text-gray-700 leading-relaxed'>
                                    <strong>Tantangan:</strong> Perlu perhatian
                                    khusus untuk program kesehatan lansia (
                                    {getStatsByCategory('lansia')} jiwa) dan
                                    pendidikan anak-anak (
                                    {getStatsByCategory('balita') +
                                        getStatsByCategory('anak')}{' '}
                                    jiwa).
                                </p>
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

export default DataKelompokUsia
