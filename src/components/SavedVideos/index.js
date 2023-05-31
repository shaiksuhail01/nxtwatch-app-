import {Component} from 'react'
import {Link} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'
import {formatDistanceToNow} from 'date-fns'
import {RiMovieLine} from 'react-icons/ri'
import Header from '../Header'
import SlideBar from '../SlideBar'
import Context from '../../context/Context'

import {
  SlideBarAndSavedContainer,
  SavedVideosContainer,
  NoSavedImage,
  NoResultsPara,
  NoResultsText,
  NoResultsContainer,
  SavedBannerContainer,
  SavedIconContainer,
  SavedText,
  VideosListContainer,
  ThumbnailItemContainer,
  ThumbnailImage,
  ChannelDescriptionContainer,
  ChannelImage,
  VideoTitle,
  ViewAndPublishContainer,
  ChannelContainer,
  ChannelText,
  ChannelNameAndViewsContainer,
  DivideContainer,
  ChannelTextHeading,
} from './styleComponents'

class SavedVideos extends Component {
  renderSavedVideosSpecificContainer = () => (
    <Context.Consumer>
      {value => {
        const {isDark, savedVideosList} = value
        return savedVideosList.length === 0 ? (
          <NoResultsContainer>
            <NoSavedImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <NoResultsText isDark={isDark}>No saved videos found</NoResultsText>
            <NoResultsPara isDark={isDark}>
              You can save your videos while watching them
            </NoResultsPara>
          </NoResultsContainer>
        ) : (
          <>
            <SavedBannerContainer isDark={isDark}>
              <SavedIconContainer isDark={isDark}>
                <RiMovieLine size={30} color="#ff0000" />
              </SavedIconContainer>
              <SavedText isDark={isDark}>Saved Videos</SavedText>
            </SavedBannerContainer>
            <VideosListContainer>
              {savedVideosList.map(eachItem => (
                <Link to={`/videos/${eachItem.id}`} className="linkItem">
                  <ThumbnailItemContainer key={eachItem.id}>
                    <ThumbnailImage
                      src={eachItem.thumbnailUrl}
                      alt="thumbnailImage"
                    />
                    <ChannelDescriptionContainer>
                      <ChannelImage
                        src={eachItem.channelProfile}
                        alt={eachItem.channelName}
                      />
                      <ChannelContainer>
                        <VideoTitle isDark={isDark}>
                          {eachItem.title}
                        </VideoTitle>
                        <ChannelNameAndViewsContainer>
                          <ChannelTextHeading isDark={isDark}>
                            {eachItem.channelName}
                          </ChannelTextHeading>
                          <DivideContainer>
                            <ViewAndPublishContainer>
                              <BsDot
                                color={isDark ? '#7e858e' : '#000000'}
                                size={25}
                              />
                              <ChannelText isDark={isDark}>
                                {eachItem.videoCount} views
                              </ChannelText>
                            </ViewAndPublishContainer>
                            <ViewAndPublishContainer>
                              <BsDot
                                color={isDark ? '#7e858e' : '#000000'}
                                size={25}
                              />
                              <ChannelText isDark={isDark}>
                                {formatDistanceToNow(
                                  new Date(eachItem.publishedAt),
                                )}{' '}
                                ago
                              </ChannelText>
                            </ViewAndPublishContainer>
                          </DivideContainer>
                        </ChannelNameAndViewsContainer>
                      </ChannelContainer>
                    </ChannelDescriptionContainer>
                  </ThumbnailItemContainer>
                </Link>
              ))}
            </VideosListContainer>
          </>
        )
      }}
    </Context.Consumer>
  )

  render() {
    return (
      <Context.Consumer>
        {value => {
          const {isDark} = value
          return (
            <div data-testid="savedVideos">
              <Header />
              <SlideBarAndSavedContainer>
                <SlideBar />
                <SavedVideosContainer isDark={isDark}>
                  {this.renderSavedVideosSpecificContainer()}
                </SavedVideosContainer>
              </SlideBarAndSavedContainer>
            </div>
          )
        }}
      </Context.Consumer>
    )
  }
}
export default SavedVideos
