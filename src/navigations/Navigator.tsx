import {createStackNavigator} from '@react-navigation/stack';
import DetailScreen from '../screens/DetailScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
