import {LayoutAnimation, Platform, UIManager} from 'react-native';

const expand = {
  duration: 240,
  create: {
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.opacity,
  },
  update: {
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.opacity,
  },
  delete: {
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.opacity,
  },
};

export const animation = (platformName?: TPlatformName) => {
  if (Platform.OS === 'ios') {
    LayoutAnimation.configureNext(expand);
  } else if (platformName !== 'ios' && Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    LayoutAnimation.configureNext(expand);
  }
};

export type TPlatformName = 'ios' | 'android' | undefined;
