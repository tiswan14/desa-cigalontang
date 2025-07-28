import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts'
import { BookOpenText } from 'lucide-react'

const EducationChart = () => {
    const educationData = [
        { name: 'Paud', value: 20, description: 'Pendidikan Anak Usia Dini' },
        {
            name: 'TK/RA/TQ',
            value: 109,
            description: 'Taman Kanak-Kanak/Raudhatul Athfal/Taman Quran',
        },
        { name: 'SD', value: 277, description: 'Sekolah Dasar' },
        {
            name: 'SLTP',
            value: 84,
            description: 'Sekolah Lanjutan Tingkat Pertama',
        },
        {
            name: 'SLTA',
            value: 73,
            description: 'Sekolah Lanjutan Tingkat Atas',
        },
        { name: 'D3', value: 4, description: 'Diploma 3' },
        { name: 'S.1', value: 23, description: 'Sarjana' },
    ]

    const COLORS = [
        '#4F46E5', // indigo-600
        '#10B981', // emerald-500
        '#F59E0B', // amber-500
        '#EF4444', // red-500
        '#8B5CF6', // violet-500
        '#06B6D4', // cyan-500
        '#EC4899', // pink-500
    ]

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const data = payload[0].payload
            return (
                <div className='bg-white p-4 rounded-lg shadow-lg border border-gray-200'>
                    <p className='font-bold text-gray-800'>{data.name}</p>
                    <p className='text-sm text-gray-600'>{data.description}</p>
                    <p className='text-emerald-600 font-semibold'>
                        {data.value} siswa
                    </p>
                    <p className='text-xs text-gray-500'>
                        {(payload[0].percent * 100).toFixed(1)}% dari total
                    </p>
                </div>
            )
        }
        return null
    }

    return (
        <div className='space-y-6'>
            <div className='flex items-center justify-between mx-auto'>
                <div className='mx-auto'>
                    <h3 className='text-xl font-bold text-gray-800'>
                        Distribusi Pendidikan
                    </h3>
                    <p className='text-sm text-gray-500'>
                        Perbandingan jenjang pendidikan di seluruh dusun
                    </p>
                </div>
            </div>

            <div className='bg-white rounded-xl p-4 shadow-sm border border-gray-100'>
                <div className='h-[400px]'>
                    <ResponsiveContainer
                        width='100%'
                        height='100%'
                    >
                        <PieChart>
                            <Pie
                                data={educationData}
                                cx='50%'
                                cy='50%'
                                innerRadius={70}
                                outerRadius={110}
                                paddingAngle={2}
                                dataKey='value'
                                label={({ name, percent }) =>
                                    `${name} (${(percent * 100).toFixed(0)}%)`
                                }
                                labelLine={false}
                            >
                                {educationData.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={COLORS[index % COLORS.length]}
                                        stroke='#fff'
                                        strokeWidth={2}
                                    />
                                ))}
                            </Pie>
                            <Tooltip content={<CustomTooltip />} />
                            <Legend
                                layout='horizontal'
                                verticalAlign='bottom'
                                align='center'
                                wrapperStyle={{ paddingTop: '20px' }}
                                formatter={(value, entry, index) => (
                                    <span className='text-sm text-gray-600'>
                                        {educationData[index].name}
                                    </span>
                                )}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                {educationData.map((item, index) => (
                    <div
                        key={index}
                        className='bg-white p-3 rounded-lg border border-gray-100 shadow-xs'
                    >
                        <div className='flex items-center space-x-2'>
                            <div
                                className='w-3 h-3 rounded-full'
                                style={{ backgroundColor: COLORS[index] }}
                            />
                            <span className='text-sm font-medium text-gray-700'>
                                {item.name}
                            </span>
                        </div>
                        <p className='text-2xl font-bold mt-2 text-gray-800'>
                            {item.value}
                        </p>
                        <p className='text-xs text-gray-500'>siswa</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EducationChart
