// Convenience function for flattening Contentful image field
export default function ctfImage(img) {
  const { fields } = img
  return {
    title: fields.title,
    url: fields.file.url,
  }
}
