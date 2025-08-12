import navItems from '../app/components/navbar/navItems'

function generateSiteMap() {
    const baseUrl = 'https://desa-cigalontang.vercel.app'

    let urls = []

    navItems.forEach((item) => {
        // Halaman utama
        urls.push(`
      <url>
        <loc>${baseUrl}${item.href}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <priority>${item.href === '/' ? '1.0' : '0.8'}</priority>
      </url>
    `)

        // Kalau punya children, tambahkan
        if (item.children) {
            item.children.forEach((child) => {
                urls.push(`
          <url>
            <loc>${baseUrl}${child.href}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <priority>0.7</priority>
          </url>
        `)
            })
        }
    })

    return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.join('')}
  </urlset>`
}

export async function getServerSideProps({ res }) {
    const sitemap = generateSiteMap()

    res.setHeader('Content-Type', 'text/xml')
    res.write(sitemap)
    res.end()

    return { props: {} }
}

export default function SiteMap() {
    return null
}
