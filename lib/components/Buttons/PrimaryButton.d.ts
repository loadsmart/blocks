import { PureComponent } from 'react'
import { ButtonDisplayState, ButtonProps } from './ButtonProps'
export default class PrimaryButton extends PureComponent<ButtonProps> {
  static defaultProps: {
    displayState: ButtonDisplayState
  }
  render(): JSX.Element
  private renderNormalState
  private renderLoadingState
  private onPress
}
