import { render, screen } from '@testing-library/react'

import { DecrementButton } from '.'

describe('DecrementButton', () => {
  it('should render the component', () => {
    const handleDecrement = jest.fn()

    render(<DecrementButton handleClick={handleDecrement} />)

    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('should call the handleClick function when clicked', () => {
    const handleDecrement = jest.fn()

    render(<DecrementButton handleClick={handleDecrement} />)

    screen.getByRole('button').click()

    expect(handleDecrement).toHaveBeenCalledTimes(1)
  })
})
