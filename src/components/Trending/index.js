import {Component} from 'react'
import {Link} from 'react-router-dom'
import {HiFire} from 'react-icons/hi'
import {BsDot} from 'react-icons/bs'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'
import SlideBar from '../SlideBar'
import Context from '../../context/Context'

import {
  TrendingVideosContainer,
  TrendingBannerContainer,
  TrendingIconContainer,
  TrendingText,
  TrendingVideosListContainer,
  TrendingThumbnailItemContainer,
  TrendingThumbnailImage,
  TrendingChannelDescriptionContainer,
  TrendingVideoTitle,
  TrendingChannelNameAndViewsContainer,
  TrendingChannelText,
  TrendingChannelContainer,
  TrendingViewAndPublishContainer,
  SlideBarAndTrendingContainer,
  LoaderContainer,
  NoResultsContainer,
  FilterImage,
  NoResultsText,
  NoResultsPara,
  RetryButton,
} from './styleComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    trendingVideosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getTrendingVideosList()
  }

  onClickRetryButton = () => {
    this.setState(
      {apiStatus: apiStatusConstants.initial},
      this.getTrendingVideosList,
    )
  }

  getTrendingVideosList = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = 'https://apis.ccbp.in/videos/trending'
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
        channelName: eachItem.channel.name,
        channelProfile: eachItem.channel.profile_image_url,
        id: eachItem.id,
        publishedDate: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewsCount: eachItem.view_count,
      }))

      this.setState({
        trendingVideosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  trendingDetailsView = () => {
    const {trendingVideosList} = this.state
    return (
      <Context.Consumer>
        {value => {
          const {isDark} = value

          return (
            <>
              <TrendingBannerContainer isDark={isDark}>
                <TrendingIconContainer isDark={isDark}>
                  <HiFire size={30} color="#ff0000" />
                </TrendingIconContainer>
                <TrendingText isDark={isDark}>Trending</TrendingText>
              </TrendingBannerContainer>
              <TrendingVideosListContainer>
                {trendingVideosList.map(eachItem => (
                  <Link to={`/videos/${eachItem.id}`} className="linkItem">
                    <TrendingThumbnailItemContainer key={eachItem.id}>
                      <TrendingThumbnailImage
                        src={eachItem.thumbnailUrl}
                        alt="thumbnailImage"
                      />
                      <TrendingChannelDescriptionContainer>
                        <TrendingChannelContainer>
                          <TrendingVideoTitle isDark={isDark}>
                            {eachItem.title}
                          </TrendingVideoTitle>
                          <TrendingChannelNameAndViewsContainer>
                            <TrendingChannelText isDark={isDark}>
                              {eachItem.channelName}
                            </TrendingChannelText>

                            <TrendingViewAndPublishContainer>
                              <BsDot
                                color={isDark ? '#7e858e' : '#000000'}
                                size={25}
                              />
                              <TrendingChannelText isDark={isDark}>
                                {eachItem.viewsCount} views
                              </TrendingChannelText>
                            </TrendingViewAndPublishContainer>
                            <TrendingViewAndPublishContainer>
                              <BsDot
                                color={isDark ? '#7e858e' : '#000000'}
                                size={25}
                              />
                              <TrendingChannelText isDark={isDark}>
                                {formatDistanceToNow(
                                  new Date(eachItem.publishedDate),
                                )}{' '}
                                ago
                              </TrendingChannelText>
                            </TrendingViewAndPublishContainer>
                          </TrendingChannelNameAndViewsContainer>
                        </TrendingChannelContainer>
                      </TrendingChannelDescriptionContainer>
                    </TrendingThumbnailItemContainer>
                  </Link>
                ))}
              </TrendingVideosListContainer>
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
            <div data-testid="trending">
              <Header />
              <SlideBarAndTrendingContainer>
                <SlideBar />
                <TrendingVideosContainer isDark={isDark}>
                  {this.renderSpecificConditions()}
                </TrendingVideosContainer>
              </SlideBarAndTrendingContainer>
            </div>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Trending
