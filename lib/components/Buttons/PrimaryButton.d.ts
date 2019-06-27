import { PureComponent } from 'react';
import { ButtonProps, ButtonDisplayState } from './ButtonProps';
export default class PrimaryButton extends PureComponent<ButtonProps> {
    static defaultProps: {
        displayState: ButtonDisplayState;
    };
    render(): JSX.Element;
    private renderNormalState;
    private renderLoadingState;
    private onPress;
}
