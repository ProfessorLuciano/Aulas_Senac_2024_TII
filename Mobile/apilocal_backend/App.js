import React, { useState } from 'react'
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native'

import apiBackEnd from './src/api/apiBackEnd'

export default function App() {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function enviarCadastro(){
    const idGrupos = '69d18c65-75b2-46db-a731-c9a2c6c76de4'
    try {
      const resposta = await apiBackEnd.post('/CadastrarUsuarios', {
        nome,
        email,
        password,
        idGrupos
      })
    } catch (err) {
      
    }    
  }


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#FFFFFF' barStyle='dark-content' translucent={false} />
      <View>
        <Text>Cadastrar Usuário no Back-End</Text>
        <TextInput
          placeholder='Digite o Nome'
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          placeholder='Digite o E-mail'
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder='Digite a Senha'
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={enviarCadastro}><Text>Enviar</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
