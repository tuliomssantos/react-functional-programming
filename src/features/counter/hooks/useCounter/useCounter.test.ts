import { describe, it, expect } from 'vitest'

import { renderHook, act } from '@testing-library/react'

import { useCounter } from '.'

describe('useCounter', () => {
  it('should return the initial count', () => {
    const { result } = renderHook(() => useCounter())

    expect(result.current.count).toEqual(0)
  })

  it('should increment the count', () => {
    const { result } = renderHook(() => useCounter())

    act(() => {
      result.current.handleIncrement()
    })

    expect(result.current.count).toEqual(1)
  })

  it('should decrement the count', () => {
    const { result } = renderHook(() => useCounter(1))

    act(() => {
      result.current.handleDecrement()
    })

    expect(result.current.count).toEqual(0)
  })
})
