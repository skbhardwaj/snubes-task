import * as TYPES from '../types'

export const setFormData = (payload) => {
  return {
    type: TYPES.SET_FORM_DATA,
    payload,
  }
}

export const setIsdCode = (payload) => {
  return {
    type: TYPES.SET_ISD_CODE,
    payload,
  }
}
