import { WINNER_COMBOS } from '../constants'

export const checkWinnerFrom = (boardToCheck) => {
  // Revisa las posiciones ganadoras
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo
    if (
      boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a] // X u O
    }
  }
  // Si no hay ganador
  return null
}

export const checkEndGame = (newBoard) => {
  // Revisa si hay un empate
  // Si no hay mas espacios vacios y en el tablero
  return newBoard.every((square) => square !== null)
}
