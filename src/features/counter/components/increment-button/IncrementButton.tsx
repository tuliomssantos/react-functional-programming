import { memo } from 'react'

const IncrementButton = memo(({ handleClick }: { handleClick: () => void }) => {
  return <button onClick={handleClick}>+</button>
})

export default IncrementButton
