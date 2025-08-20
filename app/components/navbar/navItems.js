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
                href: '/profil-desa/visi-misi',
                text: 'Visi & Misi',
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
        href: '/data-desa',
        text: 'Data Desa',
        children: [
            { href: '/data-desa/pendidikan', text: 'Pendidikan' },
            { href: '/data-desa/jenis-kelamin', text: 'Jenis Kelamin' },
            { href: '/data-desa/usia', text: 'Kelompok Usia' },
            { href: '/data-desa/kependudukan', text: 'Kependudukan' },
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
        href: '/wisata-umkm',
        text: 'Wisata & UMKM',
    },

    {
        href: '/kontak',
        text: 'Hubungi Kami',
    },
]

export default navItems
