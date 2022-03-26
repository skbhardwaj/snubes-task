export const BASE_FONT_SIZE = 16

export const BREAKPOINT = {
  mobile: '320px',
  tablet: '768px',
  laptop: '1024px', // defaulting to this for L
  desktop: '1920px',
}

export const IMG_SRCSET = {
  mobile: `(max-width: ${BREAKPOINT.mobile})`,
  tablet: `(max-width: ${BREAKPOINT.tablet})`,
  laptop: `(max-width: ${BREAKPOINT.laptop})`,
  desktop: `(min-width: ${BREAKPOINT.tablet})`,
}

export const DEVICE = {
  mobile: `(min-width: ${BREAKPOINT.mobile})`,
  tablet: `(min-width: ${BREAKPOINT.tablet})`,
  laptop: `(min-width: ${BREAKPOINT.laptop})`,
  desktop: `(min-width: ${BREAKPOINT.desktop})`,
}

export const validateCompany = (str, cb) => {
  const reLetters = /^[A-Za-z]+$/
  let isValid = false
  if (str && str.match(reLetters)) {
    isValid = true
  }
  if (cb) {
    cb.call(this, isValid)
  }
  return isValid
}

export const validateName = (str, cb) => {
  let isValid = false
  if (str) {
    isValid = true
  }
  if (cb) {
    cb.call(this, isValid)
  }
  return isValid
}

export const validatePhone = (str, cb) => {
  const rePhone = /^[0-9\b]+$/
  let isValid = false
  if (str && str.match(rePhone)) {
    isValid = true
  }
  if (cb) {
    cb.call(this, isValid)
  }
  return isValid
}

export const validateEmail = (str, cb) => {
  const reEmail =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  let isValid = false
  if (str && str.match(reEmail)) {
    isValid = true
  }
  if (cb) {
    cb.call(this, isValid)
  }
  return isValid
}
