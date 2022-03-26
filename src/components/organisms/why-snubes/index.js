import ResponsiveImage from '../../atoms/ResponsiveImage'
import data from './data'
import {
  StyledLi,
  StyledUl,
  StyledCol,
  StyledH3,
  StyledP,
  StyledH2,
  WhySnubesContainer,
  BgImgContainer,
  ContentContainer,
} from './index.style'

const Tile = (props) => {
  const { title, text } = props.data
  return (
    <StyledLi>
      <StyledCol>
        <StyledH3>{title}</StyledH3>
        <StyledP>{text}</StyledP>
      </StyledCol>
    </StyledLi>
  )
}

const WhySnubes = () => {
  return (
    <WhySnubesContainer className="why-snubes">
      <BgImgContainer>
        <ResponsiveImage {...data.background} alt={data.title} />
      </BgImgContainer>

      <ContentContainer>
        <StyledH2>{data.title}</StyledH2>
        <StyledUl>
          {data.items.map((x) => (
            <Tile data={x} key={x.title} />
          ))}
        </StyledUl>
      </ContentContainer>
    </WhySnubesContainer>
  )
}

export default WhySnubes
