import React from 'react'

const LivestockSector = () => {
    const livestockData = [
        { name: 'Sapi', population: 5, value: 'Rp 45.000.000' },
        { name: 'Kerbau', population: 87, value: 'Rp 696.000.000' },
        { name: 'Domba', population: 213, value: 'Rp 319.500.000' },
        { name: 'Kambing', population: 46, value: 'Rp 92.000.000' },
        { name: 'Ayam Ras', population: '5.800', value: 'Rp 232.000.000' },
        { name: 'Ayam Kampung', population: 150, value: 'Rp 5.250.000' },
        { name: 'Bebek', population: 230, value: 'Rp 19.550.000' },
        { name: 'Kuda', population: 1, value: 'Tidak disebutkan' },
    ]

    const productionData = [
        { name: 'Kulit', amount: '23 meter', value: 'Rp 345.000' },
        { name: 'Telur', amount: '450 kg', value: 'Rp 8.100.000' },
        { name: 'Daging', amount: '300 kg', value: 'Rp 19.500.000' },
        { name: 'Susu & Madu', amount: '-', value: '-' },
    ]

    return (
        <div className='bg-emerald-50 py-24 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-4xl mx-auto'>
                {/* Header Section */}
                <div className='text-center mb-12'>
                    <h1 className='text-3xl font-bold text-emerald-800 mb-4'>
                        Sektor Peternakan: Pilar Ekonomi Alternatif Desa
                        Cigalontang
                    </h1>
                    <p className='text-emerald-700 max-w-3xl mx-auto'>
                        Desa Cigalontang memiliki sektor peternakan yang
                        berkembang pesat dan menjadi sumber penghidupan
                        alternatif bagi masyarakat. Dengan jumlah populasi
                        ternak yang terus meningkat, sektor ini tidak hanya
                        menopang kebutuhan protein hewani lokal, tetapi juga
                        membuka peluang usaha dan perdagangan di tingkat desa
                        maupun antarwilayah.
                    </p>
                </div>

                {/* Livestock Population Table */}
                <div className='bg-white rounded-lg shadow-md overflow-hidden mb-10'>
                    <div className='bg-emerald-600 px-6 py-3 flex items-center'>
                        <span className='text-2xl mr-2'>🐄</span>
                        <h2 className='text-xl font-semibold text-white'>
                            Data Populasi Ternak
                        </h2>
                    </div>
                    <div className='overflow-x-auto'>
                        <table className='min-w-full divide-y divide-emerald-200'>
                            <thead className='bg-emerald-100'>
                                <tr>
                                    <th className='px-6 py-3 text-left text-xs font-medium text-emerald-800 uppercase tracking-wider'>
                                        Jenis Ternak
                                    </th>
                                    <th className='px-6 py-3 text-left text-xs font-medium text-emerald-800 uppercase tracking-wider'>
                                        Jumlah (ekor)
                                    </th>
                                    <th className='px-6 py-3 text-left text-xs font-medium text-emerald-800 uppercase tracking-wider'>
                                        Estimasi Nilai (Rp)
                                    </th>
                                </tr>
                            </thead>
                            <tbody className='bg-white divide-y divide-emerald-200'>
                                {livestockData.map((item, index) => (
                                    <tr
                                        key={index}
                                        className={
                                            index % 2 === 0
                                                ? 'bg-white'
                                                : 'bg-emerald-50'
                                        }
                                    >
                                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-emerald-900'>
                                            {item.name}
                                        </td>
                                        <td className='px-6 py-4 whitespace-nowrap text-sm text-emerald-800'>
                                            {item.population}
                                        </td>
                                        <td className='px-6 py-4 whitespace-nowrap text-sm text-emerald-800'>
                                            {item.value}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Production Table */}
                <div className='bg-white rounded-lg shadow-md overflow-hidden mb-10'>
                    <div className='bg-emerald-600 px-6 py-3 flex items-center'>
                        <span className='text-2xl mr-2'>🍳</span>
                        <h2 className='text-xl font-semibold text-white'>
                            Produksi Peternakan
                        </h2>
                    </div>
                    <div className='overflow-x-auto'>
                        <table className='min-w-full divide-y divide-emerald-200'>
                            <thead className='bg-emerald-100'>
                                <tr>
                                    <th className='px-6 py-3 text-left text-xs font-medium text-emerald-800 uppercase tracking-wider'>
                                        Jenis Produksi
                                    </th>
                                    <th className='px-6 py-3 text-left text-xs font-medium text-emerald-800 uppercase tracking-wider'>
                                        Jumlah
                                    </th>
                                    <th className='px-6 py-3 text-left text-xs font-medium text-emerald-800 uppercase tracking-wider'>
                                        Estimasi Nilai (Rp)
                                    </th>
                                </tr>
                            </thead>
                            <tbody className='bg-white divide-y divide-emerald-200'>
                                {productionData.map((item, index) => (
                                    <tr
                                        key={index}
                                        className={
                                            index % 2 === 0
                                                ? 'bg-white'
                                                : 'bg-emerald-50'
                                        }
                                    >
                                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-emerald-900'>
                                            {item.name}
                                        </td>
                                        <td className='px-6 py-4 whitespace-nowrap text-sm text-emerald-800'>
                                            {item.amount}
                                        </td>
                                        <td className='px-6 py-4 whitespace-nowrap text-sm text-emerald-800'>
                                            {item.value}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className='bg-emerald-50 px-6 py-3 text-sm text-emerald-700'>
                        <span className='font-semibold'>
                            📌 Data berdasarkan laporan resmi Profil Desa
                            Cigalontang tahun 2021.
                        </span>
                    </div>
                </div>

                {/* Potential and Challenges */}
                <div className='mb-10'>
                    <div className='bg-emerald-600 rounded-t-lg px-6 py-3 flex items-center'>
                        <span className='text-2xl mr-2'>⚙️</span>
                        <h2 className='text-xl font-semibold text-white'>
                            Potensi dan Tantangan
                        </h2>
                    </div>
                    <div className='bg-white p-6 rounded-b-lg shadow-md'>
                        <p className='text-emerald-800 mb-4'>
                            Peternakan rakyat yang berbasis lahan pekarangan dan
                            pakan lokal menjadi ciri khas peternakan di desa
                            ini.
                        </p>
                        <p className='text-emerald-800'>
                            Namun, tantangan seperti keterbatasan pakan
                            berkualitas, kandang modern, dan akses ke dokter
                            hewan masih menjadi perhatian utama. Dengan
                            pembinaan yang berkelanjutan dan penguatan
                            kelembagaan peternak, sektor ini berpotensi menjadi
                            penggerak ekonomi yang kuat.
                        </p>
                    </div>
                </div>

                {/* Closing CTA */}
                <div className='bg-emerald-700 rounded-lg p-6 shadow-lg'>
                    <div className='flex items-center mb-3'>
                        <span className='text-2xl mr-2'>💬</span>
                        <h2 className='text-xl font-semibold text-white'>
                            Membangun Kemandirian Pangan Melalui Peternakan
                        </h2>
                    </div>
                    <p className='text-emerald-100 mb-4'>
                        Sektor peternakan Desa Cigalontang menjadi bukti nyata
                        bagaimana kemandirian pangan dan ekonomi bisa dicapai
                        melalui pengelolaan sumber daya lokal secara optimal.
                    </p>
                    <p className='text-emerald-100 font-medium'>
                        Dengan sinergi antara peternak, pemerintah desa, dan
                        pihak ketiga, sektor ini siap berkontribusi besar
                        terhadap kesejahteraan masyarakat desa.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LivestockSector
