import styled from 'styled-components'

export const SlideBarAndGamingContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const GamingVideosContainer = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  width: 100%;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  @media screen and (min-width: 1024px) {
    height: 70vh;
  }
`
export const GamingBannerContainer = styled.div`
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

export const GamingIconContainer = styled.div`
  background-color: ${props => (props.isDark ? '#000000' : ' #d7dfe9')};
  border-width: 0px;
  border-radius: 30px;
  padding-left: 13px;
  padding-right: 13px;
  padding-top: 10px;
  padding-bottom: 10px;
`
export const GamingText = styled.h1`
  font-family: 'Roboto';
  font-size: 22px;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  font-weight: bold;
  padding-left: 13px;
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
export const GamingVideosListContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 24px;
  margin-left: 22px;
  @media screen and (min-width: 1024px) {
    margin-left: 30px;
    margin-top: 28px;
  }
`

export const GamingListItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 18px;
  margin-bottom: 22px;
  width: 150px;
  @media screen and (min-width: 1024px) {
    width: 220px;
    margin-bottom: 33px;
  }
`
export const GameImageUrl = styled.img`
  width: 150px;
`
export const GamingTitle = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? ' #cbd5e1' : '#1e293b')};
  font-size: 16px;
  font-weight: bold;
`
export const GamingPara = styled.p`
  font-family: 'Roboto';
  color: #475569;
  font-size: 14px;
  font-weight: bold;
  margin: 0px;
`
