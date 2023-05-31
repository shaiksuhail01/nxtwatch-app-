import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {IoMdClose} from 'react-icons/io'
import {FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'

import {AiFillHome} from 'react-icons/ai'

import {HiFire} from 'react-icons/hi'

import {SiYoutubegaming} from 'react-icons/si'

import {CgPlayListAdd} from 'react-icons/cg'

import Popup from 'reactjs-popup'

import {
  HeaderContainer,
  HeaderLogo,
  NavItemsContainer,
  NavItemsContainerBig,
  HeaderLargeLogo,
  HeaderContainerLarge,
  ProfileImg,
  LogoutButton,
  PopupContainer,
  LogoutButtonSmall,
  WarningText,
  MenuButton,
  MenuPopupContainer,
  CloseButton,
  MenuItemContainer,
  MenuItemText,
} from './styleComponents'
import './index.css'
import Context from '../../context/Context'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <Context.Consumer>
      {value => {
        const {
          isDark,
          onClickChangeTheme,
          activeTab,
          onClickChangeNavItem,
        } = value

        const onClickChange = () => {
          onClickChangeTheme()
        }

        const onClickNavItem = activeName => {
          onClickChangeNavItem(activeName)
        }

        return (
          <>
            <HeaderContainer isDark={isDark}>
              <Link
                to="/"
                onClick={() => {
                  onClickNavItem('Home')
                }}
              >
                <HeaderLogo
                  src={
                    isDark
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="logo"
                />
              </Link>
              <NavItemsContainer>
                {isDark ? (
                  <button
                    type="button"
                    className="darkLightButtons"
                    onClick={onClickChange}
                    data-testid="theme"
                  >
                    <BsBrightnessHigh
                      size={27}
                      className="icons"
                      color="#ffffff"
                    />
                  </button>
                ) : (
                  <button
                    type="button"
                    className="darkLightButtons"
                    onClick={onClickChange}
                  >
                    <BsMoon size={27} className="icons" />
                  </button>
                )}

                <Popup
                  modal
                  trigger={
                    <MenuButton type="button" isDark={isDark}>
                      {isDark ? (
                        <GiHamburgerMenu
                          size={27}
                          className="icons"
                          color="#ffffff"
                        />
                      ) : (
                        <GiHamburgerMenu size={27} className="icons" />
                      )}
                    </MenuButton>
                  }
                >
                  {close => (
                    <MenuPopupContainer isDark={isDark}>
                      <CloseButton type="button" onClick={() => close()}>
                        {isDark ? (
                          <IoMdClose size={30} color="#ffffff" />
                        ) : (
                          <IoMdClose size={30} />
                        )}
                      </CloseButton>

                      <Link
                        to="/"
                        className="linkItem"
                        onClick={() => {
                          onClickNavItem('Home')
                        }}
                      >
                        <MenuItemContainer activeTab={activeTab === 'Home'}>
                          <AiFillHome
                            size={26}
                            color={activeTab === 'Home' ? '#ff0000' : '#7e858e'}
                          />
                          <MenuItemText activeTab={activeTab === 'Home'}>
                            Home
                          </MenuItemText>
                        </MenuItemContainer>
                      </Link>
                      <Link
                        to="/trending"
                        className="linkItem"
                        onClick={() => {
                          onClickNavItem('Trending')
                        }}
                      >
                        <MenuItemContainer activeTab={activeTab === 'Trending'}>
                          <HiFire
                            size={26}
                            color={
                              activeTab === 'Trending' ? '#ff0000' : '#7e858e'
                            }
                          />
                          <MenuItemText activeTab={activeTab === 'Trending'}>
                            Trending
                          </MenuItemText>
                        </MenuItemContainer>
                      </Link>
                      <Link
                        to="/gaming"
                        className="linkItem"
                        onClick={() => {
                          onClickNavItem('Gaming')
                        }}
                      >
                        <MenuItemContainer activeTab={activeTab === 'Gaming'}>
                          <SiYoutubegaming
                            size={26}
                            color={
                              activeTab === 'Gaming' ? '#ff0000' : '#7e858e'
                            }
                          />
                          <MenuItemText activeTab={activeTab === 'Gaming'}>
                            Gaming
                          </MenuItemText>
                        </MenuItemContainer>
                      </Link>
                      <Link
                        to="/saved-videos"
                        className="linkItem"
                        onClick={() => {
                          onClickNavItem('Saved')
                        }}
                      >
                        <MenuItemContainer activeTab={activeTab === 'Saved'}>
                          <CgPlayListAdd
                            size={26}
                            color={
                              activeTab === 'Saved' ? '#ff0000' : '#7e858e'
                            }
                          />
                          <MenuItemText activeTab={activeTab === 'Saved'}>
                            Saved Videos
                          </MenuItemText>
                        </MenuItemContainer>
                      </Link>
                    </MenuPopupContainer>
                  )}
                </Popup>

                <Popup
                  modal
                  trigger={
                    <LogoutButtonSmall type="button" isDark={isDark}>
                      {isDark ? (
                        <FiLogOut size={27} className="icons" color="#ffffff" />
                      ) : (
                        <FiLogOut size={27} className="icons" />
                      )}
                    </LogoutButtonSmall>
                  }
                >
                  {close => (
                    <PopupContainer isDark={isDark}>
                      <WarningText isDark={isDark}>
                        Are you sure,you want to logout?
                      </WarningText>
                      <div className="buttonsContainer">
                        <button
                          type="button"
                          className="cancelButton"
                          onClick={() => close()}
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          className="confirmButton"
                          onClick={onClickLogout}
                        >
                          Confirm
                        </button>
                      </div>
                    </PopupContainer>
                  )}
                </Popup>
              </NavItemsContainer>
            </HeaderContainer>
            <HeaderContainerLarge isDark={isDark}>
              <Link
                to="/"
                onClick={() => {
                  onClickNavItem('Home')
                }}
              >
                <HeaderLargeLogo
                  src={
                    isDark
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="logo"
                />
              </Link>
              <NavItemsContainerBig>
                {isDark ? (
                  <button
                    type="button"
                    className="darkLightButtons"
                    onClick={onClickChange}
                    data-testid="theme"
                  >
                    <BsBrightnessHigh
                      size={27}
                      className="icons"
                      color="#ffffff"
                    />
                  </button>
                ) : (
                  <button
                    type="button"
                    className="darkLightButtons"
                    onClick={onClickChange}
                  >
                    <BsMoon size={27} className="icons" />
                  </button>
                )}

                <ProfileImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />

                <Popup
                  modal
                  trigger={
                    <LogoutButton type="button" isDark={isDark}>
                      Logout
                    </LogoutButton>
                  }
                >
                  {close => (
                    <PopupContainer isDark={isDark}>
                      <WarningText isDark={isDark}>
                        Are you sure,you want to logout?
                      </WarningText>
                      <div className="buttonsContainer">
                        <button
                          type="button"
                          className="cancelButton"
                          onClick={() => close()}
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          className="confirmButton"
                          onClick={onClickLogout}
                        >
                          Confirm
                        </button>
                      </div>
                    </PopupContainer>
                  )}
                </Popup>
              </NavItemsContainerBig>
            </HeaderContainerLarge>
          </>
        )
      }}
    </Context.Consumer>
  )
}
export default withRouter(Header)
