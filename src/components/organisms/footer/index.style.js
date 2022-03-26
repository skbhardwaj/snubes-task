import styled from 'styled-components'
import { DEVICE } from '../../../utils/constants'
import typography from '../../../utils/typography'

export const StyledFooterNav = styled.nav`
  background-color: var(--color-text-02);
  color: var(--color-white);
  padding: 3rem 1rem;
  align-items: center;

  @media ${DEVICE.tablet} {
    padding: 4rem 2rem;
    display: flex;
    justify-content: space-between;
  }

  @media ${DEVICE.laptop} {
    justify-content: space-evenly;
  }
`

export const BoSContainer = styled.div`
  display: none;

  @media ${DEVICE.tablet} {
    display: block;
  }
`
export const BoSImg = styled.img``

export const StyledUl = styled.ul`
  @media ${DEVICE.tablet} {
    display: flex;
  }
`

export const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${DEVICE.tablet} {
    align-items: flex-start;
    margin-right: 2rem;

    &:last-child {
      margin-right: 0;
    }
  }

  @media ${DEVICE.laptop} {
    margin-right: 5rem;
  }
`

export const StyledA = styled.a`
  ${typography.Text.M}
  color: var(--color-white);
  margin-bottom: 1rem;
`

export const StylesCopyright = styled.div`
  ${typography.Text.S}
  color: var(--color-text-02);
  padding: 2rem 1rem;
  text-align: center;
`
