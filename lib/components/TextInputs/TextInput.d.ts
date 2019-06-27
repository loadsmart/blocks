import { Component } from 'react';
import { TextInputProps } from 'react-native';
interface Props extends TextInputProps {
}
interface State {
    focused: boolean;
}
export default class TextInput extends Component<Props, State> {
    constructor(props: Props, state: State);
    render(): JSX.Element;
    onFocus(): void;
    onBlur(): void;
}
export {};
