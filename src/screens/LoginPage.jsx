import React, { useContext } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { AuthContext } from '../context/AuthContext'

export const LoginPage = () => {

    const { iniciarSesion } = useContext(AuthContext)

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' , alignItems: 'center'}}>
        <Text style={{ color: 'black', fontWeight: 'bold' }}>Email...</Text>
        <TextInput
        placeholder="Ingresa tu email..."
        style={styles.input}
      />

    <Text style={{ color: 'black', fontWeight: 'bold', marginTop: 20 }}>Password...</Text>
        <TextInput
         placeholder="Ingresa tu password..."
        style={{...styles.input, marginBottom: 50}}
      />    

      <Button onPress={ () => iniciarSesion() } title='INICIAR SESION'/>
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      width: '80%',
      borderRadius: 15
    },
  });
