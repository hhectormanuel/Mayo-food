import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { NuevoPedidoScreen } from '../screens/NuevoPedidoScreen';
import { VerPedidoScreen } from '../screens/VerPedidoScreen';
import { LoginPage } from '../screens/LoginPage';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginPage} />
    </Stack.Navigator>
  )
}
