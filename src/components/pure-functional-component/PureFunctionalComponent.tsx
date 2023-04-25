import { useCounter } from '../../features/counter/hooks/useCounter'

import { Counter } from '../../features/counter'
import { IncrementButton } from '../../features/counter'
import { DecrementButton } from '../../features/counter'

export default function PureFunctionalComponent() {
  const { count, handleIncrement, handleDecrement } = useCounter()

  return (
    <div>
      <Counter
        count={count}
        increment={<IncrementButton handleClick={handleIncrement} />}
        decrement={<DecrementButton handleClick={handleDecrement} />}
      />
    </div>
  )
}
