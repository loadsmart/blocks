import { PureComponent } from 'react';
import { ViewProps } from 'react-native';
export declare enum TertiaryButtonDisplayStyle {
    Dark = 0,
    Light = 1
}
interface Props extends ViewProps {
    title: string;
    displayStyle?: TertiaryButtonDisplayStyle;
    onPress?: () => void;
}
export default class TertiaryButton extends PureComponent<Props> {
    render(): JSX.Element;
}
export {};
