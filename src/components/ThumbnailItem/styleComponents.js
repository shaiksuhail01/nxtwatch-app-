import styled from 'styled-components'

export const ThumbnailItemContainer = styled.li`
  list-style-type: none;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  margin-bottom: 7px;
  @media screen and (min-width: 768px) {
    width: 240px;
    margin-right: 7px;
  }
  @media screen and (min-width: 1024px) {
    width: 310px;
    margin-right: 10px;
  }
`

export const ThumbnailImage = styled.img`
  width: 100%;
`

export const ChannelDescriptionContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 10px;
`
export const ChannelImage = styled.img`
  width: 40px;
`
export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => (props.isDark ? '#ffffff' : '#231f20')};

  margin: 0px;

  font-weight: 500;
`
export const ChannelNameAndViewsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`
export const ChannelText = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? ' #cbd5e1' : '#1e293b')};
  font-size: 13px;
  font-weight: 500;
`
export const ChannelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`
export const ViewAndPublishContainer = styled.div`
  display: flex;
  align-items: center;
`
