import { BASE_FONT_SIZE } from './constants'

export const px2vw = (size, width = 1440) => `${(size / width) * 100}vw`
export const px2rem = (px) => `${(1 / BASE_FONT_SIZE) * px}rem`
export const rem2px = (rem) => `${rem / (1 / BASE_FONT_SIZE)}px`
export const getWidth = (dist) => {
  if (!dist) {
    return null
  }
  const width = (dist / 12) * 100
  return `width: ${width}%`
}
