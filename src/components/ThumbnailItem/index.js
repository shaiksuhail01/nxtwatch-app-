import {BsDot} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

import Context from '../../context/Context'

import {
  ThumbnailItemContainer,
  ThumbnailImage,
  ChannelDescriptionContainer,
  ChannelImage,
  VideoTitle,
  ChannelNameAndViewsContainer,
  ChannelText,
  ChannelContainer,
  ViewAndPublishContainer,
} from './styleComponents'

const ThumbnailItem = props => {
  const {thumbnailDetails} = props
  const {
    channelName,
    channelProfile,
    id,
    publishedDate,
    thumbnailUrl,
    title,
    viewsCount,
  } = thumbnailDetails
  return (
    <Context.Consumer>
      {value => {
        const {isDark} = value
        return (
          <Link to={`/videos/${id}`} className="linkItem">
            <ThumbnailItemContainer>
              <ThumbnailImage src={thumbnailUrl} alt="thumbnailImage" />
              <ChannelDescriptionContainer>
                <ChannelImage src={channelProfile} alt={channelName} />
                <ChannelContainer>
                  <VideoTitle isDark={isDark}>{title}</VideoTitle>
                  <ChannelNameAndViewsContainer>
                    <ChannelText isDark={isDark}>{channelName}</ChannelText>
                    <ViewAndPublishContainer>
                      <BsDot color={isDark ? '#7e858e' : '#000000'} size={25} />
                      <ChannelText isDark={isDark}>
                        {viewsCount} views
                      </ChannelText>
                    </ViewAndPublishContainer>
                    <ViewAndPublishContainer>
                      <BsDot color={isDark ? '#7e858e' : '#000000'} size={25} />
                      <ChannelText isDark={isDark}>
                        {formatDistanceToNow(new Date(publishedDate))} ago
                      </ChannelText>
                    </ViewAndPublishContainer>
                  </ChannelNameAndViewsContainer>
                </ChannelContainer>
              </ChannelDescriptionContainer>
            </ThumbnailItemContainer>
          </Link>
        )
      }}
    </Context.Consumer>
  )
}

export default ThumbnailItem
