import { describe, expect, it } from 'vitest'
import { CORS_ALLOW, isOriginAllowed } from './index'

describe('worker-utils', () => {
  it.each([
    ['https://dogeswap.co/', true],
    ['https://pancakeswap.com', true],
    ['https://aptospancakeswap.finance', false],
    ['https://aptos.pancakeswap.finance', true],
    ['https://dogeswap.co/.com', false],
    ['http://pancakeswap.finance', false],
    ['https://pancake.run', false],
    ['https://test.pancake.run', true],
    ['http://localhost:3000', true],
    ['http://localhost:3001', true],
  ])(`isOriginAllowed(%s)`, (origin, expected) => {
    expect(isOriginAllowed(origin, CORS_ALLOW)).toBe(expected)
  })
})
