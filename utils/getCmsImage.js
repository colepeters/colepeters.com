// Convenience function for flattening Contentful image field
export default function getCmsImage(img) {
  const { fields } = img
  return {
    title: fields.title,
    url: fields.file.url.replace('//', 'https://'),
    description: fields.description,
    height: fields.file.details.image.height,
    width: fields.file.details.image.width,
  }
}
