import { describe, it, expect } from 'vitest'

import { increment } from '.'

describe('increment', () => {
  it('should increment the count', () => {
    expect(increment(1)).toEqual(2)
  })
})
