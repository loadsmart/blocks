import { Children, Component } from 'react'

export interface Theme {
  primaryColor: string
}

export interface ThemeProviderProps {
  theme: Theme
}

export default class ThemeProvider extends Component<ThemeProviderProps> {
  public getChildContext() {
    return { theme: this.props.theme }
  }

  public render() {
    return Children.only(this.props.children)
  }
}
