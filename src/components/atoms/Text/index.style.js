import styled from 'styled-components'
import { DEVICE } from '../../../utils/constants'

export const Styled = styled.p`
  background-color: var(--color-text);

  @media ${DEVICE.tablet} {
    background-color: var(--color-blue);
  }

  @media ${DEVICE.desktop} {
    background-color: var(--color-red);
  }
`
