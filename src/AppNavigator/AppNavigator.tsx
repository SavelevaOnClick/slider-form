import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useColorScheme} from 'react-native';
import {darkTheme, lightTheme} from '@constants';
import {
  Onboarding, 
  // ADD NEW SCREEN
} from '@screens';
import {navigationRef, onStateChange} from '@services';
import {useAppDispatch, useAppSelector} from '@hooks';
import {selectGlobal} from '@reducers/global';
import {AuthNavigator} from './stacks/authNavigator';
import {HomeNavigator} from './stacks/homeNavigator';

const RootStack = createNativeStackNavigator();

const AppNavigator: React.FC = () => {
  const dispatch = useAppDispatch();
  const {token, firstOpenApp} = useAppSelector(selectGlobal);
  const scheme = useColorScheme();

  return (
    <NavigationContainer ref={navigationRef} onStateChange={onStateChange} theme={scheme === 'dark' ? darkTheme : lightTheme}>
      <RootStack.Navigator screenOptions={{headerShown: false, gestureEnabled: false}}>
        {firstOpenApp ? (
		 <RootStack.Screen
              name={'Onboarding'}
              component={Onboarding}
              options={{headerShown: false}}
		  />
		) :
		 token ? (
          <RootStack.Screen name="HomeNavigator" component={HomeNavigator} />
        ) : (
          <RootStack.Screen name="AuthNavigator" component={AuthNavigator} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
