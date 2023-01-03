import {initialWindowMetrics} from 'react-native-safe-area-context';
import {Dimensions, Platform, Appearance} from 'react-native';
import { getUniqueId } from 'react-native-device-info';

export const {width, height} = Dimensions.get('window');
export const top = initialWindowMetrics?.insets?.top || 20;
export const bottom = initialWindowMetrics?.insets?.bottom || 0;
export const ios = Platform.OS === 'ios';
export const android = Platform.OS === 'android';
export const darkMode = Appearance.getColorScheme() === 'dark';
export const hitSlop = {top: 8, bottom: 8, right: 8, left: 8};
export const deviceId = getUniqueId()