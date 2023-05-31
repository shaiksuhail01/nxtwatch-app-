import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'

import {HiFire} from 'react-icons/hi'

import {SiYoutubegaming} from 'react-icons/si'

import {CgPlayListAdd} from 'react-icons/cg'

import Context from '../../context/Context'

import {
  SlideBarContainer,
  NavItemsContainer,
  NavItem,
  MenuItemText,
  ContactusContainer,
  ContactHeading,
  SocialLinksContainer,
  SocialImages,
  SocialText,
} from './styleComponents'

const SlideBar = () => (
  <Context.Consumer>
    {value => {
      const {isDark, activeTab, onClickChangeNavItem} = value

      const onClickNavItem = activeName => {
        onClickChangeNavItem(activeName)
      }

      return (
        <SlideBarContainer isDark={isDark}>
          <div>
            <NavItemsContainer>
              <Link
                to="/"
                className="linkItem"
                onClick={() => {
                  onClickNavItem('Home')
                }}
              >
                <NavItem activeTab={activeTab === 'Home'}>
                  <AiFillHome
                    size={22}
                    color={activeTab === 'Home' ? '#ff0000' : '#7e858e'}
                  />
                  <MenuItemText activeTab={activeTab === 'Home'}>
                    Home
                  </MenuItemText>
                </NavItem>
              </Link>
              <Link
                to="/trending"
                className="linkItem"
                onClick={() => {
                  onClickNavItem('Trending')
                }}
              >
                <NavItem activeTab={activeTab === 'Trending'}>
                  <HiFire
                    size={22}
                    color={activeTab === 'Trending' ? '#ff0000' : '#7e858e'}
                  />
                  <MenuItemText activeTab={activeTab === 'Trending'}>
                    Trending
                  </MenuItemText>
                </NavItem>
              </Link>
              <Link
                to="/gaming"
                className="linkItem"
                onClick={() => {
                  onClickNavItem('Gaming')
                }}
              >
                <NavItem activeTab={activeTab === 'Gaming'}>
                  <SiYoutubegaming
                    size={22}
                    color={activeTab === 'Gaming' ? '#ff0000' : '#7e858e'}
                  />
                  <MenuItemText activeTab={activeTab === 'Gaming'}>
                    Gaming
                  </MenuItemText>
                </NavItem>
              </Link>
              <Link
                to="/saved-videos"
                className="linkItem"
                onClick={() => {
                  onClickNavItem('Saved')
                }}
              >
                <NavItem activeTab={activeTab === 'Saved'}>
                  <CgPlayListAdd
                    size={22}
                    color={activeTab === 'Saved' ? '#ff0000' : '#7e858e'}
                  />
                  <MenuItemText activeTab={activeTab === 'Saved'}>
                    Saved Videos
                  </MenuItemText>
                </NavItem>
              </Link>
            </NavItemsContainer>
            <ContactusContainer>
              <ContactHeading isDark={isDark}>CONTACT US</ContactHeading>
              <SocialLinksContainer>
                <SocialImages
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <SocialImages
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <SocialImages
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </SocialLinksContainer>
              <SocialText isDark={isDark}>
                Enjoy! Now to see your channels and recommendations!
              </SocialText>
            </ContactusContainer>
          </div>
        </SlideBarContainer>
      )
    }}
  </Context.Consumer>
)

export default SlideBar
