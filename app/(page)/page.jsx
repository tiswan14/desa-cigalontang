import HeroSection from '../section/beranda/HeroSection'
import PotensiDesa from '../section/beranda/PotensiDesa'
import StrukturPemerintahan from '../section/beranda/StrukturPemerintahan'
import ProfilSingkat from '../section/beranda/ProfilSingkat'
import VideoProfile from '../section/beranda/VideoProfile'

export default function Home() {
    return (
        <>
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
