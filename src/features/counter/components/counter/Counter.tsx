import { memo } from 'react'

import type { ReactElement } from 'react'

export type CounterProps = {
  count: number
  increment: ReactElement<{
    handleClick: () => void
  }>
  decrement: ReactElement<{
    handleClick: () => void
  }>
}

const Counter = memo(({ count, increment, decrement }: CounterProps) => {
  return (
    <div>
      <h1>Count: {count}</h1>
      {increment}
      {decrement}
    </div>
  )
})

export default Counter
