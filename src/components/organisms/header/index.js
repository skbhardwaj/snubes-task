import data from './data'
import {
  StyledA,
  HeaderContainer,
  StyledMenuImg,
  StyledNavBar,
  StyledLogo,
  StyledNavUl,
  StyledNavLi,
  StyledNavLink,
  StyledMenuLink,
} from './index.style'
import ResponsiveImage from '../../atoms/ResponsiveImage'

const Logo = (props) => {
  const { src, alt, link } = props
  return (
    <StyledLogo className="logo">
      <StyledA href={link} title={alt}>
        <ResponsiveImage {...src} alt={alt} />
      </StyledA>
    </StyledLogo>
  )
}

const NavBar = (props) => {
  const { list } = props

  return (
    <StyledNavBar>
      <StyledNavUl>
        {list.map(({ link, text }) => (
          <StyledNavLi key={text}>
            <StyledNavLink href={link} title={text}>
              {text}
            </StyledNavLink>
          </StyledNavLi>
        ))}
      </StyledNavUl>
    </StyledNavBar>
  )
}

const Header = () => {
  return (
    <HeaderContainer className="header">
      <Logo
        src={data.logo.imagePaths}
        alt={data.logo.alt}
        link={data.logo.link}
      />
      <NavBar list={data.nav} />
      <StyledMenuLink className="menu" href="#">
        <StyledMenuImg className="menu-img" src={data.menuSrc} />
      </StyledMenuLink>
    </HeaderContainer>
  )
}

export default Header
