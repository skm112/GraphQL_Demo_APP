import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import RootStack from './src/screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { CustomApolloProvider } from './src/GraphQL'
import { Portal } from '~components'


const CustomLightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#ff0000",
    text: "rgba(0, 0, 0, 0.87)",
    textSecondary: "rgba(0, 0, 0, 0.6)",
    textOne: '#ffffff',
    textTwo: '#9fa6ae',
    overlay: 'rgba(0,0,0,0.5)',
    success: '#00c851',
    danger: '#ff4444',
    warning: '#ffbb33',
    info:'#33b5e5',
    lightGray: "#F2F2F3",
    midGray: "#C8CDD0",
    darkGray: "#415058",
    black: "#1F292E"

  },
};


function App() {
  return (
    <CustomApolloProvider>
      <SafeAreaProvider >
        <Portal.Host>
          <NavigationContainer theme={CustomLightTheme}>
            <RootStack />
          </NavigationContainer>
        </Portal.Host>
      </SafeAreaProvider>
    </CustomApolloProvider>
  )
}


export default App;
