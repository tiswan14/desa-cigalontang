const navItems = [
    {
        href: '/',
        text: 'Beranda',
    },
    {
        href: '/profil-desa',
        text: 'Profil Desa',
        children: [
            {
                href: '/profil-desa/gambaran-umum',
                text: 'Gambaran Umum',
            },
            {
                href: '/profil-desa/demografi',
                text: 'Demografi',
            },
            {
                href: '/profil-desa/ekonomi',
                text: 'Ekonomi',
            },
            {
                href: '/profil-desa/struktur-organisasi',
                text: 'Struktur Organisasi',
            },
        ],
    },
    {
        href: '/lembaga-desa',
        text: 'Lembaga Desa',
        children: [
            {
                href: '/lembaga-desa/bpd',
                text: 'Badan Permusyawaratan Desa (BPD)',
            },
            {
                href: '/lembaga-desa/lpm',
                text: 'Lembaga Pemberdayaan Masyarakat (LPM)',
            },
            {
                href: '/lembaga-desa/mui',
                text: 'Majelis Ulama Indonesia (MUI)',
            },
            {
                href: '/lembaga-desa/karang-taruna',
                text: 'Karang Taruna',
            },
        ],
    },
    {
        href: '/potensi-desa',
        text: 'Potensi Desa',
        children: [
            {
                href: '/potensi-desa/pertanian',
                text: 'Sektor Pertanian',
            },
            {
                href: '/potensi-desa/perkebunan',
                text: 'Sektor Perkebunan',
            },
            {
                href: '/potensi-desa/peternakan',
                text: 'Sektor Peternakan',
            },
        ],
    },
    {
        href: '/sarana-prasarana',
        text: 'Fasilitas Desa',
    },
    {
        href: '/pendidikan-kesehatan',
        text: 'Pendidikan & Kesehatan',
        children: [
            {
                href: '/pendidikan-kesehatan/pendidikan',
                text: 'Lembaga Pendidikan',
            },
            {
                href: '/pendidikan-kesehatan/kesehatan',
                text: 'Fasilitas Kesehatan',
            },
        ],
    },
    {
        href: '/kontak',
        text: 'Hubungi Kami',
    },
]

export default navItems
