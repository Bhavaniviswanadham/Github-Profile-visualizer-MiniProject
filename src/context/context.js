import React from 'react'

const ContextObject = React.createContext({
  activeTab: '/',
  activeTabChange: () => {},
})

export default ContextObject
