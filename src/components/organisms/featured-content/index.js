import data from './data'
import {
  StyledLi,
  StyledUl,
  StyledCol,
  StyledImg,
  StyledH3,
  StyledP,
  FeaturedContentContainer,
} from './index.style'

const FeaturedItem = (props) => {
  const { title, image, text } = props.data
  return (
    <StyledLi>
      <StyledCol>
        <StyledImg alt={title} src={image} />
      </StyledCol>
      <StyledCol>
        <StyledH3>{title}</StyledH3>
        <StyledP>{text}</StyledP>
      </StyledCol>
    </StyledLi>
  )
}

const FeaturedContent = () => {
  return (
    <FeaturedContentContainer className="featured-content">
      <StyledUl>
        {data.map((x) => (
          <FeaturedItem data={x} key={x.title} />
        ))}
      </StyledUl>
    </FeaturedContentContainer>
  )
}

export default FeaturedContent
