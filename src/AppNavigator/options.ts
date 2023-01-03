import styles from './styles';
import {colors} from '@constants';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

export const defaultStackOptions: NativeStackNavigationOptions = {
  headerBackTitleVisible: false,
  headerStyle: styles.headerStyle,
  headerTintColor: colors.white_FFFFFF,
  headerTitleAlign: 'center',
  headerTitleStyle: styles.headerTitleStyle,
};
