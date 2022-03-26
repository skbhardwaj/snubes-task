import styled from 'styled-components'
import { DEVICE } from '../../../utils/constants'
import typography from '../../../utils/typography'
import { HeadingM, HeadingS, TextL } from '../../atoms/StyledComponents'

export const FormContainer = styled.section`
  background-color: var(--color-white);

  @media ${DEVICE.tablet} {
    margin-bottom: 0.5rem;
  }

  @media ${DEVICE.desktop} {
    width: 25vw;
    position: absolute;
    z-index: 1;
    top: 20%;
    left: 20vw;
    border-radius: 10px;
  }
`

export const StyledForm = styled.div`
  display: flex;
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 0.5rem;

  legend {
    margin-bottom: 2rem;
  }

  .description {
    display: none;
  }

  @media ${DEVICE.tablet} {
    align-items: center;
    justify-content: center;

    .description {
      display: block;
      text-align: center;
    }
  }

  /* @media ${DEVICE.desktop} {
    line-height: 2.75rem;
  } */
`

export const RowContainer = styled.div`
  margin-bottom: 1.5rem;

  @media ${DEVICE.tablet} {
    padding: 0 5rem;
  }
`
export const RowFieldLabel = styled.label`
  display: flex;
  align-items: center;
`
export const RowFieldSpan = styled.span`
  width: 100%;
  margin-bottom: 0.5rem;

  @media ${DEVICE.tablet} {
    width: auto;
    flex: 1;
    text-align: right;
    margin-right: 2rem;
  }
`
export const RowFieldInput = styled.input`
  width: 100%;
  border: 1px solid #aabbcc;
  padding: 0.5rem 1rem;
  border-radius: 5px;

  &:focus {
    border-color: var(--color-blue);
  }

  &.error {
    border-color: var(--color-red);
  }

  @media ${DEVICE.tablet} {
    width: auto;
    flex: 2;
  }
`

export const ButtonContainer = styled.div`
  padding: 0 1rem;
`
export const SubmitButton = styled.button`
  ${typography.Heading.S}
  background-color: var(--color-blue);
  margin: 0 auto;
  display: block;
  padding: 0.5rem;
  width: 100%;
  border-radius: 5px;
  color: var(--color-white);

  @media ${DEVICE.tablet} {
    width: auto;
    flex: 1;
    padding: 0.5rem 2rem;
  }
`

export const FormResponseContainer = styled(FormContainer)`
  padding: 2rem 1rem;

  @media ${DEVICE.tablet} {
    padding: 5rem 1rem;
  }

  @media ${DEVICE.desktop} {
    padding: 2rem 1rem;
  }
`
export const FormResponseHeading = styled(HeadingM)`
  margin-bottom: 1rem;

  @media ${DEVICE.tablet} {
    margin-bottom: 2rem;
  }
`
export const FormResponseText = styled(TextL)`
  margin-bottom: 1rem;

  @media ${DEVICE.tablet} {
    margin-bottom: 2rem;
  }
`
export const FormResponseDl = styled.dl`
  border-top: 1px solid var(--color-border);
  padding-top: 1rem;

  @media ${DEVICE.tablet} {
    width: 60vw;
    margin: 0 auto;
    padding: 1rem 5rem;
    display: flex;
  }

  @media ${DEVICE.laptop} {
    padding: 1rem 20rem;
  }

  @media ${DEVICE.desktop} {
    padding: 1rem 5rem;
    width: 80%;
  }
`
export const FormResponseDt = styled(TextL).attrs({
  as: 'dt',
})`
  margin-bottom: 0.25rem;

  @media ${DEVICE.tablet} {
    width: 50%;
  }
`
export const FormResponseDd = styled(HeadingS).attrs({
  as: 'dd',
})`
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media ${DEVICE.tablet} {
    width: 50%;
  }
`
