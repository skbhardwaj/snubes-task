import { IMG_SRCSET } from '../../../utils/constants'

const ResponsiveImage = (props) => {
  const { mobile, tablet, laptop, desktop, alt } = props

  return (
    <picture>
      {mobile && <source media={IMG_SRCSET.mobile} srcSet={mobile} />}
      {tablet && <source media={IMG_SRCSET.tablet} srcSet={tablet} />}
      {laptop && <source media={IMG_SRCSET.laptop} srcSet={laptop} />}
      {desktop && <source media={IMG_SRCSET.desktop} srcSet={desktop} />}
      <img src={mobile} alt={alt} />
    </picture>
  )
}

export default ResponsiveImage
