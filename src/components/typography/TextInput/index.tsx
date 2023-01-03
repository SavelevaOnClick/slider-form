import React, {forwardRef, ForwardRefRenderFunction} from 'react';
import {TextInput as TI, TextInputProps} from 'react-native';
import styles from './styles';

const TextInput: ForwardRefRenderFunction<TI, TextInputProps> = ({style, ...otherProps}, ref) => {
  return <TI ref={ref} style={[styles.container, style]} {...otherProps} />;
};

export default forwardRef(TextInput);
