import ResponsiveImage from '../../atoms/ResponsiveImage'
import { HeadingL, HeadingS, TextL } from '../../atoms/StyledComponents'
import data from './data'
import {
  ContentLi,
  ContentUl,
  HeroBannerContainer,
  HeroBgImgContainer,
  HeroContent,
  HeroContentContainer,
} from './index.style'

const Tile = (props) => {
  const { title, text } = props.data
  return (
    <ContentLi>
      <HeadingL>{title}</HeadingL>
      <TextL>{text}</TextL>
    </ContentLi>
  )
}

const HeroBanner = () => {
  return (
    <HeroBannerContainer className="hero-banner">
      <HeroBgImgContainer>
        <ResponsiveImage {...data.background} alt={data.title} />
      </HeroBgImgContainer>

      <HeroContentContainer>
        <HeroContent>
          <HeadingS className="text-center">{data.title}</HeadingS>
          <ContentUl>
            {data.items.map((x) => (
              <Tile data={x} key={x.title} />
            ))}
          </ContentUl>
        </HeroContent>
      </HeroContentContainer>
    </HeroBannerContainer>
  )
}

export default HeroBanner
