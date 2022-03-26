import FeaturedContent from './components/organisms/featured-content'
import Footer from './components/organisms/footer'
import Form from './components/organisms/form'
import Header from './components/organisms/header'
import HeroBanner from './components/organisms/hero-banner'
import Reviews from './components/organisms/reviews'
import WhySnubes from './components/organisms/why-snubes'
import { StyledMainBanner } from './components/atoms/StyledComponents'

const App = () => {
  return (
    <>
      <Header />
      <StyledMainBanner>
        <Form />
        <HeroBanner />
      </StyledMainBanner>
      <FeaturedContent />
      <WhySnubes />
      <Reviews />
      <Footer />
    </>
  )
}

export default App
