import styled from 'styled-components'
import { DEVICE } from '../../../utils/constants'
import typography from '../../../utils/typography'

export const HeaderContainer = styled.header`
  background-color: var(--color-white);
  border-bottom: 1px solid var(--color-border);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${DEVICE.laptop} {
    padding: 1.5rem;
    justify-content: space-evenly;
  }
`

export const StyledNavBar = styled.nav`
  display: none;

  @media ${DEVICE.laptop} {
    display: inline-block;
  }
`

export const StyledNavUl = styled.ul`
  display: flex;
`
export const StyledNavLi = styled.li`
  margin-right: 2rem;

  &:last-child {
    margin-right: 0;
  }
`
export const StyledNavLink = styled.a`
  ${typography.Text.S}
  color: var(--color-text-nav);
`

export const StyledLogo = styled.div`
  max-width: 6.4rem;

  @media ${DEVICE.laptop} {
    max-width: 10rem;
  }
`

export const StyledA = styled.a``

export const StyledMenuLink = styled.a`
  @media ${DEVICE.laptop} {
    display: none;
  }
`
export const StyledMenuImg = styled.img`
  max-width: 1.3rem;

  @media ${DEVICE.desktop} {
    display: none;
  }
`
