'use client'
import {
    Users,
    User,
    UserCheck,
    CreditCard,
    Home,
    BarChart3,
} from 'lucide-react'
import {
    PieChart,
    Pie,
    Cell,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts'

const DataKependudukan = () => {
    // Data statistik
    const statsData = [
        {
            title: 'Jumlah Penduduk',
            value: '3.900',
            subtitle: 'Total Jiwa',
            icon: Users,
            color: 'emerald',
        },
        {
            title: 'Laki-laki',
            value: '1.913',
            subtitle: 'Jiwa',
            icon: User,
            color: 'blue',
        },
        {
            title: 'Perempuan',
            value: '1.987',
            subtitle: 'Jiwa',
            icon: User,
            color: 'pink',
        },
        {
            title: 'Jumlah KK',
            value: '1.306',
            subtitle: 'Kepala Keluarga',
            icon: Home,
            color: 'teal',
        },
        {
            title: 'Sudah Memiliki KTP',
            value: '2.977',
            subtitle: 'Jiwa',
            icon: CreditCard,
            color: 'green',
        },
        {
            title: 'Wajib KTP',
            value: '923',
            subtitle: 'Jiwa',
            icon: UserCheck,
            color: 'orange',
        },
    ]

    // Data untuk pie chart jenis kelamin
    const genderData = [
        { name: 'Laki-laki', value: 1913, color: '#10b981' },
        { name: 'Perempuan', value: 1987, color: '#6b7280' },
    ]

    // Data untuk bar chart KTP
    const ktpData = [
        {
            category: 'Status KTP',
            'Sudah Memiliki KTP': 2977,
            'Wajib KTP': 923,
        },
    ]

    // Data tabel wilayah
    const wilayahData = [
        { kedusuan: 'Cigalontang', rw: 3, rt: 9 },
        { kedusuan: 'Panyandungan', rw: 2, rt: 6 },
        { kedusuan: 'Cigalontang Girang', rw: 3, rt: 9 },
    ]

    const getColorClasses = (color) => {
        const colorMap = {
            emerald: 'bg-emerald-500 text-white',
            blue: 'bg-blue-500 text-white',
            pink: 'bg-pink-500 text-white',
            teal: 'bg-teal-500 text-white',
            green: 'bg-green-500 text-white',
            orange: 'bg-orange-500 text-white',
        }
        return colorMap[color] || 'bg-emerald-500 text-white'
    }

    const getBgColorClasses = (color) => {
        const colorMap = {
            emerald: 'bg-emerald-50 border-emerald-200',
            blue: 'bg-blue-50 border-blue-200',
            pink: 'bg-pink-50 border-pink-200',
            teal: 'bg-teal-50 border-teal-200',
            green: 'bg-green-50 border-green-200',
            orange: 'bg-orange-50 border-orange-200',
        }
        return colorMap[color] || 'bg-emerald-50 border-emerald-200'
    }

    return (
        <div className='min-h-screen bg-gradient-to-br from-emerald-50 to-white'>
            {/* Header */}
            <header className='relative bg-gradient-to-r from-emerald-600 to-emerald-500 h-[40vh] text-white overflow-hidden mt-20'>
                {/* Background Dekoratif */}
                <div className='absolute inset-0 opacity-10 z-0'>
                    <div className='absolute top-0 right-0 w-32 h-32 bg-white rounded-full -mr-16 -mt-16'></div>
                    <div className='absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full -ml-32 -mb-32'></div>
                </div>

                {/* Konten Tengah */}
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center w-full px-2 sm:px-4 md:px-6'>
                    <div className='inline-flex items-center justify-center mb-4'>
                        <Users
                            className='w-10 h-10 md:w-12 md:h-12 text-emerald-200 mr-3'
                            strokeWidth={1.5}
                        />
                        <h1 className='text-3xl md:text-4xl font-bold'>
                            Data Kependudukan Desa Cigalontang
                        </h1>
                    </div>

                    <p className='text-lg md:text-xl font-medium text-emerald-100 mx-auto max-w-4xl'>
                        Profil lengkap data kependudukan masyarakat Desa
                        Cigalontang berdasarkan jenis kelamin, kepemilikan KTP,
                        dan sebaran wilayah administratif.
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
                        <span className='text-white'>Kependudukan</span>
                    </nav>
                </div>
            </header>

            {/* Main Content */}
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-20 relative z-10'>
                {/* Statistics Cards */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
                    {statsData.map((stat, index) => {
                        const IconComponent = stat.icon
                        return (
                            <div
                                key={index}
                                className={`${getBgColorClasses(
                                    stat.color
                                )} rounded-2xl p-6 border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
                            >
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <p className='text-gray-600 text-sm font-medium mb-1'>
                                            {stat.title}
                                        </p>
                                        <p className='text-3xl font-bold text-gray-800 mb-1'>
                                            {stat.value}
                                        </p>
                                        <p className='text-gray-500 text-xs'>
                                            {stat.subtitle}
                                        </p>
                                    </div>
                                    <div
                                        className={`p-3 rounded-xl ${getColorClasses(
                                            stat.color
                                        )}`}
                                    >
                                        <IconComponent className='w-6 h-6' />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Charts Section */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12'>
                    {/* Pie Chart - Jenis Kelamin */}
                    <div className='bg-white rounded-2xl p-6 shadow-lg border border-gray-100'>
                        <div className='flex items-center mb-6'>
                            <BarChart3 className='w-6 h-6 text-emerald-600 mr-3' />
                            <h3 className='text-xl font-bold text-gray-800'>
                                Komposisi Jenis Kelamin
                            </h3>
                        </div>
                        <div className='h-80'>
                            <ResponsiveContainer
                                width='100%'
                                height='100%'
                            >
                                <PieChart>
                                    <Pie
                                        data={genderData}
                                        cx='50%'
                                        cy='50%'
                                        innerRadius={60}
                                        outerRadius={120}
                                        paddingAngle={5}
                                        dataKey='value'
                                    >
                                        {genderData.map((entry, index) => (
                                            <Cell
                                                key={`cell-${index}`}
                                                fill={entry.color}
                                            />
                                        ))}
                                    </Pie>
                                    <Tooltip
                                        formatter={(value) => [value, 'Jiwa']}
                                    />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Bar Chart - KTP */}
                    <div className='bg-white rounded-2xl p-6 shadow-lg border border-gray-100'>
                        <div className='flex items-center mb-6'>
                            <CreditCard className='w-6 h-6 text-emerald-600 mr-3' />
                            <h3 className='text-xl font-bold text-gray-800'>
                                Status Kepemilikan KTP
                            </h3>
                        </div>
                        <div className='h-80'>
                            <ResponsiveContainer
                                width='100%'
                                height='100%'
                            >
                                <BarChart
                                    data={ktpData}
                                    margin={{
                                        top: 20,
                                        right: 30,
                                        left: 20,
                                        bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray='3 3' />
                                    <XAxis dataKey='category' />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar
                                        dataKey='Sudah Memiliki KTP'
                                        fill='#10b981'
                                        radius={[4, 4, 0, 0]}
                                    />
                                    <Bar
                                        dataKey='Wajib KTP'
                                        fill='#059669'
                                        radius={[4, 4, 0, 0]}
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* Tabel Wilayah Administratif */}
                <div className='bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-12'>
                    <div className='flex items-center mb-6'>
                        <Home className='w-6 h-6 text-emerald-600 mr-3' />
                        <h3 className='text-xl font-bold text-gray-800'>
                            Wilayah Administratif
                        </h3>
                    </div>
                    <div className='overflow-x-auto'>
                        <table className='w-full'>
                            <thead>
                                <tr className='bg-emerald-50 border-b border-emerald-200'>
                                    <th className='text-left py-4 px-6 font-semibold text-emerald-700'>
                                        Kedusuan
                                    </th>
                                    <th className='text-center py-4 px-6 font-semibold text-emerald-700'>
                                        RW
                                    </th>
                                    <th className='text-center py-4 px-6 font-semibold text-emerald-700'>
                                        RT
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {wilayahData.map((wilayah, index) => (
                                    <tr
                                        key={index}
                                        className='border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200'
                                    >
                                        <td className='py-4 px-6 font-medium text-gray-800'>
                                            {wilayah.kedusuan}
                                        </td>
                                        <td className='py-4 px-6 text-center text-gray-600'>
                                            {wilayah.rw}
                                        </td>
                                        <td className='py-4 px-6 text-center text-gray-600'>
                                            {wilayah.rt}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Deskripsi Naratif */}
                <div className='bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-8 text-white shadow-lg'>
                    <div className='flex items-center mb-6'>
                        <Users className='w-8 h-8 text-emerald-200 mr-4' />
                        <h3 className='text-2xl font-bold'>
                            Profil Kependudukan
                        </h3>
                    </div>
                    <p className='text-emerald-100 text-lg leading-relaxed mb-4'>
                        Desa Cigalontang memiliki total penduduk sebanyak{' '}
                        <span className='font-bold text-white'>3.900 jiwa</span>
                        , terdiri dari{' '}
                        <span className='font-bold text-white'>
                            1.913 laki-laki
                        </span>{' '}
                        dan{' '}
                        <span className='font-bold text-white'>
                            1.987 perempuan
                        </span>
                        . Dengan rasio jenis kelamin yang cukup seimbang,
                        menunjukkan distribusi demografis yang baik.
                    </p>
                    <p className='text-emerald-100 text-lg leading-relaxed mb-4'>
                        Mayoritas penduduk telah memiliki KTP sebanyak{' '}
                        <span className='font-bold text-white'>2.977 jiwa</span>
                        dari total{' '}
                        <span className='font-bold text-white'>
                            3.900 jiwa
                        </span>{' '}
                        yang wajib KTP. Hal ini menunjukkan tingkat kepemilikan
                        dokumen identitas yang cukup tinggi.
                    </p>
                    <p className='text-emerald-100 text-lg leading-relaxed'>
                        Wilayah desa terbagi menjadi{' '}
                        <span className='font-bold text-white'>
                            tiga kedusunan{' '}
                        </span>
                        dengan struktur{' '}
                        <span className='font-bold text-white'>8 RW</span> dan{' '}
                        <span className='font-bold text-white'>24 RT</span>
                        yang tertata dengan baik untuk memudahkan administrasi
                        dan pelayanan masyarakat.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default DataKependudukan
