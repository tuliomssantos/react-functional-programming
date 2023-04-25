import { useState } from 'react'

import { increment } from '../../lib/increment'
import { decrement } from '../../lib/decrement'

const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue)

  const handleIncrement = () => setCount(increment(count))

  const handleDecrement = () => setCount(decrement(count))

  return { count, handleIncrement, handleDecrement }
}

export default useCounter
