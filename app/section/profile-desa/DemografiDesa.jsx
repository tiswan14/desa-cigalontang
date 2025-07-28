'use client'

import EducationChart from '../../components/profile-desa/EducationChart'
import {
    Users,
    User,
    User2,
    IdCard,
    GraduationCap,
    BookOpenText,
    BarChart2,
    PieChart,
} from 'lucide-react'

const DemografiDesa = () => {
    // Data for population by age
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
        <section className='max-w-7xl mx-auto px-4 py-16'>
            {/* Title Section */}
            <div className='text-center mb-16'>
                <div className='flex items-center justify-center gap-3 mb-4'>
                    <BarChart2 className='h-8 w-8 text-emerald-600' />
                    <h1 className='text-3xl md:text-4xl font-bold text-emerald-800 tracking-tight'>
                        DEMOGRAFI DESA CIGALONTANG
                    </h1>
                </div>
                <div className='w-32 h-1.5 bg-gradient-to-r from-emerald-400 to-emerald-600 mx-auto rounded-full'></div>
            </div>

            {/* Stats Grid */}
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'>
                {/* Total Population */}
                <div className='bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-100'>
                    <div className='flex items-center mb-4'>
                        <Users className='h-6 w-6 text-emerald-600 mr-3' />
                        <h2 className='text-xl font-semibold text-gray-800'>
                            Total Penduduk
                        </h2>
                    </div>
                    <div className='text-3xl font-bold text-emerald-700 mb-2'>
                        3.900
                    </div>
                    <p className='text-gray-600'>Jiwa</p>
                </div>

                {/* Gender Distribution */}
                <div className='bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-100'>
                    <div className='flex items-center mb-4'>
                        <User className='h-6 w-6 text-emerald-600 mr-3' />
                        <h2 className='text-xl font-semibold text-gray-800'>
                            Jenis Kelamin
                        </h2>
                    </div>
                    <div className='flex justify-between'>
                        <div>
                            <div className='text-2xl font-bold text-emerald-700'>
                                1.913
                            </div>
                            <p className='text-gray-600'>Laki-laki</p>
                        </div>
                        <div>
                            <div className='text-2xl font-bold text-emerald-700'>
                                1.987
                            </div>
                            <p className='text-gray-600'>Perempuan</p>
                        </div>
                    </div>
                </div>

                {/* Households */}
                <div className='bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-100'>
                    <div className='flex items-center mb-4'>
                        <User2 className='h-6 w-6 text-emerald-600 mr-3' />
                        <h2 className='text-xl font-semibold text-gray-800'>
                            Kepala Keluarga
                        </h2>
                    </div>
                    <div className='text-3xl font-bold text-emerald-700 mb-2'>
                        1.306
                    </div>
                    <p className='text-gray-600'>KK</p>
                </div>

                {/* ID Cards */}
                <div className='bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-100'>
                    <div className='flex items-center mb-4'>
                        <IdCard className='h-6 w-6 text-emerald-600 mr-3' />
                        <h2 className='text-xl font-semibold text-gray-800'>
                            Kependudukan
                        </h2>
                    </div>
                    <div className='space-y-2'>
                        <div>
                            <div className='text-xl font-bold text-emerald-700'>
                                2.977
                            </div>
                            <p className='text-gray-600'>Pemilik KTP</p>
                        </div>
                        <div>
                            <div className='text-xl font-bold text-emerald-700'>
                                923
                            </div>
                            <p className='text-gray-600'>Wajib KTP</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Age Distribution */}
            <div className='bg-white rounded-2xl p-8 shadow-lg mb-16 border border-gray-100'>
                <div className='flex items-center mb-6'>
                    <PieChart className='h-6 w-6 text-emerald-600 mr-3' />
                    <h2 className='text-2xl font-bold text-gray-800'>
                        Komposisi Usia Penduduk
                    </h2>
                </div>

                <div className='overflow-x-auto'>
                    <table className='w-full'>
                        <thead>
                            <tr className='border-b border-gray-200'>
                                <th className='text-left py-3 px-4 text-emerald-700'>
                                    Kelompok Usia
                                </th>
                                <th className='text-right py-3 px-4 text-emerald-700'>
                                    Laki-laki
                                </th>
                                <th className='text-right py-3 px-4 text-emerald-700'>
                                    Perempuan
                                </th>
                                <th className='text-right py-3 px-4 text-emerald-700'>
                                    Total
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {ageGroups.map((group, index) => (
                                <tr
                                    key={index}
                                    className='border-b border-gray-100 hover:bg-emerald-50/50'
                                >
                                    <td className='py-3 px-4 text-gray-700'>
                                        {group.age} tahun
                                    </td>
                                    <td className='py-3 px-4 text-right text-gray-600'>
                                        {group.male}
                                    </td>
                                    <td className='py-3 px-4 text-right text-gray-600'>
                                        {group.female}
                                    </td>
                                    <td className='py-3 px-4 text-right font-medium text-emerald-700'>
                                        {group.total}
                                    </td>
                                </tr>
                            ))}
                            <tr className='bg-emerald-50/50 font-semibold'>
                                <td className='py-3 px-4 text-emerald-800'>
                                    Total
                                </td>
                                <td className='py-3 px-4 text-right text-emerald-800'>
                                    1.871
                                </td>
                                <td className='py-3 px-4 text-right text-emerald-800'>
                                    2.029
                                </td>
                                <td className='py-3 px-4 text-right text-emerald-800'>
                                    3.900
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Education Levels */}
            <div className='bg-white rounded-2xl p-8 shadow-lg border border-gray-100'>
                <div className='flex items-center mb-6'>
                    <GraduationCap className='h-6 w-6 text-emerald-600 mr-3' />
                    <h2 className='text-2xl font-bold text-gray-800'>
                        Tingkat Pendidikan
                    </h2>
                </div>

                <div className='grid md:grid-cols-2 gap-8'>
                    {/* Table View */}
                    <div>
                        <h3 className='text-lg font-semibold text-gray-700 mb-4'>
                            Data Pendidikan
                        </h3>
                        <div className='overflow-x-auto'>
                            <table className='w-full'>
                                <thead>
                                    <tr className='border-b border-gray-200'>
                                        <th className='text-left py-3 px-4 text-emerald-700'>
                                            Pendidikan Terakhir
                                        </th>
                                        <th className='text-right py-3 px-4 text-emerald-700'>
                                            Jumlah
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {educationLevels.map((edu, index) => (
                                        <tr
                                            key={index}
                                            className='border-b border-gray-100 hover:bg-emerald-50/50'
                                        >
                                            <td className='py-3 px-4 text-gray-700'>
                                                {edu.level}
                                            </td>
                                            <td className='py-3 px-4 text-right font-medium text-emerald-700'>
                                                {edu.count}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Chart Placeholder */}
                    <div>
                        <h3 className='text-lg font-semibold text-gray-700 mb-4'>
                            Diagram Pendidikan
                        </h3>
                        <div className='bg-emerald-50 rounded-xl p-8 flex items-center justify-center h-full'>
                            <div className='text-center'>
                                <BookOpenText className='h-12 w-12 text-emerald-400 mx-auto mb-4' />
                                <div className='bg-gray-50 rounded-xl p-6'>
                                    <EducationChart />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DemografiDesa
