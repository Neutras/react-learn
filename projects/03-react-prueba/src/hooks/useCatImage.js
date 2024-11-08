import { useState, useEffect } from 'react'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()
  const CAT_PREFIX_URL = 'https://cataas.com/cat/says/'

  // Recupera la imagen cada vez que tenemos una cita nueva
  useEffect(() => {
    if (!fact) return

    const threeFirstWord = fact.split(' ', 3).join(' ')
    console.log(threeFirstWord)

    fetch(`${CAT_PREFIX_URL}${threeFirstWord}?fontColor=%23ffff&fontSize=50`)
      .then(response => {
        const { url } = response
        setImageUrl(url)
        console.log(url)
      })
  }, [fact])

  return { imageUrl } // { imageUrl : 'https://.....' }
}
