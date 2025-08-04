import React from 'react';
import {
    TreePine,
    Home,
    ChevronRight,
    Leaf,
    TrendingUp,
    MapPin,
    DollarSign,
    BarChart3,
    Users,
    Award
} from 'lucide-react';
import Link from 'next/link';

const PlantationSector = () => {
    const plantationData = [
        {
            name: 'Kelapa',
            area: 1.8,
            production: 7,
            value: 'Rp 4.900.000',
            emoji: '🥥',
            percentage: 75
        },
        {
            name: 'Pinang',
            area: 1.0,
            production: 42,
            value: 'Rp 21.000.000',
            emoji: '🌰',
            percentage: 92
        },
        {
            name: 'Lada',
            area: 0.5,
            production: 0.5,
            value: 'Rp 350.000',
            emoji: '🌶️',
            percentage: 45
        },
        {
            name: 'Pala',
            area: 0.25,
            production: 1.5,
            value: 'Rp 1.500.000',
            emoji: '🥜',
            percentage: 68
        },
    ];

    const totalArea = plantationData.reduce((sum, item) => sum + item.area, 0);
    const totalValue = plantationData.reduce((sum, item) => {
        const value = parseInt(item.value.replace(/[^\d]/g, ''));
        return sum + value;
    }, 0);

    const formatCurrency = (value) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(value);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
            {/* Consistent Header */}
            <div className='bg-gradient-to-r from-emerald-600 to-emerald-500 text-white pt-42 pb-24 relative overflow-hidden'>
                {/* Background Pattern */}
                <div className='absolute inset-0'>
                    <svg className='absolute inset-0 w-full h-full opacity-10' xmlns='http://www.w3.org/2000/svg'>
                        <defs>
                            <pattern id='plantation-grid' width='40' height='40' patternUnits='userSpaceOnUse'>
                                <path d='M 40 0 L 0 0 0 40' fill='none' stroke='rgba(255,255,255,0.1)' strokeWidth='1' />
                            </pattern>
                        </defs>
                        <rect width='100%' height='100%' fill='url(#plantation-grid)' />
                    </svg>

                    {/* Floating leaf elements */}
                    <div className='absolute top-20 right-20 w-16 h-16 text-white opacity-10'>
                        <Leaf className='w-full h-full animate-pulse' />
                    </div>
                    <div className='absolute bottom-20 left-20 w-12 h-12 text-white opacity-10'>
                        <TreePine className='w-full h-full animate-pulse delay-1000' />
                    </div>
                </div>

                <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
                    <div className='text-center'>
                        <div className='flex items-center justify-center mb-4'>
                            <div className='w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4 backdrop-blur-sm border border-white/30'>
                                <TreePine className='h-8 w-8 text-white' />
                            </div>
                            <h1 className='text-4xl md:text-5xl font-bold'>
                                Sektor Perkebunan
                            </h1>
                        </div>
                        <p className='text-emerald-100 text-lg md:text-xl max-w-4xl mx-auto mb-8 leading-relaxed'>
                            Potensi hijau untuk ketahanan ekonomi desa dengan berbagai komoditas perkebunan unggulan yang dibudidayakan secara berkelanjutan untuk kesejahteraan masyarakat Cigalontang.
                        </p>

                        {/* Quick Stats in Header */}
                        <div className='grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto mt-8'>
                            <div className='bg-white/15 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20'>
                                <div className='text-2xl font-bold'>{totalArea}</div>
                                <div className='text-emerald-200 text-sm'>Ha Total</div>
                            </div>
                            <div className='bg-white/15 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20'>
                                <div className='text-2xl font-bold'>4</div>
                                <div className='text-emerald-200 text-sm'>Komoditas</div>
                            </div>
                            <div className='bg-white/15 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20 md:col-span-1 col-span-2'>
                                <div className='text-xl font-bold'>{formatCurrency(totalValue)}</div>
                                <div className='text-emerald-200 text-sm'>Total Nilai</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Breadcrumb */}
                <div className='absolute bottom-0 left-0 right-0 pb-6'>
                    <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                        <nav
                            className='flex items-center justify-center text-sm'
                            aria-label='Breadcrumb'
                        >
                            <Link
                                href='/'
                                className='flex items-center text-white hover:text-emerald-100 transition-colors duration-200 px-2 py-1 rounded hover:bg-white/10'
                            >
                                <Home className='h-4 w-4 mr-1' />
                                Beranda
                            </Link>
                            <ChevronRight className='h-4 w-4 mx-2 text-emerald-300' />
                            <a
                                href='/potensi-desa'
                                className='text-white hover:text-emerald-100 transition-colors duration-200 px-2 py-1 rounded hover:bg-white/10'
                            >
                                Potensi Desa
                            </a>
                            <ChevronRight className='h-4 w-4 mx-2 text-emerald-300' />
                            <span className='font-semibold text-white bg-white/15 px-3 py-1 rounded-lg'>
                                Sektor Perkebunan
                            </span>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-16 relative z-10">

                {/* Plantation Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {plantationData.map((item, index) => (
                        <div key={index} className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group border border-emerald-100">
                            <div className="text-center">
                                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {item.emoji}
                                </div>
                                <h3 className="text-xl font-bold text-emerald-800 mb-3">
                                    {item.name}
                                </h3>

                                <div className="space-y-3 mb-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600 text-sm">Luas:</span>
                                        <span className="font-semibold text-emerald-800">{item.area} Ha</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600 text-sm">Produksi:</span>
                                        <span className="font-semibold text-emerald-800">{item.production} Ton</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600 text-sm">Nilai:</span>
                                        <span className="font-semibold text-emerald-800 text-xs">{item.value}</span>
                                    </div>
                                </div>

                                {/* Progress Bar */}
                                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                                    <div
                                        className="bg-gradient-to-r from-emerald-400 to-green-500 h-2 rounded-full transition-all duration-1000 ease-out"
                                        style={{ width: `${item.percentage}%` }}
                                    ></div>
                                </div>
                                <div className="text-xs text-gray-500">Produktivitas: {item.percentage}%</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Data Table Section */}
                <div className="mb-12">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center space-x-2 text-emerald-600 mb-4">
                            <BarChart3 className="w-5 h-5" />
                            <span className="text-sm font-semibold uppercase tracking-wide">Data Produksi</span>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">Statistik Perkebunan</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-green-400 mx-auto"></div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-emerald-100">
                        <div className="bg-gradient-to-r from-emerald-600 to-green-600 px-6 py-4">
                            <h3 className="text-xl font-semibold text-white flex items-center">
                                <TreePine className="w-5 h-5 mr-2" />
                                Data Produksi Perkebunan 2024
                            </h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="min-w-full">
                                <thead className="bg-emerald-50">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-emerald-800 uppercase tracking-wider">Jenis Tanaman</th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-emerald-800 uppercase tracking-wider">Luas (Ha)</th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-emerald-800 uppercase tracking-wider">Produksi (Ton)</th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-emerald-800 uppercase tracking-wider">Estimasi Nilai</th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-emerald-800 uppercase tracking-wider">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-emerald-100">
                                    {plantationData.map((item, index) => (
                                        <tr key={index} className="hover:bg-emerald-50 transition-colors duration-200">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <span className="text-2xl mr-3">{item.emoji}</span>
                                                    <span className="text-sm font-medium text-emerald-900">{item.name}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 font-medium">{item.area}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 font-medium">{item.production}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 font-medium">{item.value}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${item.percentage >= 80 ? 'bg-green-100 text-green-800' :
                                                        item.percentage >= 60 ? 'bg-yellow-100 text-yellow-800' :
                                                            'bg-red-100 text-red-800'
                                                    }`}>
                                                    {item.percentage >= 80 ? 'Optimal' :
                                                        item.percentage >= 60 ? 'Berkembang' : 'Perlu Perhatian'}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="bg-emerald-50 px-6 py-4 border-t border-emerald-100">
                            <p className="text-sm text-emerald-700 italic flex items-start">
                                <Award className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                                <span><strong>Catatan:</strong> Komoditas lain seperti kopi, cengkeh, cokelat, dan mete belum dibudidayakan secara signifikan per data 2024.</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Two Column Layout for Facilities and Challenges */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* Facilities */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-emerald-100">
                        <div className="bg-gradient-to-r from-emerald-600 to-green-600 px-6 py-4">
                            <h3 className="text-xl font-semibold text-white flex items-center">
                                <Award className="w-5 h-5 mr-2" />
                                Fasilitas & Potensi
                            </h3>
                        </div>
                        <div className="p-6">
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-gray-700 text-sm">
                                        Luas perkebunan dengan potensi peningkatan yang sangat besar
                                    </p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-gray-700 text-sm">
                                        Program pembinaan petani dan kelompok tani yang berkelanjutan
                                    </p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-gray-700 text-sm">
                                        Sistem pertanian berkelanjutan berbasis kearifan lokal
                                    </p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-gray-700 text-sm">
                                        Potensi agrowisata dan peluang usaha baru
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Challenges */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-orange-100">
                        <div className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-4">
                            <h3 className="text-xl font-semibold text-white flex items-center">
                                <TrendingUp className="w-5 h-5 mr-2" />
                                Tantangan & Solusi
                            </h3>
                        </div>
                        <div className="p-6">
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-gray-700 text-sm">
                                        Ketersediaan bibit unggul dan berkualitas tinggi
                                    </p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-gray-700 text-sm">
                                        Teknologi pascapanen yang masih perlu ditingkatkan
                                    </p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-gray-700 text-sm">
                                        Akses pasar dan jalur distribusi yang optimal
                                    </p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-gray-700 text-sm">
                                        Sinergi antara warga, kelompok tani, dan pemerintah
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-3xl p-8 shadow-2xl text-white text-center">
                    <div className="flex items-center justify-center mb-6">
                        <TreePine className="w-12 h-12 text-emerald-200 mr-4" />
                        <h3 className="text-3xl font-bold">Membangun Masa Depan Hijau Bersama</h3>
                    </div>
                    <p className="text-emerald-100 max-w-4xl mx-auto mb-6 text-lg leading-relaxed">
                        Sektor perkebunan bukan hanya mendukung ketahanan ekonomi desa, tetapi juga berpotensi menjadi daya tarik agrowisata dan peluang usaha baru bagi masyarakat Cigalontang.
                    </p>
                    <p className="text-emerald-100 font-medium max-w-3xl mx-auto mb-6">
                        Dengan sinergi yang kuat antara warga, kelompok tani, dan pemerintah, Desa Cigalontang optimis membangun masa depan hijau yang produktif dan berkelanjutan.
                    </p>
                    <div className="flex items-center justify-center space-x-2">
                        <div className="w-12 h-px bg-emerald-300"></div>
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                        <div className="w-12 h-px bg-emerald-300"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlantationSector;