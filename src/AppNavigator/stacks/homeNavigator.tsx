import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '@screens';

const HomeStack = createNativeStackNavigator();

export const HomeNavigator: React.FC = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
};
