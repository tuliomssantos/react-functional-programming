import { describe, it, expect } from 'vitest'

import { decrement } from '.'

describe('decrement', () => {
  it('should decrement the count', () => {
    expect(decrement(1)).toEqual(0)
  })

  it('should not decrement below 0', () => {
    expect(decrement(0)).toEqual(0)
  })
})
