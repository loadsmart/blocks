import { Component } from 'react';
import { ViewProps } from 'react-native';
interface Props extends ViewProps {
    title: string;
    selected?: boolean;
}
export default class RadioSelectCell extends Component<Props> {
    render(): JSX.Element;
}
export {};
