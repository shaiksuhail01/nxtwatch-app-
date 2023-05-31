import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  LoginContainer,
  LoginBoxContainer,
  LogoImage,
  FormContainer,
  InputContainer,
  LabelText,
  InputEl,
  CheckboxInput,
  CheckInputContainer,
  CheckLabelText,
  LoginButton,
  ErrorText,
} from './styleComponents'

import Context from '../../context/Context'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    type: 'password',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeShowPassword = event => {
    if (event.target.checked) {
      this.setState({type: 'text'})
    } else {
      this.setState({type: 'password'})
    }
  }

  render() {
    const {username, password, showSubmitError, errorMsg, type} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <Context.Consumer>
        {value => {
          const {isDark} = value
          return (
            <LoginContainer isDark={isDark}>
              <LoginBoxContainer isDark={isDark}>
                <LogoImage
                  src={
                    isDark
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                <FormContainer onSubmit={this.onSubmitForm}>
                  <InputContainer>
                    <LabelText htmlFor="username" isDark={isDark}>
                      USERNAME
                    </LabelText>
                    <InputEl
                      type="text"
                      placeholder="Username"
                      id="username"
                      isDark={isDark}
                      onChange={this.onChangeUsername}
                      value={username}
                    />
                  </InputContainer>
                  <InputContainer>
                    <LabelText htmlFor="password" isDark={isDark}>
                      PASSWORD
                    </LabelText>
                    <InputEl
                      type={type}
                      placeholder="Password"
                      id="password"
                      isDark={isDark}
                      onChange={this.onChangePassword}
                      value={password}
                    />
                  </InputContainer>
                  <CheckInputContainer>
                    <CheckboxInput
                      type="checkbox"
                      id="checkbox"
                      onChange={this.onChangeShowPassword}
                    />
                    <CheckLabelText htmlFor="checkbox" isDark={isDark}>
                      Show Password
                    </CheckLabelText>
                  </CheckInputContainer>
                  <LoginButton type="submit">Login</LoginButton>
                  {showSubmitError && <ErrorText>*{errorMsg}</ErrorText>}
                </FormContainer>
              </LoginBoxContainer>
            </LoginContainer>
          )
        }}
      </Context.Consumer>
    )
  }
}
export default Login
