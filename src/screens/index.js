import React from 'react';
import { StatusBar } from "react-native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@react-navigation/native';

import HomeScreen from './HomeScreen/HomeScreen';
import ExampleOne from './ExampleOne/ExampleOne';
import ExampleTwo from './ExampleTwo/ExampleTwo';
import ExampleThree from './ExampleThree/ExampleThree';
import ExampleFour from './ExampleFour/ExampleFour';

const Stack = createNativeStackNavigator();


const RootStack = () => {
  const { colors } = useTheme()
  return (<>
    <StatusBar translucent={false} backgroundColor={colors.background} animated={true} barStyle={'dark-content'} />
    <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{ headerShown: false, orientation: 'portrait_up' }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ExampleOne" component={ExampleOne} />
      <Stack.Screen name="ExampleTwo" component={ExampleTwo} />
      <Stack.Screen name="ExampleThree" component={ExampleThree} />
      <Stack.Screen name="ExampleFour" component={ExampleFour} />
    </Stack.Navigator>
  </>
  )
}

export default RootStack