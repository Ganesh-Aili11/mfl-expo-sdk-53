import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from '../screens/StartScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Start"}
      screenOptions={{
        headerShown: false,
        headerBackTitleVisible: false, // Hide back button text on both platforms
      }}
      >
        <Stack.Screen name="Start" component={StartScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
