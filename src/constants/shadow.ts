import {Platform} from 'react-native';

export const shadow = Platform.select({
  ios: {
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0.2,
      height: 2,
    },
    shadowColor: 'gray',
    shadowRadius: 3,
  },
  android: {
    elevation: 4,
  },
});