export default function Sitemap() {
  return `
    <?xml version='1.0' encoding='UTF-8'?>
    <urlset xmlns='http://www.sitemaps.org/schemas/sitemap/0.9'>
      <url>
        <loc>https://colepeters.com</loc>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>https://colepeters.com/unfolding</loc>
        <priority>0.75</priority>
      </url>
      <url>
        <loc>https://colepeters.com/delta-s</loc>
        <priority>0.75</priority>
      </url>
      <url>
        <loc>https://colepeters.com/heir</loc>
        <priority>0.75</priority>
      </url>
      <url>
        <loc>https://colepeters.com/biography</loc>
        <priority>0.5</priority>
      </url>
      <url>
        <loc>https://colepeters.com/contact</loc>
        <priority>0.5</priority>
      </url>
    </urlset>
  `
}
