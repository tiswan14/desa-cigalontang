import React from 'react';

const PlantationSector = () => {
    const plantationData = [
        { name: 'Kelapa', area: 1.8, production: 7, value: 'Rp 4.900.000' },
        { name: 'Pinang', area: 1.0, production: 42, value: 'Rp 21.000.000' },
        { name: 'Lada', area: 0.5, production: 0.5, value: 'Rp 350.000' },
        { name: 'Pala', area: 0.25, production: 1.5, value: 'Rp 1.500.000' },
    ];

    return (
        <div className="bg-emerald-50 py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-emerald-800 mb-4">
                        Sektor Perkebunan: Potensi Hijau untuk Ketahanan Ekonomi Desa Cigalontang
                    </h1>
                    <p className="text-emerald-700 max-w-3xl mx-auto">
                        Sektor perkebunan Desa Cigalontang memiliki potensi luar biasa yang terus dikembangkan untuk mendukung ketahanan pangan dan peningkatan ekonomi masyarakat. Dengan luas lahan perkebunan mencapai lebih dari 3,5 hektare, berbagai jenis tanaman unggulan dibudidayakan dengan sistem pertanian yang berkelanjutan dan berbasis kearifan lokal.
                    </p>
                </div>

                {/* Data Table */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden mb-10">
                    <div className="bg-emerald-600 px-6 py-3">
                        <h2 className="text-xl font-semibold text-white">Data Produksi Perkebunan</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-emerald-200">
                            <thead className="bg-emerald-100">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-emerald-800 uppercase tracking-wider">Jenis Tanaman</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-emerald-800 uppercase tracking-wider">Luas (Ha)</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-emerald-800 uppercase tracking-wider">Produksi (Ton)</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-emerald-800 uppercase tracking-wider">Estimasi Nilai (Rp)</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-emerald-200">
                                {plantationData.map((item, index) => (
                                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-emerald-50'}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-emerald-900">{item.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-emerald-800">{item.area}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-emerald-800">{item.production}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-emerald-800">{item.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="bg-emerald-50 px-6 py-3 text-sm text-emerald-700 italic">
                        <span className="font-semibold">Catatan:</span> Komoditas lain seperti kopi, cengkeh, cokelat, dan mete belum dibudidayakan secara signifikan per data 2021.
                    </div>
                </div>

                {/* Facilities and Challenges */}
                <div className="mb-10">
                    <div className="bg-emerald-600 rounded-t-lg px-6 py-3">
                        <h2 className="text-xl font-semibold text-white">Fasilitas dan Tantangan</h2>
                    </div>
                    <div className="bg-white p-6 rounded-b-lg shadow-md">
                        <p className="text-emerald-800 mb-4">
                            Meskipun luas perkebunan belum sebesar sektor pertanian, potensi peningkatannya sangat besar terutama dengan dukungan program pembinaan petani dan kelompok tani.
                        </p>
                        <p className="text-emerald-800">
                            Tantangan seperti ketersediaan bibit unggul, teknologi pascapanen, serta akses pasar menjadi fokus perhatian pemerintah desa dan dinas terkait.
                        </p>
                    </div>
                </div>

                {/* Closing CTA */}
                <div className="bg-emerald-700 rounded-lg p-6 shadow-lg">
                    <h2 className="text-xl font-semibold text-white mb-4">Membangun Masa Depan Hijau Bersama</h2>
                    <p className="text-emerald-100 mb-4">
                        Sektor perkebunan bukan hanya mendukung ketahanan ekonomi desa, tetapi juga berpotensi menjadi daya tarik agrowisata dan peluang usaha baru bagi masyarakat.
                    </p>
                    <p className="text-emerald-100 font-medium">
                        Dengan sinergi yang kuat antara warga, kelompok tani, dan pemerintah, Desa Cigalontang optimis membangun masa depan hijau yang produktif dan berkelanjutan.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PlantationSector;