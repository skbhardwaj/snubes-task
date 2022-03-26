import {
  ButtonContainer,
  FormContainer,
  FormResponseContainer,
  FormResponseDd,
  FormResponseDl,
  FormResponseDt,
  FormResponseHeading,
  FormResponseText,
  RowContainer,
  RowFieldInput,
  RowFieldLabel,
  RowFieldSpan,
  StyledForm,
  SubmitButton,
} from './index.style'
import data from './data'
import { HeadingM, TextL } from '../../atoms/StyledComponents'

import { useRef, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFormData, setIsdCode } from '../../../store/actions'
import {
  validateCompany,
  validateName,
  validatePhone,
  validateEmail,
} from '../../../utils/constants'

const Form = () => {
  const isdCode = useSelector((state) => state.user.isdCode)
  const formStateData = useSelector((state) => state.user.formData)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!isdCode) {
      fetch('https://ipapi.co/json/')
        .then((response) => response.json())
        .then((response) => {
          // console.log(response)
          dispatch(setIsdCode(response.country_calling_code))
        })
        .catch((error) => {
          dispatch(setIsdCode('+0'))
          console.log('catch Error :', error)
        })
    }
  }, [])

  // local field states
  const [company, setCompany] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  // local validation states
  const [isCompanyValid, setCompanyValid] = useState(true)
  const [isNameValid, setNameValid] = useState(true)
  const [isEmailValid, setEmailValid] = useState(true)
  const [isPhoneValid, setPhoneValid] = useState(true)
  const [isFormSubmitSuccess, setFormSubmitSuccess] = useState()

  // using field refs
  const companyRef = useRef()
  const nameRef = useRef()
  const phoneRef = useRef()
  const emailRef = useRef()

  const isFormValid = () => {
    let isValid = false
    isValid = [isCompanyValid, isNameValid, isPhoneValid, isEmailValid].every(
      Boolean
    )
    console.log({ isValid })
    return isValid
  }

  const submitData = (e) => {
    e.preventDefault()
    if (isFormValid()) {
      dispatch(
        setFormData({
          company: company,
          name: name,
          phone: isdCode + phone,
          email: email,
        })
      )
      setFormSubmitSuccess(true)
    } else {
      setFormSubmitSuccess(false)
    }
  }

  return (
    <>
      {isFormSubmitSuccess ? (
        <FormResponseContainer>
          <FormResponseHeading className="text-center">
            {data.form.success.title}
          </FormResponseHeading>
          <FormResponseText className="text-center">
            {data.form.success.description}
          </FormResponseText>
          <FormResponseDl>
            <FormResponseDt>{data.form.fields.company.label}</FormResponseDt>
            <FormResponseDd>{formStateData.company}</FormResponseDd>
            <FormResponseDt>{data.form.fields.name.label}</FormResponseDt>
            <FormResponseDd>{formStateData.name}</FormResponseDd>
            <FormResponseDt>{data.form.fields.phone.label}</FormResponseDt>
            <FormResponseDd>{formStateData.phone}</FormResponseDd>
            <FormResponseDt>{data.form.fields.email.label}</FormResponseDt>
            <FormResponseDd>{formStateData.email}</FormResponseDd>
          </FormResponseDl>
        </FormResponseContainer>
      ) : (
        <FormContainer>
          <StyledForm>
            <form onSubmit={(e) => submitData(e)}>
              <fieldset>
                <legend>
                  <HeadingM className="heading">{data.form.title}</HeadingM>
                  <TextL className="description">{data.form.description}</TextL>
                </legend>

                {/* company */}
                <RowContainer>
                  <RowFieldLabel>
                    <RowFieldSpan>
                      {data.form.fields.company.label}
                    </RowFieldSpan>
                    <RowFieldInput
                      required
                      value={company}
                      ref={companyRef}
                      placeholder={data.form.fields.company.placeholder}
                      className={isCompanyValid ? 'input' : 'input error'}
                      maxLength={80}
                      onChange={(event) => {
                        setCompany(event.target.value)
                      }}
                      onInput={(event) => {
                        setCompanyValid(validateCompany(event.target.value))
                      }}
                    />
                  </RowFieldLabel>
                </RowContainer>

                {/* name */}
                <RowContainer>
                  <RowFieldLabel>
                    <RowFieldSpan>{data.form.fields.name.label}</RowFieldSpan>
                    <RowFieldInput
                      required
                      value={name}
                      ref={nameRef}
                      placeholder={data.form.fields.name.placeholder}
                      className={isNameValid ? 'input' : 'input error'}
                      maxLength={50}
                      onChange={(event) => {
                        setName(event.target.value)
                      }}
                      onInput={(event) => {
                        setNameValid(validateName(event.target.value))
                      }}
                    />
                  </RowFieldLabel>
                </RowContainer>

                {/* phone */}
                <RowContainer>
                  <RowFieldLabel>
                    <RowFieldSpan>{data.form.fields.phone.label}</RowFieldSpan>
                    <RowFieldInput
                      required
                      value={phone}
                      ref={phoneRef}
                      placeholder={
                        isdCode || data.form.fields.phone.placeholder
                      }
                      className={
                        isPhoneValid ? 'input phone' : 'input phone error'
                      }
                      onChange={(event) => {
                        setPhone(event.target.value)
                      }}
                      onInput={(event) => {
                        setPhoneValid(validatePhone(event.target.value))
                      }}
                    />
                  </RowFieldLabel>
                </RowContainer>

                {/* email */}
                <RowContainer>
                  <RowFieldLabel>
                    <RowFieldSpan>{data.form.fields.email.label}</RowFieldSpan>
                    <RowFieldInput
                      required
                      value={email}
                      ref={emailRef}
                      placeholder={data.form.fields.email.placeholder}
                      className={isEmailValid ? 'input' : 'input error'}
                      onChange={(event) => {
                        setEmail(event.target.value)
                      }}
                      onInput={(event) => {
                        setEmailValid(validateEmail(event.target.value))
                      }}
                    />
                  </RowFieldLabel>
                </RowContainer>
              </fieldset>

              {/* submit button */}
              <ButtonContainer>
                <SubmitButton type="submit">
                  {data.form.buttons.submit}
                </SubmitButton>
              </ButtonContainer>
            </form>
          </StyledForm>
        </FormContainer>
      )}
    </>
  )
}

export default Form
