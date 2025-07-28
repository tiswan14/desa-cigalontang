'use client'
import {
    Users,
    Briefcase,
    Store,
    Hammer,
    Tractor,
    Package,
    Box,
} from 'lucide-react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'

const EkonomiDesa = () => {
    const kesejahteraanData = [
        { kategori: 'Miskin Prasejahtera', kk: 120, jiwa: 480 },
        { kategori: 'Prasejahtera I', kk: 85, jiwa: 340 },
        { kategori: 'Sejahtera II', kk: 210, jiwa: 840 },
        { kategori: 'Sejahtera III', kk: 150, jiwa: 600 },
    ]

    // Data for Mata Pencaharian
    const pekerjaanData = [
        { name: 'Buruh Tani', value: 1532 },
        { name: 'Petani', value: 53 },
        { name: 'Pedagang', value: 145 },
        { name: 'Peternak', value: 20 },
        { name: 'Lainnya', value: 106 },
    ]

    const COLORS = ['#10b981', '#34d399', '#6ee7b7', '#a7f3d0', '#d1fae5']

    // Data for Raskin
    const raskinData = [
        { dusun: 'Dusun Krajan', rtm: 45, alokasi: 675 },
        { dusun: 'Dusun Sukamaju', rtm: 32, alokasi: 480 },
        { dusun: 'Dusun Cigalon', rtm: 28, alokasi: 420 },
    ]

    // Data for PKH
    const pkhData = [
        { dusun: 'Dusun Krajan', penerima: 25 },
        { dusun: 'Dusun Sukamaju', penerima: 18 },
        { dusun: 'Dusun Cigalon', penerima: 15 },
    ]

    return (
        <section className='bg-emerald-50 py-16 px-6'>
            <div className='max-w-7xl mx-auto'>
                {/* Main Title */}
                <h2 className='text-3xl font-bold text-emerald-700 text-center md:text-left mb-12'>
                    💼 Ekonomi Desa Cigalontang
                </h2>

                {/* 1️⃣ Kesejahteraan Keluarga */}
                <div className='mb-16'>
                    <h3 className='text-xl font-semibold text-emerald-700 mb-6'>
                        Kesejahteraan Keluarga
                    </h3>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                        {kesejahteraanData.map((item, index) => (
                            <div
                                key={index}
                                className='bg-white shadow-md rounded-xl p-6 transition-all hover:shadow-lg hover:-translate-y-1'
                            >
                                <div className='flex items-center mb-4'>
                                    <Users
                                        className='text-emerald-500 mr-3'
                                        size={24}
                                    />
                                    <h4 className='text-gray-700 font-medium'>
                                        {item.kategori}
                                    </h4>
                                </div>
                                <div className='space-y-2'>
                                    <p className='text-gray-700'>
                                        Jumlah KK:{' '}
                                        <span className='text-emerald-600 font-bold'>
                                            {item.kk}
                                        </span>
                                    </p>
                                    <p className='text-gray-700'>
                                        Jumlah Jiwa:{' '}
                                        <span className='text-emerald-600 font-bold'>
                                            {item.jiwa}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 2️⃣ Mata Pencaharian Penduduk */}
                <div className='mb-16'>
                    <h3 className='text-xl font-semibold text-emerald-700 mb-6'>
                        Mata Pencaharian Penduduk
                    </h3>
                    <div className='bg-emerald-50 rounded-2xl shadow-lg p-6'>
                        <div className='flex flex-col lg:flex-row items-center gap-8'>
                            <div className='w-full lg:w-1/2 h-80'>
                                <ResponsiveContainer
                                    width='100%'
                                    height='100%'
                                >
                                    <PieChart>
                                        <Pie
                                            data={pekerjaanData}
                                            cx='50%'
                                            cy='50%'
                                            labelLine={false}
                                            outerRadius={80}
                                            fill='#8884d8'
                                            dataKey='value'
                                            label={({ name, percent }) =>
                                                `${name}: ${(
                                                    percent * 100
                                                ).toFixed(0)}%`
                                            }
                                        >
                                            {pekerjaanData.map(
                                                (entry, index) => (
                                                    <Cell
                                                        key={`cell-${index}`}
                                                        fill={
                                                            COLORS[
                                                                index %
                                                                    COLORS.length
                                                            ]
                                                        }
                                                    />
                                                )
                                            )}
                                        </Pie>
                                        <Tooltip />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>

                            <div className='w-full lg:w-1/2'>
                                <p className='text-gray-700 mb-6 flex items-center'>
                                    <Briefcase className='text-emerald-500 mr-2' />
                                    <span className='font-medium'>
                                        Mayoritas penduduk bekerja sebagai{' '}
                                        <span className='text-emerald-600 font-bold'>
                                            Buruh Tani (1.532 orang)
                                        </span>
                                    </span>
                                </p>

                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                    <div>
                                        <div className='flex items-center mb-2'>
                                            <Tractor
                                                className='text-emerald-500 mr-2'
                                                size={18}
                                            />
                                            <span className='font-medium'>
                                                Pertanian
                                            </span>
                                        </div>
                                        <ul className='space-y-1 text-sm text-gray-700'>
                                            <li>Buruh Tani: 1,532</li>
                                            <li>Petani: 53</li>
                                            <li>Peternak: 20</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <div className='flex items-center mb-2'>
                                            <Store
                                                className='text-emerald-500 mr-2'
                                                size={18}
                                            />
                                            <span className='font-medium'>
                                                Dagang & Jasa
                                            </span>
                                        </div>
                                        <ul className='space-y-1 text-sm text-gray-700'>
                                            <li>Pedagang: 145</li>
                                            <li>Sopir: 15</li>
                                            <li>Ojek: 12</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <div className='flex items-center mb-2'>
                                            <Hammer
                                                className='text-emerald-500 mr-2'
                                                size={18}
                                            />
                                            <span className='font-medium'>
                                                Pekerjaan Lain
                                            </span>
                                        </div>
                                        <ul className='space-y-1 text-sm text-gray-700'>
                                            <li>Tukang Kayu: 15</li>
                                            <li>Tukang Tembok: 15</li>
                                            <li>Montir: 2</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <div className='flex items-center mb-2'>
                                            <Briefcase
                                                className='text-emerald-500 mr-2'
                                                size={18}
                                            />
                                            <span className='font-medium'>
                                                Lainnya
                                            </span>
                                        </div>
                                        <ul className='space-y-1 text-sm text-gray-700'>
                                            <li>PNS: 15</li>
                                            <li>Penjahit: 7</li>
                                            <li>Pensiunan: 12</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3️⃣ Program Bantuan Ekonomi */}
                <div>
                    <h3 className='text-xl font-semibold text-emerald-700 mb-6'>
                        Program Bantuan Ekonomi
                    </h3>

                    {/* A. Raskin */}
                    <div className='mb-10'>
                        <h4 className='text-lg font-medium text-emerald-700 mb-4 flex items-center'>
                            <Package className='text-emerald-500 mr-2' />
                            Raskin
                        </h4>
                        <div className='bg-white rounded-xl shadow-md overflow-hidden'>
                            <table className='w-full text-sm'>
                                <thead className='bg-emerald-100 text-emerald-700'>
                                    <tr>
                                        <th className='py-3 px-4 text-left'>
                                            Dusun
                                        </th>
                                        <th className='py-3 px-4 text-left'>
                                            Jumlah RTM
                                        </th>
                                        <th className='py-3 px-4 text-left'>
                                            Alokasi (Kg)
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {raskinData.map((item, index) => (
                                        <tr
                                            key={index}
                                            className='border-b border-gray-100 hover:bg-emerald-50 transition-colors'
                                        >
                                            <td className='py-3 px-4'>
                                                {item.dusun}
                                            </td>
                                            <td className='py-3 px-4'>
                                                {item.rtm}
                                            </td>
                                            <td className='py-3 px-4'>
                                                {item.alokasi}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* B. PKH */}
                    <div>
                        <h4 className='text-lg font-medium text-emerald-700 mb-4 flex items-center'>
                            <Box className='text-emerald-500 mr-2' />
                            PKH
                        </h4>
                        <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
                            {pkhData.map((item, index) => (
                                <div
                                    key={index}
                                    className='bg-emerald-100 border border-emerald-300 rounded-xl p-6 shadow-sm hover:shadow-md transition-all'
                                >
                                    <h5 className='font-medium text-emerald-700 mb-2'>
                                        {item.dusun}
                                    </h5>
                                    <p className='text-gray-700'>
                                        Jumlah Penerima:{' '}
                                        <span className='text-emerald-600 font-bold'>
                                            {item.penerima}
                                        </span>
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

export default EkonomiDesa
