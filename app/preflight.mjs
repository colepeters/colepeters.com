export default async function Preflight() {
  return {
    plugins: {
      '@enhance/image': {
        transform: {
          widths: [2000, 1500, 1000, 750, 600],
          format: 'webp',
          quality: 75,
        }
      }
    }
  }
}
