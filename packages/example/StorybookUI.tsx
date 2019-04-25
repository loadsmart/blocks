import { configure, getStorybookUI } from '@storybook/react-native'
import { loadStories } from './storyLoader'

import './rn-addons'

const StorybookUI = getStorybookUI({ port: 9001, host: 'localhost' })

configure(() => {
  loadStories()
}, module)

export default StorybookUI
