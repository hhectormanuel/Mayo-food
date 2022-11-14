import { NavigationContainer } from '@react-navigation/native'
import React, { useContext, useEffect } from 'react'
import { AuthContext } from './src/context/AuthContext';
import { usePedidos } from './src/hooks/usePedidos';
import { AppDrawer } from './src/navigator/AppDrawer';
import { StackNavigator } from './src/navigator/StackNavigator'

export const AppFood = () => {

    const { onLoadProducts, onLoadOrders } = usePedidos();
    const { Usuario } = useContext( AuthContext );

    useEffect(() => {
      onLoadProducts()
      onLoadOrders();
    }, [])

  return (
    <NavigationContainer>
      {
        Usuario.status === 'auth'
        ? <AppDrawer/>
        : <StackNavigator/>
      }
    </NavigationContainer>
  )
}
