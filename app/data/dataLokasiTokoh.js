import { Building2, Home, User } from 'lucide-react'

const dataLokasiTokoh = [
    {
        nama: 'Kantor Kepala Desa Cigalontang',
        deskripsi: 'Tempat pusat pelayanan pemerintahan desa.',
        link: 'https://maps.google.com?q=-7.123456,108.123456',
        icon: Building2,
        rating: Math.floor(Math.random() * 2) + 4,
    },
    {
        nama: 'Rumah Kepala Desa',
        deskripsi: 'Tempat tinggal resmi Kepala Desa.',
        link: 'https://maps.google.com?q=-7.124789,108.124789',
        icon: Home,
        rating: Math.floor(Math.random() * 2) + 4,
    },
    {
        nama: 'Rumah Sekretaris Desa',
        deskripsi: 'Perangkat desa bagian administrasi umum.',
        link: 'https://maps.google.com?q=-7.125100,108.125100',
        icon: User,
        rating: Math.floor(Math.random() * 2) + 4,
    },
    {
        nama: 'Rumah Kepala Dusun 1',
        deskripsi: 'Tokoh wilayah barat Desa Cigalontang.',
        link: 'https://maps.google.com?q=-7.126200,108.126200',
        icon: Home,
        rating: Math.floor(Math.random() * 2) + 4,
    },
    {
        nama: 'Rumah Kepala Dusun 2',
        deskripsi: 'Tokoh wilayah timur Desa Cigalontang.',
        link: 'https://maps.google.com?q=-7.127300,108.127300',
        icon: Home,
        rating: Math.floor(Math.random() * 2) + 4,
    },
    {
        nama: 'Rumah Ketua RW 01',
        deskripsi: 'Wilayah lingkungan RW 01.',
        link: 'https://maps.google.com?q=-7.128400,108.128400',
        icon: User,
        rating: Math.floor(Math.random() * 2) + 4,
    },
    {
        nama: 'Rumah Ketua RW 02',
        deskripsi: 'Wilayah lingkungan RW 02.',
        link: 'https://maps.google.com?q=-7.129500,108.129500',
        icon: User,
        rating: Math.floor(Math.random() * 2) + 4,
    },
    {
        nama: 'Rumah Ketua RT 01',
        deskripsi: 'Lingkungan RT 01.',
        link: 'https://maps.google.com?q=-7.130600,108.130600',
        icon: User,
        rating: Math.floor(Math.random() * 2) + 4,
    },
    {
        nama: 'Rumah Ketua RT 02',
        deskripsi: 'Lingkungan RT 02.',
        link: 'https://maps.google.com?q=-7.131700,108.131700',
        icon: User,
        rating: Math.floor(Math.random() * 2) + 4,
    },
    {
        nama: 'Balai Dusun Cigalontang',
        deskripsi: 'Tempat rapat dan kegiatan masyarakat dusun.',
        link: 'https://maps.google.com?q=-7.132800,108.132800',
        icon: Building2,
        rating: Math.floor(Math.random() * 2) + 4,
    },
]

export default dataLokasiTokoh
