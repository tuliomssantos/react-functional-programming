import { render, screen } from '@testing-library/react'

import { Counter } from '.'

const IncrementButton = ({ handleClick }: { handleClick: () => void }) => (
  <button onClick={handleClick}>Increment</button>
)

const DecrementButton = ({ handleClick }: { handleClick: () => void }) => (
  <button onClick={handleClick}>Decrement</button>
)

describe('Counter', () => {
  const handleIncrement = jest.fn()
  const handleDecrement = jest.fn()

  it('renders the count', () => {
    render(
      <Counter
        count={5}
        increment={<IncrementButton handleClick={handleIncrement} />}
        decrement={<DecrementButton handleClick={handleDecrement} />}
      />
    )

    expect(screen.getByText('Count: 5')).toBeInTheDocument()
  })

  it('renders the increment button', () => {
    render(
      <Counter
        count={5}
        increment={<IncrementButton handleClick={handleIncrement} />}
        decrement={<DecrementButton handleClick={handleDecrement} />}
      />
    )

    expect(screen.getByText('Increment')).toBeInTheDocument()
  })

  it('renders the decrement button', () => {
    render(
      <Counter
        count={5}
        increment={<IncrementButton handleClick={handleIncrement} />}
        decrement={<DecrementButton handleClick={handleDecrement} />}
      />
    )

    expect(screen.getByText('Decrement')).toBeInTheDocument()
  })
})
