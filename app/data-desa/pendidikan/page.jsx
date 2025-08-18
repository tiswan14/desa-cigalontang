import DataPendidikanClient from '../../components/DataPendidikanClient'

export const metadata = {
    title: 'Data Pendidikan - Desa Cigalontang',
    description:
        'Profil lengkap tingkat pendidikan masyarakat Desa Cigalontang berdasarkan jenjang dan sebaran wilayah dusun.',
}

const DataPendidikanPage = () => {
    return (
        <>
            <DataPendidikanClient />
        </>
    )
}

export default DataPendidikanPage
