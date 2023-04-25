import { render, screen } from '@testing-library/react'

import { IncrementButton } from '.'

describe('IncrementButton', () => {
  it('should render the component', () => {
    const handleIncrement = jest.fn()

    render(<IncrementButton handleClick={handleIncrement} />)

    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('should call the handleClick function when clicked', () => {
    const handleIncrement = jest.fn()

    render(<IncrementButton handleClick={handleIncrement} />)

    screen.getByRole('button').click()

    expect(handleIncrement).toHaveBeenCalledTimes(1)
  })
})
