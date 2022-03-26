import { css } from 'styled-components'
import { DEVICE } from './constants'

// h - l - 500+ - 2/2.75 - 2/2.75 - 2/2.75
const HeadingLarge = css`
  font-size: 2rem;
  line-height: 2.75rem;
  font-weight: bold;
`
// h - m - why snubes - 1.5/2.125 - 1.75/2.375 - 1.75/2.75
const HeadingMedium = css`
  font-size: 1.5rem;
  line-height: 2.125rem;
  font-weight: bold;

  @media ${DEVICE.tablet} {
    font-size: 1.75rem;
    line-height: 2.375rem;
  }

  @media ${DEVICE.desktop} {
    line-height: 2.75rem;
  }
`
// h - s - signup fro free - 1/1.5 - 1.125/1.75 - 1.125/1.75
const HeadingSmall = css`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: bold;

  @media ${DEVICE.tablet} {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
`

// t - l - use our AI - 1/1.5 - 1.125/1.75 - 1.125/1.75
const TextLarge = css`
  font-size: 1rem;
  line-height: 1.5rem;

  @media ${DEVICE.tablet} {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
`
// t - m - About us - 0.938/1.125 - 1.063/1.25 - 1.063/1.25
const TextMedium = css`
  font-size: 0.938rem;
  line-height: 1.125rem;

  @media ${DEVICE.tablet} {
    font-size: 1.063rem;
    line-height: 1.25rem;
  }
`
// t - s - copyright - 0.938
const TextSmall = css`
  font-size: 0.938rem;
`

export default {
  Heading: {
    L: HeadingLarge,
    M: HeadingMedium,
    S: HeadingSmall,
  },
  Text: {
    L: TextLarge,
    M: TextMedium,
    S: TextSmall,
  },
}
