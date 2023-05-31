import React from 'react'

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

const Context = React.createContext({
  isDark: false,
  savedVideosList: finalSavedItemsList,
  activeTab: localStorage.getItem('activeTabs'),
  onClickSaved: () => {},
  onClickRemoveSave: () => {},
  onClickChangeTheme: () => {},
  onClickChangeNavItem: () => {},
})

export default Context
