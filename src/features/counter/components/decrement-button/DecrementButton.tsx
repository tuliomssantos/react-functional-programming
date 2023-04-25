import { memo } from 'react'

const Decrement = memo(({ handleClick }: { handleClick: () => void }) => {
  return <button onClick={handleClick}>-</button>
})

export default Decrement
