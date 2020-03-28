import { useEffect, useRef, useState } from 'react'

import usePrevious from '../../hooks/usePrevious'
import { Box } from '../index'

export default function GalleryImage({ src, alt, height, width }) {
  const imgRef = useRef(null)
  const [isZoomed, setIsZoomed] = useState(false)
  const toggleZoom = () => setIsZoomed(prev => !prev)

  const prevZoom = usePrevious(isZoomed)

  useEffect(() => {
    if (prevZoom && !isZoomed) {
      window.scrollTo({
        top: imgRef?.current.offsetTop - 12,
        left: 0,
      })
    }
  }, [isZoomed])

  return (
    <Box
      onClick={toggleZoom}
      width='100%'
      style={{
        cursor: isZoomed ? 'zoom-out' : 'zoom-in',
      }}
    >
      <img
        src={src}
        alt={alt}
        ref={imgRef}
        style={{
          maxHeight: isZoomed ? '225vh' : '95vh',
          maxWidth: isZoomed ? '150vw' : '100%',
        }}
      />
    </Box>
  )
}
