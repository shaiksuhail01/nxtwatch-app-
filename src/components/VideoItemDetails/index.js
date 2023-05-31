import {Component} from 'react'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiDislike} from 'react-icons/bi'
import {CgPlayListAdd} from 'react-icons/cg'
import {BsDot} from 'react-icons/bs'

import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'
import SlideBar from '../SlideBar'
import Context from '../../context/Context'

import {
  LoaderContainer,
  NoResultsContainer,
  NoResultsText,
  NoResultsPara,
  RetryButton,
  FilterImage,
  SlideBarAndVideosContainer,
  VideosContainer,
  VideoItemContainer,
  ViewsAndButtonsContainer,
  VideoItemTitle,
  ViewsText,
  YearContainer,
  YearText,
  ViewsAndYearContainer,
  ButtonsContainer,
  ButtonItems,
  ButtonText,
  HorizontalLine,
  VideoChannelContainer,
  ChannelNameAndSubscriberContainer,
  VideoChannelName,
  VideoChannelImage,
  SubscribersText,
  VideoDescription,
} from './styleComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const savedItemExits = JSON.parse(
  localStorage.getItem(window.location.pathname),
)
if (savedItemExits === null) {
  localStorage.setItem(window.location.pathname, JSON.stringify(false))
}

class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    apiStatus: apiStatusConstants.initial,
    like: false,
    disLike: false,
    saved: JSON.parse(localStorage.getItem(window.location.pathname)),
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  onClickRetryButton = () => {
    this.setState({apiStatus: apiStatusConstants.initial}, this.getVideoDetails)
  }

  getVideoDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()

      const updatedData = {
        channelName: fetchedData.video_details.channel.name,
        channelProfile: fetchedData.video_details.channel.profile_image_url,
        channelSubscribers: fetchedData.video_details.channel.subscriber_count,
        description: fetchedData.video_details.description,
        id: fetchedData.video_details.id,
        publishedAt: fetchedData.video_details.published_at,
        thumbnailUrl: fetchedData.video_details.thumbnail_url,
        title: fetchedData.video_details.title,
        videoUrl: fetchedData.video_details.video_url,
        videoCount: fetchedData.video_details.view_count,
      }

      this.setState({
        videoDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
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

  videosDetailsView = () => (
    <Context.Consumer>
      {value => {
        const {isDark, onClickSaved, onClickRemoveSave} = value
        const {videoDetails} = this.state

        const {
          channelName,
          channelProfile,
          channelSubscribers,
          description,
          publishedAt,
          title,
          id,
          videoUrl,
          videoCount,
        } = videoDetails
        const {like, disLike, saved} = this.state

        localStorage.setItem(window.location.pathname, JSON.stringify(saved))

        const onClickLikeButton = () => {
          this.setState(prevState => ({like: !prevState.like}))
          if (disLike === true) {
            this.setState(prevState => ({disLike: !prevState.disLike}))
          }
        }

        const onClickDislikeButton = () => {
          this.setState(prevState => ({disLike: !prevState.disLike}))
          if (like === true) {
            this.setState(prevState => ({like: !prevState.like}))
          }
        }

        const updateLocalStorage = () => {
          const getSavedItem = JSON.parse(
            localStorage.getItem(window.location.pathname),
          )
          console.log(getSavedItem)
          if (getSavedItem === true) {
            onClickSaved(videoDetails)
          } else {
            onClickRemoveSave(id)
          }
        }

        const onClickSaveButton = () => {
          this.setState(
            prevState => ({saved: !prevState.saved}),
            updateLocalStorage,
          )
        }

        return (
          <>
            <VideoItemContainer>
              <ReactPlayer url={videoUrl} width="100%" height="100%" />
            </VideoItemContainer>
            <VideoItemTitle isDark={isDark}>{title}</VideoItemTitle>
            <ViewsAndButtonsContainer>
              <ViewsAndYearContainer>
                <ViewsText isDark={isDark}>{videoCount} views</ViewsText>
                <YearContainer>
                  <BsDot color={isDark ? '#7e858e' : '#000000'} size={25} />
                  <YearText isDark={isDark}>
                    {formatDistanceToNow(new Date(publishedAt))} ago
                  </YearText>
                </YearContainer>
              </ViewsAndYearContainer>
              <ButtonsContainer>
                <ButtonItems type="button" onClick={onClickLikeButton}>
                  <ButtonsContainer>
                    <BiLike color={like ? '#3b82f6' : '#475569'} size={23} />
                    <ButtonText isActive={like === true}>Like</ButtonText>
                  </ButtonsContainer>
                </ButtonItems>
                <ButtonItems type="button" onClick={onClickDislikeButton}>
                  <ButtonsContainer>
                    <BiDislike
                      color={disLike ? '#3b82f6' : '#475569'}
                      size={23}
                    />
                    <ButtonText isActive={disLike === true}>Dislike</ButtonText>
                  </ButtonsContainer>
                </ButtonItems>
                <ButtonItems type="button" onClick={onClickSaveButton}>
                  <ButtonsContainer>
                    <CgPlayListAdd
                      color={saved === true ? '#3b82f6' : '#475569'}
                      size={23}
                    />
                    <ButtonText isActive={saved === true}>
                      {saved === true ? 'Saved' : 'Save'}
                    </ButtonText>
                  </ButtonsContainer>
                </ButtonItems>
              </ButtonsContainer>
            </ViewsAndButtonsContainer>
            <HorizontalLine isDark={isDark} />
            <VideoChannelContainer>
              <VideoChannelImage src={channelProfile} alt={channelName} />
              <ChannelNameAndSubscriberContainer>
                <VideoChannelName isDark={isDark}>
                  {channelName}
                </VideoChannelName>
                <SubscribersText isDark={isDark}>
                  {channelSubscribers} subscribers
                </SubscribersText>
              </ChannelNameAndSubscriberContainer>
            </VideoChannelContainer>
            <VideoDescription isDark={isDark}>{description}</VideoDescription>
          </>
        )
      }}
    </Context.Consumer>
  )

  renderSpecificConditions = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.videosDetailsView()
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
            <div data-testid="videoItemDetails">
              <Header />
              <SlideBarAndVideosContainer>
                <SlideBar />
                <VideosContainer isDark={isDark}>
                  {this.renderSpecificConditions()}
                </VideosContainer>
              </SlideBarAndVideosContainer>
            </div>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default VideoItemDetails
