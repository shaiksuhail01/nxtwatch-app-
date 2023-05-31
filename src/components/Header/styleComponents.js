import styled from 'styled-components'

export const HeaderContainer = styled.div`
  background-color: ${props => (props.isDark ? ' #212121' : '#ffffff')};
  display: flex;
  align-items: center;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 20px;
  padding-bottom: 20px;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const HeaderLogo = styled.img`
  width: 100px;
`
export const NavItemsContainer = styled.div`
  display: flex;
  align-items: center;
`
export const NavItemsContainerBig = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 576px) {
    display: none;
  }
`
export const HeaderLargeLogo = styled.img`
  width: 100px;
`
export const HeaderContainerLarge = styled.div`
  background-color: ${props => (props.isDark ? ' #212121' : '#ffffff')};
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 20px;
  padding-bottom: 20px;
  justify-content: space-between;
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`

export const ProfileImg = styled.img`
  width: 30px;
  margin-right: 20px;
`
export const LogoutButton = styled.button`
  background-color: transparent;
  font-family: 'Roboto';
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 5px;
  padding-bottom: 5px;
  cursor: pointer;
  outline: none;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => (props.isDark ? '#ffffff' : ' #3b82f6')};
  color: ${props => (props.isDark ? '#ffffff' : ' #3b82f6')};
  font-weight: 500;
  border-radius: 3px;
`
export const PopupContainer = styled.div`
  background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};
  border-radius: 8px;
  padding-left: 31px;
  padding-right: 31px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
  padding-bottom: 35px;
  padding-top: 18px;
`
export const WarningText = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => (props.isDark ? '#ffffff' : '#00306e')};
  text-align: center;
`
export const LogoutButtonSmall = styled.button`
  border-width: 0px;
  background-color: transparent;
`
export const MenuButton = styled.button`
  border-width: 0px;
  background-color: transparent;
`
export const MenuPopupContainer = styled.div`
  background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`
export const CloseButton = styled.button`
  border-width: 0px;
  background-color: transparent;
  margin-right: 20px;
  line-height: 12px;
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 18px;
`
export const MenuItemContainer = styled.div`
  display: flex;
  align-items: center;

  width: 360px;
  background-color: ${props => (props.activeTab ? '#cbd5e1' : 'transparent')};
  padding-left: 100px;
  padding-right: 60px;
`
export const MenuItemText = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => (props.activeTab ? '#181818' : '#616e7c')};
  font-weight: ${props => (props.activeTab ? 'bold' : '500')};
  margin: 0px;
  margin: 10px;
  padding-top: 4px;
  padding-left: 10px;
`
