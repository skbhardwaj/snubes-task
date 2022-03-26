import styled from 'styled-components'
import { DEVICE } from '../../../utils/constants'
import typography from '../../../utils/typography'
import { CenteredContainer } from '../../atoms/StyledComponents'

export const ReviewsMainContainer = styled.section`
  background-color: var(--color-white);
  margin-bottom: 0.5rem;
  padding: 2rem 1rem 1rem;
  position: relative;
`
// carousel
export const CarouselContainer = styled.div``
export const CarouselUl = styled.ul``
export const CarouselLi = styled.li`
  display: none;

  &:first-child {
    display: block;
  }
`
// carousel-nav
export const CarouselNavContainer = styled(CenteredContainer)`
  justify-content: space-between;
  padding: 1rem 0;
`
export const CarouselNavArrow = styled(CenteredContainer)`
  width: 2rem;
  position: absolute;
  bottom: 0;

  &.right {
    right: 0;
  }

  @media ${DEVICE.tablet} {
    bottom: auto;
    top: 50%;
  }
`
export const CarouselNavArrowImg = styled.img``
// carousel-pointers
export const CarouselPointerUl = styled(CenteredContainer).attrs({
  as: 'ul',
})`
  margin: 0 auto;
`
export const CarouselPointerLi = styled(CenteredContainer).attrs({
  as: 'li',
})`
  width: 0.75rem;
  margin-right: 0.5rem;

  &:last-child {
    margin-right: 0;
  }
`
export const CarouselPointerImg = styled.img``

// review
export const ReviewContainer = styled(CenteredContainer)`
  margin-bottom: 1rem;
  width: 80vw;
  margin: 0 auto;
`
export const ReviewLogo = styled.div`
  max-width: 7rem;
`
export const ReviewImg = styled.img``
export const ReviewText = styled.div`
  margin: 1.75rem 0;
`
export const ReviewQuote = styled.q`
  font-style: italic;
`
export const ReviewAuthor = styled.address`
  ${typography.Text.L}

  b {
    font-weight: bold;
  }
`

// clients
export const ClientsUl = styled(CenteredContainer)`
  margin-top: 1rem;

  @media ${DEVICE.tablet} {
    justify-content: space-evenly;
  }
`
export const ClientsLi = styled.li`
  margin: 1rem;
`
export const ClientsImg = styled.img`
  max-height: 1.5rem;
`
