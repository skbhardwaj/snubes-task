import data from './data'
import { TextL } from '../../atoms/StyledComponents'
import {
  CarouselContainer,
  CarouselPointerUl,
  CarouselPointerLi,
  CarouselPointerImg,
  CarouselUl,
  CarouselLi,
  CarouselNavArrow,
  CarouselNavArrowImg,
  CarouselNavContainer,
  ReviewsMainContainer,
  ReviewContainer,
  ReviewImg,
  ReviewQuote,
  ReviewAuthor,
  ReviewLogo,
  ReviewText,
  ClientsUl,
  ClientsLi,
  ClientsImg,
} from './index.style'

import circleDark from 'assets/icons/icon-oval-dark.png'
import circleLight from 'assets/icons/icon-oval-light.png'
import circleLeft from 'assets/icons/icon-left-circle.png'
import circleRight from 'assets/icons/icon-right-circle.png'

const SLIDE = {
  activeClass: 'active',
  inActiveClass: '',
  activeIndex: 0,
}

const Carousel = (props) => {
  const { list } = props
  return (
    <CarouselContainer>
      <CarouselUl>
        {list.map(({ company, src, review, author: { name, title } }, i) => (
          <CarouselLi
            key={company}
            className={
              i === SLIDE.activeIndex ? SLIDE.activeClass : SLIDE.inActiveClass
            }
          >
            <ReviewContainer>
              <ReviewLogo>
                <ReviewImg src={src} title={company} />
              </ReviewLogo>
              <ReviewText>
                <TextL>
                  <ReviewQuote>{review}</ReviewQuote>
                </TextL>
              </ReviewText>
              <ReviewAuthor className="author">
                <b>{name},</b> {title}
              </ReviewAuthor>
            </ReviewContainer>
          </CarouselLi>
        ))}
      </CarouselUl>

      <CarouselNavContainer>
        <CarouselPointerUl>
          {list.map((x, i) => (
            <CarouselPointerLi
              key={x.company}
              className={
                i === SLIDE.activeIndex
                  ? SLIDE.activeClass
                  : SLIDE.inActiveClass
              }
            >
              <CarouselPointerImg
                src={i === SLIDE.activeIndex ? circleDark : circleLight}
              />
            </CarouselPointerLi>
          ))}
        </CarouselPointerUl>
      </CarouselNavContainer>
      <CarouselNavArrow className="left">
        <CarouselNavArrowImg src={circleLeft} />
      </CarouselNavArrow>

      <CarouselNavArrow className="right">
        <CarouselNavArrowImg src={circleRight} />
      </CarouselNavArrow>
    </CarouselContainer>
  )
}

const ClientList = (props) => {
  const { list } = props
  return (
    <>
      <ClientsUl>
        {list.map(({ name, src }) => (
          <ClientsLi key={name}>
            <ClientsImg src={src} title={name} />
          </ClientsLi>
        ))}
      </ClientsUl>
    </>
  )
}

const Reviews = () => {
  return (
    <ReviewsMainContainer className="reviews">
      <Carousel list={data.reviews} />
      <ClientList list={data.clients} />
    </ReviewsMainContainer>
  )
}

export default Reviews
