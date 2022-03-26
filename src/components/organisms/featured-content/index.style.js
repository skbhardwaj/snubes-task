import styled from 'styled-components'
import { DEVICE } from '../../../utils/constants'
import typography from '../../../utils/typography'

export const FeaturedContentContainer = styled.section`
  background-color: var(--color-white);
  margin-bottom: 0.5rem;
  padding: 1rem;

  @media ${DEVICE.tablet} {
    padding: 2rem;
  }
`

export const StyledUl = styled.ul`
  @media ${DEVICE.tablet} {
    display: flex;
    flex-flow: nowrap;
    justify-content: center;
  }
`

export const StyledLi = styled.li`
  display: flex;
  margin-bottom: 2rem;

  @media ${DEVICE.tablet} {
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    margin-bottom: 0;
  }
`

export const StyledCol = styled.div`
  width: 70%;
  display: flex;

  &:first-child {
    width: calc(30% - 1rem);
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
  }

  @media ${DEVICE.tablet} {
    align-items: center;
    justify-content: center;
    text-align: center;

    &:first-child {
      margin-right: 0;
    }
  }
`

export const StyledImg = styled.img`
  /* width: 2.5rem; */

  @media ${DEVICE.tablet} {
    width: 5rem;
  }
`

export const StyledH3 = styled.h3`
  ${typography.Heading.S}
  margin-bottom: 0.5rem;
`

export const StyledP = styled.p`
  ${typography.Text.L}
`
