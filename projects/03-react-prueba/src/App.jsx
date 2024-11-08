import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?font=Impact&fontSize=30&fontColor=%23000&fontBackground=none&position=center`

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  // Recupera la cita al cargar la página
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

  // Recupera la imagen cada vez que tenemos una cita nueva
  useEffect(() => {
    if (!fact) return

    const firstWord = fact.split(' ', 1)
    console.log(firstWord)

    fetch(`https://cataas.com/cat/says/${firstWord}?fontColor=%23ffff&fontSize=50`)
      .then(response => {
        const { url } = response
        setImageUrl(url)
        console.log(url)
      })
  }, [fact])

  return (
    <main>
      <h1>Gatos tirando facts</h1>

      {fact && <p>{fact}</p>}

      {imageUrl && <img
        src={`${imageUrl}`}
        alt={`Image extracted using the first word for ${fact}`}
                   />}
    </main>

  )
}
