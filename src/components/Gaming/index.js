import {Component} from 'react'
import {Link} from 'react-router-dom'
import {SiYoutubegaming} from 'react-icons/si'
import Loader from 'react-loader-spinner'

import Cookies from 'js-cookie'
import Header from '../Header'
import SlideBar from '../SlideBar'
import Context from '../../context/Context'

import {
  SlideBarAndGamingContainer,
  GamingVideosContainer,
  LoaderContainer,
  GamingBannerContainer,
  GamingIconContainer,
  GamingText,
  NoResultsContainer,
  FilterImage,
  NoResultsText,
  NoResultsPara,
  RetryButton,
  GamingVideosListContainer,
  GamingListItem,
  GameImageUrl,
  GamingTitle,
  GamingPara,
} from './styleComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    gamingVideosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getGamingVideosList()
  }

  getGamingVideosList = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()

      const updatedData = fetchedData.videos.map(eachItem => ({
        id: eachItem.id,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewsCount: eachItem.view_count,
      }))

      this.setState({
        gamingVideosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onClickRetryButton = () => {
    this.setState(
      {apiStatus: apiStatusConstants.initial},
      this.getGamingVideosList,
    )
  }

  failureView = () => (
    <Context.Consumer>
      {value => {
        const {isDark} = value
        return (
          <NoResultsContainer>
            <FilterImage
              src={
                isDark
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
              alt="failure"
            />
            <NoResultsText isDark={isDark}>
              Oops! Something Went Wrong
            </NoResultsText>
            <NoResultsPara>
              We are having some trouble to complete your request. Please try
              again.
            </NoResultsPara>
            <RetryButton type="button" onClick={this.onClickRetryButton}>
              Retry
            </RetryButton>
          </NoResultsContainer>
        )
      }}
    </Context.Consumer>
  )

  trendingDetailsView = () => {
    const {gamingVideosList} = this.state
    return (
      <Context.Consumer>
        {value => {
          const {isDark} = value
          return (
            <>
              <GamingBannerContainer isDark={isDark}>
                <GamingIconContainer isDark={isDark}>
                  <SiYoutubegaming size={30} color="#ff0000" />
                </GamingIconContainer>
                <GamingText isDark={isDark}>Gaming</GamingText>
              </GamingBannerContainer>
              <GamingVideosListContainer>
                {gamingVideosList.map(eachItem => (
                  <Link to={`/videos/${eachItem.id}`} className="linkItem">
                    <GamingListItem key={eachItem.id}>
                      <GameImageUrl src={eachItem.thumbnailUrl} />
                      <GamingTitle isDark={isDark}>
                        {eachItem.title}
                      </GamingTitle>
                      <GamingPara>
                        {eachItem.viewsCount} Watching Worldwide
                      </GamingPara>
                    </GamingListItem>
                  </Link>
                ))}
              </GamingVideosListContainer>
            </>
          )
        }}
      </Context.Consumer>
    )
  }

  loadingView = () => (
    <Context.Consumer>
      {value => {
        const {isDark} = value
        return (
          <LoaderContainer data-testid="loader">
            <Loader
              type="ThreeDots"
              color={isDark ? '#ffffff' : '#3b82f6'}
              height="50"
              width="50"
            />
          </LoaderContainer>
        )
      }}
    </Context.Consumer>
  )

  renderSpecificConditions = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.trendingDetailsView()
      case apiStatusConstants.inProgress:
        return this.loadingView()
      case apiStatusConstants.failure:
        return this.failureView()
      default:
        return null
    }
  }

  render() {
    return (
      <Context.Consumer>
        {value => {
          const {isDark} = value
          return (
            <div data-testid="gaming">
              <Header />
              <SlideBarAndGamingContainer>
                <SlideBar />
                <GamingVideosContainer isDark={isDark}>
                  {this.renderSpecificConditions()}
                </GamingVideosContainer>
              </SlideBarAndGamingContainer>
            </div>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Gaming
