import React, { useEffect, useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Button, TouchableNativeFeedback, Image, ScrollView } from "react-native";
import { usePedidos } from '../hooks/usePedidos';

export const VerPedidoScreen = () => {

    const { PedidoSeleccionado } = usePedidos();

  return (
    <ScrollView> 
    <View style={ styles.centeredView }>
          <Text style={ styles.textProductosSeleccionados }>Productos del pedido </Text>
              {
                  PedidoSeleccionado === 'Vacio'
                  ? null
                  :
                   PedidoSeleccionado.productos.map( p => (
                    <View style={ styles.cardSelectedProducts } key={ p.nombre }>
                       <Image source={{uri: p.img }} style={{width: 50, height: 50, marginRight: 10}} />
                      <Text style={ styles.productListText }>{ p.nombre }</Text>
                      </View>
                  ))
              }
          <Text style={ styles.textProductosSeleccionados }>Total:</Text>
          <Text style={ styles.textTotal }>${ PedidoSeleccionado?.total }</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    centeredView: {
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      minHeight: 710,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      width: 400
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#1565c0",
      marginBottom: 10
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    textProductosSeleccionados: {
        textAlign: "center",
        fontSize: 22,
        fontWeight: 'bold', 
        marginTop: 10,
        marginBottom: 15,
        color: 'black'
    },
    textTotal: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: 'bold', 
        marginTop: 10,
        color: 'green',
        marginBottom: 15
    },
    noProductsText: {
        textAlign: "center",
        fontSize: 15,
        marginTop: 10,
        marginBottom: 10
    },
    productListText: {
        fontSize: 15,
        marginLeft: 0,
        fontWeight: 'bold'
    },
    cardSelectedProducts: {
      flexDirection: 'row',
      width: 320,
      height: 60,
      backgroundColor: '#fafafa',
      padding: 5,
      borderRadius: 0,
      marginBottom: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.36,
      shadowRadius: 6.68,

      elevation: 11,
      alignItems: "center",
    },
    textDelete: {
      marginLeft: 'auto',
      backgroundColor: '#eeeeee',
      padding: 5,
      fontWeight: 'bold',
      fontSize: 10
    },
    image: {
      width: 50,
      height: 10
    }
  });
