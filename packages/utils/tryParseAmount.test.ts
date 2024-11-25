import { Token } from '@pancakeswap/swap-sdk-core'
import { describe, expect, it } from 'vitest'
import tryParseAmount from './tryParseAmount'

describe('utils/tryParseAmount', () => {
  it('should be undefined when no valid input', () => {
    expect(tryParseAmount()).toBeUndefined()
  })
  it('should be undefined when input is 0', () => {
    expect(tryParseAmount('0.00')).toBeUndefined()
  })

  it('should pared value', () => {
    expect(
      tryParseAmount(
        '100',
        new Token(
          56,
          '0xbA2aE424d960c26247Dd6c32edC70B295c744C43',
          18,
          'CAKE',
          'PancakeSwap Token',
          'https://dogeswap.co/evm//',
        ),
      ),
    ).toBeTruthy()
  })
})
