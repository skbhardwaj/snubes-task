import data, { copyright, bestOfService } from './data'
import {
  StyledLi,
  StyledUl,
  StyledA,
  StylesCopyright,
  StyledFooterNav,
  BoSContainer,
  BoSImg,
} from './index.style'

const Footer = () => {
  return (
    <footer>
      <StyledFooterNav>
        <BoSContainer>
          <BoSImg src={bestOfService.src} alt={bestOfService.alt} />
        </BoSContainer>
        <StyledUl>
          {data.map((col, i) => (
            <StyledLi key={i}>
              {col.map((x) => (
                <StyledA href={x.link} title={x.text} key={x.text}>
                  {x.text}
                </StyledA>
              ))}
            </StyledLi>
          ))}
        </StyledUl>
      </StyledFooterNav>
      <StylesCopyright>{copyright}</StylesCopyright>
    </footer>
  )
}

export default Footer
