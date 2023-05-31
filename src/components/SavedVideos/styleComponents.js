import styled from 'styled-components'

export const SlideBarAndSavedContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const SavedVideosContainer = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  width: 100%;
`

export const NoResultsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 70vh;
  padding-left: 6px;
  padding-right: 6px;
  @media screen and (min-width: 1024px) {
    height: 90vh;
  }
`

export const NoResultsText = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#ffffff' : '#1e293b')};
  font-size: 27px;
  font-weight: bold;
  text-align: center;
  margin-top: 22px;
`

export const NoResultsPara = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#ebebeb' : '#475569')};
  font-size: 17px;
  font-weight: 500;
  text-align: center;
  margin: 0px;
`
export const NoSavedImage = styled.img`
  width: 310px;
  @media screen and (min-width: 768px) {
    width: 430px;
  }
`
export const SavedBannerContainer = styled.div`
  background-color: ${props => (props.isDark ? '#181818' : ' #ebebeb')};
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const SavedIconContainer = styled.div`
  background-color: ${props => (props.isDark ? '#000000' : ' #d7dfe9')};
  border-width: 0px;
  border-radius: 30px;
  padding-left: 13px;
  padding-right: 13px;
  padding-top: 10px;
  padding-bottom: 10px;
`
export const SavedText = styled.h1`
  font-family: 'Roboto';
  font-size: 22px;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  font-weight: bold;
  padding-left: 13px;
`
export const VideosListContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-left: 0px;
  @media screen and (min-width: 576px) {
    margin-left: 28px;
    margin-top: 35px;
  }
  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
  @media screen and (min-width: 1024px) {
    margin-left: 40px;
  }
`
export const ThumbnailItemContainer = styled.li`
  list-style-type: none;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width:100%
  margin-bottom:7px;
  @media screen and (min-width:768px){
      flex-direction:row;
  }
`
export const ThumbnailImage = styled.img`
  width: 360px;
  height: 200px;
  margin-bottom: 23px;
  @media screen and (min-width: 576px) {
    width: 420px;
    height: 240px;
  }
  @media screen and (min-width: 768px) {
    width: 320px;
    height: 200px;
  }
  @media screen and (min-width: 1024px) {
    width: 420px;
    height: 240px;
  }
`
export const ChannelDescriptionContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 10px;
`

export const ChannelImage = styled.img`
  width: 40px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => (props.isDark ? '#ffffff' : '#231f20')};

  margin: 0px;
  padding-left: 12px;
  font-weight: 500;
`

export const ChannelNameAndViewsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
export const ChannelText = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? ' #cbd5e1' : '#1e293b')};
  font-size: 13px;
  font-weight: 500;
`
export const ChannelTextHeading = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? ' #cbd5e1' : '#1e293b')};
  font-size: 13px;
  font-weight: 500;
  padding-left: 12px;
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
export const DivideContainer = styled.div`
  display: flex;
  flex-direction: row;
`
