// Convenience function for flattening Contentful image field
export default function getCmsImage(img) {
  const { fields } = img
  return {
    title: fields.title,
    url: fields.file.url,
    description: fields.description,
  }
}
