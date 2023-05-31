import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import Context from './context/Context'

import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'

import Login from './components/Login'

import Trending from './components/Trending'
import Gaming from './components/Gaming'

import SavedVideos from './components/SavedVideos'

import VideoItemDetails from './components/VideoItemDetails'

import NotFound from './components/NotFound'

import './App.css'

const activeTabItem = localStorage.getItem('activeTabs')

if (activeTabItem === null) {
  localStorage.setItem('activeTabs', 'Home')
}

const savedItemsList = localStorage.getItem('savedItemsList')
const parseSavedItemsList = JSON.parse(savedItemsList)
let finalSavedItemsList

if (parseSavedItemsList === null) {
  finalSavedItemsList = []
} else {
  finalSavedItemsList = parseSavedItemsList
}

class App extends Component {
  state = {
    isDark: false,
    activeTab: localStorage.getItem('activeTabs'),
    savedVideosList: finalSavedItemsList,
  }

  onClickSaved = videoItemDetails => {
    const {savedVideosList} = this.state
    const checkVideoExist = savedVideosList.find(
      eachItem => eachItem.id === videoItemDetails.id,
    )

    if (checkVideoExist === undefined) {
      this.setState(prevState => ({
        savedVideosList: [...prevState.savedVideosList, videoItemDetails],
      }))
    }
  }

  onClickRemoveSave = videoId => {
    const {savedVideosList} = this.state
    const filterSavedVideos = savedVideosList.filter(
      eachItem => eachItem.id !== videoId,
    )
    this.setState({savedVideosList: filterSavedVideos})
  }

  onClickChangeTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  onClickChangeNavItem = activeName => {
    this.setState({activeTab: activeName})
  }

  render() {
    const {isDark, activeTab, savedVideosList} = this.state
    localStorage.setItem('activeTabs', activeTab)

    const stringifySavedItemsList = JSON.stringify(savedVideosList)
    localStorage.setItem('savedItemsList', stringifySavedItemsList)

    return (
      <Context.Provider
        value={{
          isDark,
          activeTab,
          savedVideosList,
          onClickSaved: this.onClickSaved,
          onClickRemoveSave: this.onClickRemoveSave,
          onClickChangeTheme: this.onClickChangeTheme,
          onClickChangeNavItem: this.onClickChangeNavItem,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />

          <ProtectedRoute exact path="/" component={Home} />

          <ProtectedRoute exact path="/trending" component={Trending} />

          <ProtectedRoute exact path="/gaming" component={Gaming} />

          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </Context.Provider>
    )
  }
}

export default App
