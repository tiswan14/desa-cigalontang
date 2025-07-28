import Image from 'next/image'
import { ThumbsUp, Share2, Save, BellRing, Play } from 'lucide-react'
import Link from 'next/link'

const VideoProfile = () => {
    const videoId = 'slA53pTHvhU' // From the YouTube URL: https://youtu.be/slA53pTHvhU
    const embedUrl = `https://www.youtube.com/embed/${videoId}`

    return (
        <section className='relative bg-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden'>
            <div className='relative max-w-7xl mx-auto'>
                <div className='text-center mb-12'>
                    <div className='inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-lime-400 to-lime-500 rounded-2xl mb-6 shadow-lg'>
                        <Play className='w-8 h-8 text-gray-900' />
                    </div>
                    <h2 className='text-4xl md:text-5xl font-bold text-lime-700 mb-4 leading-tight'>
                        Video Profil Desa Cigalontang
                    </h2>
                    <p className='text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed'>
                        Saksikan keindahan dan aktivitas Desa Cigalontang dalam
                        video profil resmi kami.
                    </p>
                    <div className='flex items-center justify-center mt-8'>
                        <div className='h-1 w-16 bg-lime-400 rounded-full'></div>
                        <div className='h-2 w-2 bg-emerald-400 rounded-full mx-3'></div>
                        <div className='h-1 w-16 bg-teal-400 rounded-full'></div>
                    </div>
                </div>

                {/* Video Container - Modified for better width control */}
                <div className='flex justify-center'>
                    <div className='w-full max-w-4xl xl:max-w-5xl 2xl:max-w-6xl'>
                        {' '}
                        {/* Adjust max-width as needed */}
                        <div className='aspect-video bg-black rounded-xl overflow-hidden shadow-xl mb-6'>
                            <iframe
                                src={embedUrl}
                                title='YouTube video player'
                                frameBorder='0'
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                allowFullScreen
                                className='w-full h-full'
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VideoProfile
