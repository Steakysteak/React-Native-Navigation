import React from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';

//Navigation
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import Home from './screens/Home';
import Details from './screens/Details';

export type RootStackParamList = {
  Home: undefined;
  Details: {productId: Product}   
}

const Stack = createNativeStackNavigator<RootStackParamList>()

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
        name='Home'
        component={Home}
        options={{
          title: 'Trending Products',
        }}
        />
        <Stack.Screen 
        name='Details'
        component={Details}
        options={{
          title: 'Product Details',
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
