import React, { Component } from 'react'
import { YellowBox } from 'react-native'
import StorybookUI from './StorybookUI'

class App extends Component {
  render() {
    YellowBox.ignoreWarnings(['Warning: Async Storage has been extracted from react-native core'])
    return <StorybookUI />
  }
}

export default App
