import styled from 'styled-components'

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 100%;
  display: ${props => (props.bannerShow ? 'flex' : 'none')};
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding: 24px;
`

export const BannerItemsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
`
export const BannerLogoImage = styled.img`
  width: 120px;
`
export const BannerText = styled.p`
  font-family: 'Roboto';
  font-size: 19px;
  color: #475569;
  margin: 0px;
  margin-top: 27px;
  font-weight: 500;
  margin-bottom: 15px;
`
export const GetItButton = styled.button`
  background-color: transparent;
  border-width: 1px;
  border-style: solid;
  border-color: #181818;
  font-family: 'Roboto';
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 9px;
  padding-bottom: 9px;
  color: #1e293b;
  font-weight: bold;
  margin-top: 15px;
  cursor: pointer;
  outline: none;
`
export const BannerCloseButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  align-self: flex-end;
  cursor: pointer;
  outline: none;
`

export const HomeVideosContainer = styled.div`
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  padding: 20px;
  width: 100%;
`
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`
export const SearchInput = styled.input`
  padding-left: 13px;
  padding-top: 6px;
  padding-bottom: 6px;
  border-width: 1px;
  border-color: #64748b;
  outline: none;
  font-family: 'Roboto';
  font-size: 16px;
  padding-right: 10px;
  width: 100%;
  border-style: solid;
  color: #7e858e;
  background-color: ${props => (props.isDark ? '#181818' : '')};
  @media screen and (min-width: 576px) {
    width: 375px;
  }
`

export const SearchButton = styled.button`
  border-width: 0px;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  background-color: ${props => (props.isDark ? '#424242' : '#ebebeb')};
  border-width: 1px;
  border-style: solid;
  border-color: #64748b;
  padding-top: 5px;
  padding-bottom: 4px;
  padding-left: 19px;
  padding-right: 19px;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  @media screen and (min-width: 1024px) {
    height: 60vh;
  }
`

export const VideosListContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-left: 0px;
`

export const NoResultsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 60vh;
`
export const FilterImage = styled.img`
  width: 220px;
  @media screen and (min-width: 768px) {
    width: 280px;
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

export const SlideBarAndVideosContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const MainContainer = styled.div`
  width: 100%;
`
