import styled from 'styled-components'

export const TrendingVideosContainer = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  width: 100%;
`
export const TrendingBannerContainer = styled.div`
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
export const TrendingIconContainer = styled.div`
  background-color: ${props => (props.isDark ? '#000000' : ' #d7dfe9')};
  border-width: 0px;
  border-radius: 30px;
  padding-left: 13px;
  padding-right: 13px;
  padding-top: 10px;
  padding-bottom: 10px;
`
export const TrendingText = styled.h1`
  font-family: 'Roboto';
  font-size: 22px;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  font-weight: bold;
  padding-left: 13px;
`

export const TrendingVideosListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 0px;
`
export const TrendingThumbnailItemContainer = styled.li`
  list-style-type: none;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
  @media screen and (min-width: 576px) {
    flex-direction: row;
    margin-left: 14px;
    margin-bottom: 15px;
  }
  @media screen and (min-width: 1024px) {
    margin-left: 25px;
    margin-bottom: 25px;
  }
`

export const TrendingThumbnailImage = styled.img`
  width: 100%;
  @media screen and (min-width: 576px) {
    width: 260px;
  }
  @media screen and (min-width: 1024px) {
    width: 310px;
  }
`

export const TrendingChannelDescriptionContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 10px;
  margin-left: 12px;
`
export const TrendingChannelImage = styled.img`
  width: 40px;
`
export const TrendingVideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => (props.isDark ? '#ffffff' : '#231f20')};

  margin: 0px;

  font-weight: 500;
`
export const TrendingChannelNameAndViewsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`
export const TrendingChannelText = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? ' #cbd5e1' : '#1e293b')};
  font-size: 13px;
  font-weight: 500;
`
export const TrendingChannelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: 11px;
`
export const TrendingViewAndPublishContainer = styled.div`
  display: flex;
  align-items: center;
`
export const SlideBarAndTrendingContainer = styled.div`
  display: flex;
  flex-direction: row;
`
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
