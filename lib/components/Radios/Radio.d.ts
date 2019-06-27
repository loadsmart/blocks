import { PureComponent } from 'react';
import { ViewProps } from 'react-native';
interface Props extends ViewProps {
    selected?: boolean;
}
export default class Radio extends PureComponent<Props> {
    render(): JSX.Element;
}
export {};
