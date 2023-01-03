import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignIn} from '@screens';

const AuthStack = createNativeStackNavigator();

export const AuthNavigator: React.FC = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="SignIn" component={SignIn} />
    </AuthStack.Navigator>
  );
};
