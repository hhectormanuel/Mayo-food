import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { HomeScreen } from '../screens/HomeScreen';
import { NuevoPedidoScreen } from '../screens/NuevoPedidoScreen';
import { VerPedidoScreen } from '../screens/VerPedidoScreen';
import { usePedidos } from '../hooks/usePedidos';
import { ProductosScreen } from '../screens/ProductosScreen';

const Drawer = createDrawerNavigator();

export const AppDrawer = () => {

    const { PedidoSeleccionado } = usePedidos()

  return (
    <Drawer.Navigator>
        <Drawer.Screen name="- Pedidos" component={HomeScreen} />
        <Drawer.Screen name="- Crear Pedido." component={NuevoPedidoScreen} />
        <Drawer.Screen name="- Productos." component={ProductosScreen} />
        <Drawer.Screen options={{ drawerItemStyle: { height: 0 } }} name="- Ver Pedido." component={VerPedidoScreen} />
    </Drawer.Navigator>
  )
}
