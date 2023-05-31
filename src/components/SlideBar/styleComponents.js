import styled from 'styled-components'

export const SlideBarContainer = styled.div`
  background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`
export const NavItemsContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  margin-bottom: 240px;
  @media screen and (min-width: 1024px) {
    margin-bottom: 150px;
  }
`
export const NavItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  background-color: ${props => (props.activeTab ? '#cbd5e1' : 'transparent')};
`
export const MenuItemText = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => (props.activeTab ? '#181818' : '#616e7c')};
  font-weight: ${props => (props.activeTab ? 'bold' : '500')};
  margin: 0px;
  margin: 10px;
  padding-top: 4px;
  padding-left: 10px;
`

export const ContactusContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 20px;
`
export const ContactHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: bold;
  color: ${props => (props.isDark ? '#ffffff' : '#1e293b')};
  margin-bottom: 20px;
`

export const SocialLinksContainer = styled.div`
  display: flex;
  align-items: flex-start;
`
export const SocialImages = styled.img`
  width: 30px;
  margin-right: 10px;
`

export const SocialText = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => (props.isDark ? '#ffffff' : '#1e293b')};
  font-weight: bold;
  margin-top: 26px;
`
