import { PureComponent } from 'react';
import { ViewProps } from 'react-native';
interface Props extends ViewProps {
    tintColor?: string;
}
export default class IconChevron extends PureComponent<Props> {
    render(): JSX.Element;
}
export {};
