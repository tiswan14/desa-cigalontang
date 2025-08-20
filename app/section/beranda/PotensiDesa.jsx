import { Sprout, PiggyBank, Hammer } from 'lucide-react'
import Link from 'next/link'

const PotensiDesa = () => {
    const potensiData = [
        {
            icon: Sprout,
            title: 'Pertanian',
            href: '/potensi-desa/pertanian',
            description:
                'Desa Cigalontang memiliki lahan pertanian subur yang menghasilkan padi, palawija, dan sayuran organik dengan kualitas unggulan.',
        },
        {
            icon: PiggyBank,
            title: 'Peternakan',
            href: '/potensi-desa/peternakan',
            description:
                'Potensi peternakan sapi dan kambing yang dikelola secara modern dengan hasil susu dan daging berkualitas tinggi.',
        },
    ]

    return (
        <section className='max-w-6xl mx-auto px-4 py-16'>
            {/* Section Header */}
            <div className='text-center mb-12'>
                <h2 className='text-2xl md:text-4xl font-bold text-emerald-700 mb-3'>
                    Potensi Unggulan Desa Cigalontang
                </h2>
                <div className='w-20 h-1 bg-emerald-400 mx-auto mb-4'></div>
                <p className='text-gray-600 max-w-2xl mx-auto'>
                    Desa kami memiliki berbagai potensi yang terus dikembangkan
                    untuk meningkatkan kesejahteraan masyarakat dan kemajuan
                    desa.
                </p>
            </div>

            {/* Potensi Cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {potensiData.map((potensi, index) => (
                    <Link
                        href={potensi.href}
                        key={index}
                        className='bg-white rounded-xl shadow-sm p-6 border border-emerald-50 hover:shadow-md hover:border-emerald-100 transition-all duration-300 group block hover:scale-[1.01]'
                    >
                        <div className='flex flex-col items-center text-center cursor-pointer'>
                            <div className='p-4 mb-4 bg-emerald-50 rounded-full group-hover:bg-emerald-100 transition-colors duration-300'>
                                <potensi.icon className='h-8 w-8 text-emerald-600' />
                            </div>
                            <h3 className='text-xl font-semibold text-emerald-800 mb-3'>
                                {potensi.title}
                            </h3>
                            <p className='text-gray-600'>
                                {potensi.description}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default PotensiDesa
