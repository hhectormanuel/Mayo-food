import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import { usePedidos } from '../hooks/usePedidos'

export const HomeScreen = () => {

    const navigation = useNavigation();
    const { Pedidos, onSelectOrder, PedidoSeleccionado } = usePedidos();

    const seleccionarPedido = ( pedido ) => {
        onSelectOrder( pedido )
        navigation.navigate('- Ver Pedido.')
    }

  return (
    <ScrollView style={{ marginTop: 20, flex: 1 }}>
    <View style={ styles.container }>
        <Text style={ styles.textPrincipal }>LISTA DE PEDIDOS</Text>

        <View style={ styles.pedidosContainer }>
            {
                Pedidos.length === 0
                ? <Text style={ styles.textSecondary }>No tienes pedidos</Text>
                : Pedidos.map( pedido => (
                    <View key={ pedido.id } style={ styles.cardPedido }>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={ styles.textPedidos }>Pedido No: </Text>
                            <Text style={ styles.textPedidos2 }>{ pedido.id }</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={ styles.textPedidos }>Productos totales: </Text>
                            <Text style={ styles.textPedidos2 }>{ pedido.productos.length }</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={ styles.textPedidos }>Total:  </Text>
                            <Text style={ styles.textPedidos2 }>${ pedido.total }</Text>
                        </View>

                        <Button onPress={ () => seleccionarPedido( pedido ) } title='Ver pedido'/>
                    </View>
                ))
            }
            <Button onPress={ () => navigation.navigate('- Crear Pedido.') } title='Nuevo pedido'/>
        </View>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    textPrincipal: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold'
    },
    textSecondary: {
        marginBottom: 20
    },
    pedidosContainer: {
        justifyContent: 'center',
        alignSelf: 'center', 
        marginTop: 20
    },
    cardPedido: {
        width: 300,
        backgroundColor: '#fafafa',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        marginBottom: 18
    },
    textPedidos: {
        padding: 8,
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black',
    },

    textPedidos2: {
        padding: 5,
        fontWeight: 'bold',
        fontSize: 18,
        color: '#1565c0',
    }
})
