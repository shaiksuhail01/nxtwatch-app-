import {Component} from 'react'

import Header from '../Header'
import SlideBar from '../SlideBar'
import Context from '../../context/Context'

import {
  NoResultsContainer,
  NoResultsText,
  NoResultsPara,
  FilterImage,
  NotFoundContainer,
  SlideBarAndNotFoundContainer,
} from './styleComponents'

class NotFound extends Component {
  componentDidMount() {
    const {onClickChangeNavItem} = this.context
    onClickChangeNavItem('NotFound')
  }

  render() {
    return (
      <Context.Consumer>
        {value => {
          const {isDark} = value
          return (
            <>
              <Header />
              <SlideBarAndNotFoundContainer>
                <SlideBar />
                <NotFoundContainer isDark={isDark}>
                  <NoResultsContainer>
                    <FilterImage
                      src={
                        isDark
                          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                      }
                      alt="not found"
                    />
                    <NoResultsText isDark={isDark}>
                      Page Not Found
                    </NoResultsText>
                    <NoResultsPara>
                      We are sorry, the page you requested could not be found.
                    </NoResultsPara>
                  </NoResultsContainer>
                </NotFoundContainer>
              </SlideBarAndNotFoundContainer>
            </>
          )
        }}
      </Context.Consumer>
    )
  }
}

NotFound.contextType = Context

export default NotFound
