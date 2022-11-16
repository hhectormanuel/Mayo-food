import React, { useContext, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { AuthContext } from '../context/AuthContext'

export const LoginPage = () => {

    const nombre = "hector"
    const password = "111"
    const [name, setName] = useState('')
    const [pass, setPass] = useState('')
    //const { iniciarSesion } = useContext(AuthContext)
    const auth = function(user, password) {
      if (user === "hector" && password === "111"){
        useContext(AuthContext)
      }
    }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' , alignItems: 'center'}}>
        <Text style={{ color: 'black', fontWeight: 'bold' }}>Email...</Text>
        <TextInput
        placeholder="Ingresa tu email..."
        onChangeText={name => setName(name)}
        style={styles.input}
      />

    <Text style={{ color: 'black', fontWeight: 'bold', marginTop: 20 }}>Password...</Text>
        <TextInput
         placeholder="Ingresa tu password..."
        style={{...styles.input, marginBottom: 50}}
        onChangeText={pass => setPass(pass)}
      />    

      <Button onPress={ () => auth(name, pass) } title='INICIAR SESION'/>
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
