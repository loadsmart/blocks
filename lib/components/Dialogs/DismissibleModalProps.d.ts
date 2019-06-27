import { ModalProps } from 'react-native';
export interface DismissibleModalProps extends ModalProps {
    onPressOutside?: () => void;
}
