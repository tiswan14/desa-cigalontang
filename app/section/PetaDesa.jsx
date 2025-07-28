import React from 'react'
import {
    MapPin,
    Compass,
    Car,
    Footprints,
    Clock,
    FootprintsIcon,
} from 'lucide-react'

const PetaDesa = () => {
    return (
        <section className='bg-white py-12 px-4 sm:px-6 lg:px-8'>
            <div className='container mx-auto'>
                <div className='text-center max-w-3xl mx-auto mb-12'>
                    <div className='inline-flex items-center justify-center p-3 rounded-full bg-lime-100 mb-4'>
                        <MapPin className='h-8 w-8 text-lime-700' />
                    </div>
                    <h2 className='text-3xl font-bold text-gray-900 mb-3 sm:text-4xl'>
                        Lokasi Desa Cigalontang
                    </h2>
                    <p className='text-lg text-gray-600'>
                        Temukan kami di peta berikut untuk kunjungan atau
                        keperluan administratif.
                    </p>
                </div>

                <div className='w-full h-80 sm:h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-lg mb-8'>
                    <iframe
                        src='https://www.google.com/maps/embed?pb=...'
                        width='100%'
                        height='100%'
                        allowFullScreen
                        loading='lazy'
                        className='border-0'
                        aria-label='Peta Lokasi Desa Cigalontang'
                    ></iframe>
                </div>
            </div>
        </section>
    )
}

export default PetaDesa
