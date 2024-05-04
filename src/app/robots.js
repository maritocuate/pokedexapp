export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://pokedexapp-ecru.vercel.app/sitemap.xml',
  }
}
