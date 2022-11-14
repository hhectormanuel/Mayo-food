import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { usePedidos } from '../hooks/usePedidos'

export const ProductosScreen = () => {

    const { Productos } = usePedidos();

  return (
    <ScrollView>
    <View style={{ flex: 1, alignContent: 'center', alignItems: 'center' }}>
        <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'black', fontSize: 25, marginTop: 10, marginBottom: 10 }}>PRODUCTOS</Text>
        {
            Productos.map( p =>  (
            <View style={ styles.cardSelectedProducts } key={ p.id }>
                <Image source={{uri: p.img }} style={{width: 50, height: 50, marginRight: 10}} />
                <Text style={ styles.productListText }>{ p.nombre }</Text>
              </View>
            ))
        }
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    centeredView: {
      justifyContent: "center",
      alignItems: "center",
    },
    modalView: {
      backgroundColor: "white",
      padding: 35,
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      width: 400
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      marginBottom: 10
    },
    buttonOpen: {
      backgroundColor: "#b71c1c",
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
        marginBottom: 8,
        color: 'black'
    },
    textTotal: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: 'bold', 
        marginTop: 7,
        color: 'green',
        marginBottom: 20
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
