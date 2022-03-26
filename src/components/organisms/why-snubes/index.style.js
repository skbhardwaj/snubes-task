import styled from 'styled-components'
import typography from '../../../utils/typography'
import { DEVICE } from '../../../utils/constants'

export const WhySnubesContainer = styled.section`
  background-color: var(--color-white);
  padding: 2rem 1rem;
  margin-bottom: 0.5rem;

  @media ${DEVICE.tablet} {
    padding: 0;
  }
`

export const BgImgContainer = styled.div`
  display: none;

  @media ${DEVICE.tablet} {
    display: block;
  }
`
export const ContentContainer = styled.div`
  @media ${DEVICE.tablet} {
    position: absolute;
    top: 0;
    left: 0;
    padding: 2rem;
    width: 30rem;
  }

  @media ${DEVICE.laptop} {
    left: 25%;
    padding: 1rem;
    width: 45rem;
  }

  @media ${DEVICE.desktop} {
    left: 35%;
    padding-top: 5rem;
  }
`

export const StyledUl = styled.ul``

export const StyledLi = styled.li`
  margin-bottom: 2rem;
  display: flex;
`

export const StyledCol = styled.div`
  flex: 1;
`

export const StyledH2 = styled.h2`
  ${typography.Heading.M}
  margin-bottom: 2rem;

  @media ${DEVICE.laptop} {
    margin-bottom: 1rem;
  }
`

export const StyledH3 = styled.h3`
  ${typography.Heading.S}
  margin-bottom: 1rem;

  @media ${DEVICE.tablet} {
    margin-bottom: 0.5rem;
  }
`

export const StyledP = styled.p`
  ${typography.Text.L}
`
