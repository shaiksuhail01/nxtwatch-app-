import {Component} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {IoMdClose} from 'react-icons/io'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'
import Context from '../../context/Context'
import SlideBar from '../SlideBar'
import ThumbnailItem from '../ThumbnailItem'

import {
  BannerContainer,
  BannerItemsContainer,
  BannerLogoImage,
  BannerText,
  GetItButton,
  BannerCloseButton,
  HomeVideosContainer,
  InputContainer,
  SearchButton,
  SearchInput,
  LoaderContainer,
  VideosListContainer,
  NoResultsContainer,
  FilterImage,
  NoResultsText,
  NoResultsPara,
  RetryButton,
  SlideBarAndVideosContainer,
  MainContainer,
} from './styleComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    homeVideosList: [],
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
    bannerShow: true,
  }

  componentDidMount() {
    this.getHomeVideosList()
  }

  onClickBannerButton = () => {
    this.setState(prevState => ({bannerShow: !prevState.bannerShow}))
  }

  getHomeVideosList = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const {searchInput} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
        homeVideosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearchButton = () => {
    this.setState(
      {apiStatus: apiStatusConstants.initial},
      this.getHomeVideosList,
    )
  }

  onClickRetryButton = () => {
    this.setState(
      {apiStatus: apiStatusConstants.initial, searchInput: ''},
      this.getHomeVideosList,
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

  homeDetailsView = () => {
    const {homeVideosList} = this.state
    return (
      <Context.Consumer>
        {value => {
          const {isDark} = value
          return homeVideosList.length === 0 ? (
            <NoResultsContainer>
              <FilterImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                alt="no videos"
              />
              <NoResultsText isDark={isDark}>
                No Search results found
              </NoResultsText>
              <NoResultsPara>
                Try different key words or remove search filter
              </NoResultsPara>
              <RetryButton type="button" onClick={this.onClickRetryButton}>
                Retry
              </RetryButton>
            </NoResultsContainer>
          ) : (
            <VideosListContainer>
              {homeVideosList.map(eachItem => (
                <ThumbnailItem key={eachItem.id} thumbnailDetails={eachItem} />
              ))}
            </VideosListContainer>
          )
        }}
      </Context.Consumer>
    )
  }

  renderSpecificConditions = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.homeDetailsView()
      case apiStatusConstants.inProgress:
        return this.loadingView()
      case apiStatusConstants.failure:
        return this.failureView()
      default:
        return null
    }
  }

  render() {
    const {bannerShow, searchInput} = this.state
    return (
      <Context.Consumer>
        {value => {
          const {isDark} = value
          return (
            <div data-testid="home">
              <Header />
              <SlideBarAndVideosContainer>
                <SlideBar />
                <MainContainer>
                  <BannerContainer bannerShow={bannerShow}>
                    <BannerItemsContainer>
                      <BannerCloseButton
                        type="button"
                        onClick={this.onClickBannerButton}
                        data-testid="close"
                      >
                        <IoMdClose size={22} />
                      </BannerCloseButton>
                      <BannerLogoImage
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <BannerText>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </BannerText>
                      <GetItButton>GET IT NOW</GetItButton>
                    </BannerItemsContainer>
                  </BannerContainer>

                  <HomeVideosContainer isDark={isDark}>
                    <InputContainer>
                      <SearchInput
                        type="search"
                        placeholder="Search"
                        isDark={isDark}
                        onChange={this.onChangeSearchInput}
                        value={searchInput}
                      />

                      <SearchButton
                        type="button"
                        isDark={isDark}
                        data-testid="searchButton"
                        onClick={this.onClickSearchButton}
                      >
                        <AiOutlineSearch
                          size={19}
                          color={isDark ? '#e2e8f0' : '#606060'}
                        />
                      </SearchButton>
                    </InputContainer>

                    {this.renderSpecificConditions()}
                  </HomeVideosContainer>
                </MainContainer>
              </SlideBarAndVideosContainer>
            </div>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Home
