import React, { useEffect, useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Button, TouchableNativeFeedback, Image, ScrollView } from "react-native";
import {Picker} from '@react-native-picker/picker';
import { usePedidos } from "../hooks/usePedidos";
import { useNavigation } from "@react-navigation/native";

export const NuevoPedidoScreen = () => {

    const { Productos, onCreateNewOrder } = usePedidos();
    const [modalVisible, setModalVisible] = useState(false);
    const [productosSeleccionados, setProductosSeleccionados] = useState([]);
    const [selectedFood, setSelectedFood] = useState();
    const [Precios, setPrecios] = useState([]);
    const [Total, setTotal] = useState(0);

    const navigation = useNavigation();

    const seleccionarProductos = () => {
        if( selectedFood === undefined || selectedFood === 'Selecciona una comida' ) {
              return;
        } else {
            const repetido = productosSeleccionados.find( p => p.nombre === selectedFood )
              if( repetido ){
                alert('Ya has agregado este producto')
                return;
              } else {
                const comida = Productos.find( producto => producto.nombre === selectedFood );
                setPrecios([...Precios, comida.precio])
                setProductosSeleccionados([ ...productosSeleccionados, comida ])
              }
          } 
    }   

    const eliminarProductoDeLista = ( producto ) => {
      const productos = productosSeleccionados.filter( p => p.id !== producto.id )
      const precio = Precios.filter( p => p !== producto.precio )
      setPrecios(precio)
      setProductosSeleccionados(productos)
    }

    useEffect(() => {
      seleccionarProductos();
    }, [selectedFood])

    const obtenerPrecio = () => {
        let total = 0;
        for( let i = 0; i<=Precios.length; i++ ){
            if( Precios[i] === undefined ){
                break;
            }
            total = total + parseInt(Precios[i])
        }

        setTotal(total)
    }

    useEffect(() => {
      obtenerPrecio()
    }, [Precios])

    const crearNuevoPedido = () => {

      const productos = [];

      for( let i = 0; i <=  productosSeleccionados.length; i++){
        if( productosSeleccionados[i] === undefined ){
          break;
        }
        productos.push(productosSeleccionados[i].id)
      }

      const orden = {
        // id: Date.now(),
        productos: productos,
        total: Total
      }

      if( productosSeleccionados.length === 0 ){
        alert('Debes agregar la comida en el pedido');
        return;
      } else {
        onCreateNewOrder( orden )
        setProductosSeleccionados([])
        setSelectedFood()
        setPrecios([])
        setTotal(0)
        alert('Pedido agregado con éxito')
        navigation.navigate('- Pedidos')
      }
    }
    

  return (
    <ScrollView> 
      <View style={ styles.centeredView }>
        <View style={ styles.modalView }>
            <Text style={{ color: 'black', fontSize: 22, fontWeight: 'bold', textAlign: 'center' }}>Selecciona las comidas</Text>
            {
                Productos.length === 0
                ? <Text>Cargando...</Text>
                : (
                    <Picker
                    style={{ marginBottom: 20 }}
                    selectedValue={selectedFood}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedFood(itemValue)
                    }>
                        <Picker.Item label='Selecciona una comida' value='Selecciona una comida' />
                        {
                            Productos.map( producto => (
                                <Picker.Item key={ producto.id } label={ producto.nombre } value={ producto.nombre } />
                            ))
                        }
                </Picker>
                )
            }
            <Text style={ styles.textProductosSeleccionados }>Productos seleccionados: </Text>
                {
                    productosSeleccionados.length === 0
                    ? <Text style={ styles.noProductsText }>No hay productos seleccionados</Text>
                    :(
                            productosSeleccionados.map( p => (
                              <View style={ styles.cardSelectedProducts } key={ p.id }>
                                <Image source={{uri: p.img }} style={{width: 50, height: 50, marginRight: 10}} />
                                <Text style={ styles.productListText }>{ p.nombre }</Text>
                                <TouchableNativeFeedback onPress={ ()=>eliminarProductoDeLista(p) } background={TouchableNativeFeedback.Ripple( 'black', false, 32 )}>
                                  <Text style={ styles.textDelete }>X</Text>
                                </TouchableNativeFeedback>
                              </View>
                            ))
                    )
                }
            <Text style={ styles.textProductosSeleccionados }>Total:</Text>
            <Text style={ styles.textTotal }>${ Total }</Text>
            <Button onPress={ crearNuevoPedido } title='CREAR PEDIDO'/>
        </View>
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
