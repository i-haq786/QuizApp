
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from "react-navigation-stack";
// import { createAppContainer } from 'react-navigation';

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../Screens/login";
import Rules from "../Screens/rules";
// const screens = {
//     Login: {
//         screen: Login
//     },
//     Rules: {
//         screen: Rules
//     }

// }

// const HomeStack = createNativeStackNavigator(screens);
// export default createAppContainer(HomeStack);

const App = () => {
    const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoadingScreen" >
          {/* <Stack.Screen
            component={LoadingScreen}
            name="LoadingScreen"
            options={{headerShown: false}}
          /> */}
          <Stack.Screen
            component={Login}
            name="Login"
            options={{headerShown: false}}
          />
          {/* <Stack.Screen
            component={ResultScreen}
            name="ResultScreen"
            options={{headerShown: false}}
          />
          <Stack.Screen
            component={InfoScreen}
            name="InfoScreen"
            options={{headerShown: false}}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  
  export default App;