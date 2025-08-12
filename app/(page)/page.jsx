import Head from 'next/head'
import HeroSection from '../section/beranda/HeroSection'
import PotensiDesa from '../section/beranda/PotensiDesa'
import StrukturPemerintahan from '../section/beranda/StrukturPemerintahan'
import ProfilSingkat from '../section/beranda/ProfilSingkat'
import VideoProfile from '../section/beranda/VideoProfile'

export default function Home() {
    return (
        <>
            <Head>

                {/* SEO Basics */}
                <title>Profil Desa Cigalontang | Website Resmi Desa</title>
                <meta
                    name='description'
                    content='Website resmi Desa Cigalontang, Kecamatan Cigalontang, Kabupaten Tasikmalaya. Informasi profil desa, potensi unggulan, struktur pemerintahan, dan layanan publik.'
                />
                <link
                    rel='canonical'
                    href='https://desa-cigalontang.vercel.app/'
                    />
                <meta
                    name='keywords'
                    content='Desa Cigalontang, Profil Desa, Potensi Desa, Tasikmalaya, Jawa Barat'
                />
                <meta
                    name='author'
                    content='Pemerintah Desa Cigalontang'
                />

                <meta
                    property='og:title'
                    content='Profil Desa Cigalontang'
                />
                <meta
                    property='og:description'
                    content='Website resmi Desa Cigalontang dengan informasi lengkap profil, potensi, dan pemerintahan.'
                />
                <meta
                    property='og:image'
                    content='/sawah.jpg'
                />
                <meta
                    property='og:url'
                    content='https://desa-cigalontang.vercel.app/'
                />
                <meta
                    property='og:type'
                    content='website'
                />

                {/* Twitter Card */}
                <meta
                    name='twitter:card'
                    content='summary_large_image'
                />
                <meta
                    name='twitter:title'
                    content='Profil Desa Cigalontang'
                />
                <meta
                    name='twitter:description'
                    content='Website resmi Desa Cigalontang, informasi profil, potensi, dan pemerintahan.'
                />
                <meta
                    name='twitter:image'
                    content='/sawah.jpg'
                />

                {/* Mobile Viewport */}
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />

                {/* Structured Data JSON-LD */}
                <script
                    type='application/ld+json'
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'GovernmentOrganization',
                            name: 'Desa Cigalontang',
                            url: 'https://desa-cigalontang.vercel.app',
                            logo: 'https://desa-cigalontang.vercel.app/logo.png',
                            address: {
                                '@type': 'PostalAddress',
                                streetAddress: 'M2H4+H22, Puspamukti',
                                addressLocality: 'Cigalontang',
                                addressRegion: 'Jawa Barat',
                                postalCode: '46463',
                                addressCountry: 'ID',
                            },
                            description:
                                'Website resmi Desa Cigalontang, Kecamatan Cigalontang, Kabupaten Tasikmalaya.',
                        }),
                    }}
                />
            </Head>

            <HeroSection />
            <ProfilSingkat />
            <PotensiDesa />
            <StrukturPemerintahan />
            <VideoProfile />
            {/* <VisiMisi /> */}
            {/* <LayananPublik /> */}
        </>
    )
}
