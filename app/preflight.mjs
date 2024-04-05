export default async function Preflight() {
  return {
    plugins: {
      '@enhance/image': {
        transform: {
          quality: 33,
        }
      }
    }
  }
}
