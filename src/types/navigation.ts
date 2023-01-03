import {RouteProp} from '@react-navigation/native';

export type RootStackParamList = {
  // SCREEN PARAMS
  Onboarding: undefined
  SignIn: undefined;
  Home: undefined;
};
// EXPORT SCREEN PARAMS
export type OnboardingRouteProp = RouteProp<RootStackParamList, 'Onboarding'>;
export type SignInRouteProp = RouteProp<RootStackParamList, 'SignIn'>;
export type HomeRouteProp = RouteProp<RootStackParamList, 'Home'>;
