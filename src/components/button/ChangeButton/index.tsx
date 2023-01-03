import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {Pressable, Text, TextInput, View} from '@components';

type TProps = {
  title: string;
  style?: StyleProp<ViewStyle>;
  onPresss: (text: string) => void;
};

const ChangeButton: React.FC<TProps> = ({title, onPresss, style = {}}) => {
  const containerStyle = useMemo(() => [styles.container, style], [style]);

  const onPressHandler = useCallback(() => {
    onPresss(title);
  }, [onPresss]);
  return (
    <Pressable style={containerStyle} onPress={onPressHandler}>
      <Text>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 52,
    backgroundColor: '#F2F3F5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
});

export default ChangeButton;
