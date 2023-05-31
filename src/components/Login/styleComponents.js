import styled from 'styled-components'

export const LoginContainer = styled.div`
  background-color: ${props => (props.isDark ? ' #212121' : '#f9f9f9')};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const LoginBoxContainer = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#ffffff')};
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 30px;
  padding-bottom: 30px;
  width: 330px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
  border-radius: 7px;
  @media screen and (min-width: 768px) {
    width: 360px;
  }
`
export const LogoImage = styled.img`
  width: 130px;
  align-self: center;
  margin-bottom: 35px;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
`
export const LabelText = styled.label`
  font-family: 'Roboto';
  font-weight: bold;
  color: ${props => (props.isDark ? '#f4f4f4' : '#475569')};
  font-size: 14px;
  margin-bottom: 9px;
`
export const InputEl = styled.input`
  background-color: transparent;
  font-family: 'Roboto';
  border-width: 1px;
  border-style: solid;
  border-color: ${props => (props.isDark ? '#cbd5e1' : '#d7dfe9')};
  padding-left: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 280px;
  border-radius: 3px;
  font-weight: 500;
  font-size: 15px;
  outline: none;
  color: #94a3b8;
  margin-bottom: 21px;
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`

export const CheckInputContainer = styled.div`
  display: flex;
  align-items: center;
`
export const CheckboxInput = styled.input`
  width: 18px;
  height: 18px;
  margin-bottom: 25px;
  cursor: pointer;
  outline: none;
`
export const CheckLabelText = styled.label`
  font-family: 'Roboto';
  font-weight: 500;
  color: ${props => (props.isDark ? '#f4f4f4' : '#212121')};
  font-size: 16px;
  margin-left: 5px;
  margin-bottom: 24px;
  cursor: pointer;
  outline: none;
`
export const LoginButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 500;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-width: 0px;
  border-radius: 8px;
  align-self: center;
  width: 100%;
  font-size: 16px;
  cursor: pointer;
  outline: none;
`
export const ErrorText = styled.p`
  font-family: 'Roboto';
  color: #ff0b37;
  font-size: 15px;
  margin: 0px;
  margin-top: 10px;
`
