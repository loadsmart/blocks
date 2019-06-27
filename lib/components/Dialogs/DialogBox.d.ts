import { PureComponent } from 'react';
import { ViewStyle } from 'react-native';
import { DismissibleModalProps } from './DismissibleModalProps';
interface Props extends DismissibleModalProps {
    dialogStyle?: ViewStyle;
}
export default class DialogBox extends PureComponent<Props> {
    render(): JSX.Element;
}
export {};
