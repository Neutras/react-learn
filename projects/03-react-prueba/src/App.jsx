import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>Gatos tirando facts</h1>
      <button onClick={handleClick}>Get New Fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img
        src={`${imageUrl}`}
        alt={`Image extracted using the first word for ${fact}`}
                   />}
    </main>

  )
}
