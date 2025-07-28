import React from 'react'
import Sejarah from '../components/profile-desa/Sejarah'
import VisiMisi from '../components/profile-desa/VisiMisi'
import GambaranUmumDesa from '../section/profile-desa/GambaranUmumDesa'
import DemografiDesa from '../section/profile-desa/DemografiDesa'
import SectionEkonomiDesa from '../components/profile-desa/EkonomiDesa'

const ProfileDesa = () => {
    return (
        <div className='py-12'>
            <GambaranUmumDesa />
            <DemografiDesa />
            <SectionEkonomiDesa />
            <Sejarah />
            <VisiMisi />
        </div>
    )
}

export default ProfileDesa
