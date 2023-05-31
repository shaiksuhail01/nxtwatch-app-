import styled from 'styled-components'

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  @media screen and (min-width: 1024px) {
    height: 60vh;
  }
`

export const NoResultsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 70vh;
  @media screen and (min-width: 1024px) {
    height: 60vh;
  }
`

export const NoResultsText = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#ffffff' : '#1e293b')};
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
`

export const NoResultsPara = styled.p`
  font-family: 'Roboto';
  color: #94a3b8;
  font-size: 17px;
  font-weight: 500;
  text-align: center;
  margin: 0px;
`

export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  font-weight: bold;
  border-width: 0px;
  border-radius: 2px;
  padding-left: 22px;
  padding-right: 22px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 13px;
  cursor: pointer;
  outline: none;
`
export const FilterImage = styled.img`
  width: 220px;
  @media screen and (min-width: 768px) {
    width: 280px;
  }
`
export const SlideBarAndVideosContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const VideosContainer = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  width: 100%;
`
export const VideoItemContainer = styled.div`
  height: 260px;
  width: 100%;
  @media screen and (min-width: 768px) {
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 18px;
    margin-bottom: 20px;
    height: 260px;
    width: 95%;
  }
  @media screen and (min-width: 1024px) {
    height: 440px;
  }
`
export const ViewsAndButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`
export const VideoItemTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: ${props => (props.isDark ? '#ffffff' : '#1e293b')};
  padding-left: 13px;
  padding-right: 13px;
  @media screen and (min-width: 768px) {
    padding-left: 20px;
  }
`
export const ViewsAndYearContainer = styled.div`
  display: flex;
  align-items: center;
`
export const ViewsText = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 500;
  color: ${props => (props.isDark ? '#94a3b8' : '#475569')};
  padding-left: 13px;
  @media screen and (min-width: 768px) {
    padding-left: 20px;
  }
`
export const YearContainer = styled.div`
  display: flex;
  align-items: center;
`
export const YearText = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#94a3b8' : '#475569')};
  font-size: 13px;
  font-weight: 500;
`
export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin-right: 8px;
  }
`
export const ButtonItems = styled.button`
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
  outline: none;
  margin-right: 7px;
`
export const ButtonText = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isActive ? '#3b82f6' : '#475569')};
  padding-left: 5px;
  font-weight: 500;
  font-size: 16px;
`
export const HorizontalLine = styled.hr`
  background-color: ${props => (props.isDark ? '#3b82f6' : '#475569')};
`
export const VideoChannelContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-left: 12px;
  margin-top: 20px;
`
export const ChannelNameAndSubscriberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 12px;
`
export const VideoChannelImage = styled.img`
  width: 60px;
`
export const VideoChannelName = styled.h1`
  font-family: 'Roboto';
  font-size: 17px;
  font-weight: 500;
  color: ${props => (props.isDark ? '#f1f1f1' : '#1e293b')};
  margin: 0px;
  margin-bottom: 9px;
  margin-top: 5px;
`
export const SubscribersText = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.isDark ? '#94a3b8' : '#475569')};
  margin: 0px;
  font-weight: 500;
`
export const VideoDescription = styled.p`
  font-family: 'Roboto';
  font-size: 14px;

  color: ${props => (props.isDark ? '#f1f1f1' : '#1e293b')};
  padding-left: 13px;
  @media screen and (min-width: 768px) {
    padding-left: 81px;
  }
`
