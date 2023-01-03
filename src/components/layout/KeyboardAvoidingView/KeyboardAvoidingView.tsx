import React from 'react';
import {KeyboardAvoidingView as KAView, KeyboardAvoidingViewProps, Platform} from 'react-native';

export const KeyboardAvoidingView: React.FC<TProps> = ({children, iosBehavior, androidBehavior, ...props}) => {
  const behavior: TBehavior = Platform.select({
    ios: iosBehavior || 'padding',
    android: androidBehavior || undefined,
  });

  return (
    <KAView behavior={behavior} {...props}>
      {children}
    </KAView>
  );
};

type TProps = {
  iosBehavior?: TBehavior;
  androidBehavior?: TBehavior;
} & KeyboardAvoidingViewProps;

type TBehavior = 'padding' | 'height' | 'position' | undefined;
