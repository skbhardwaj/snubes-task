import * as TYPES from './../types'

const initialState = {
  formData: {
    company: '',
    name: '',
    phone: '',
    email: '',
  },
  isdCode: '',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SET_FORM_DATA:
      return {
        ...state,
        formData: action.payload,
      }
    case TYPES.SET_ISD_CODE:
      return {
        ...state,
        isdCode: action.payload,
      }
    default:
      return state
  }
}

export default reducer
