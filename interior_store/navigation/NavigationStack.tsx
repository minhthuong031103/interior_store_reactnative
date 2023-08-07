import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import {Login, OnBoarding, Register} from '../screens';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './NavigationService';

const Stack = createStackNavigator();

export const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{headerShown: false, animationEnabled: true}}
    initialRouteName={Routes.OnBoarding}>
    <Stack.Screen name={Routes.Login} component={Login} />
    <Stack.Screen name={Routes.Register} component={Register} />
    <Stack.Screen name={Routes.OnBoarding} component={OnBoarding} />
  </Stack.Navigator>
);
export const Navigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      {<StackNavigator />}
    </NavigationContainer>
  );
};
