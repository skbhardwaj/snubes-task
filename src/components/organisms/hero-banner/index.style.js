import styled from 'styled-components'
import { DEVICE } from '../../../utils/constants'
import typography from '../../../utils/typography'

export const HeroBannerContainer = styled.main`
  background-color: var(--color-white);
  position: relative;
  color: var(--color-white);
  position: relative;
`
export const HeroBgImgContainer = styled.div``

export const HeroContentContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* backdrop-filter: blur(10px); */
  background-color: rgba(50, 60, 70, 0.75);
  padding: 2rem 1rem;

  @media ${DEVICE.desktop} {
    background-color: transparent;
    background-image: linear-gradient(
      to top,
      rgb(55 65 75),
      rgba(255, 0, 0, 0)
    );
  }
`

export const HeroContent = styled.div`
  @media ${DEVICE.tablet} {
    position: absolute;
    width: 100%;
  }

  @media ${DEVICE.laptop} {
    top: 25%;
  }

  @media ${DEVICE.desktop} {
    width: 50vw;
    left: 50%;
    bottom: 20%;
    top: auto;

    .text-center {
      text-align: start;
    }
  }
`

export const ContentUl = styled.ul`
  display: flex;
  margin-top: 2rem;

  @media ${DEVICE.tablet} {
    justify-content: space-evenly;
  }

  @media ${DEVICE.desktop} {
    justify-content: flex-start;
  }
`
export const ContentLi = styled.li`
  width: 50%;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 1rem;

  @media ${DEVICE.tablet} {
    width: auto;
  }

  @media ${DEVICE.desktop} {
    margin-right: 5rem;

    &:last-child {
      margin-right: 0;
    }
  }
`
