import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native'

export default function App() {

  const [nomeInput, setNomeInput] = useState('')
  const [nomeSalvo, setNomeSalvo] = useState('')

  async function salvarNome() {
    await AsyncStorage.setItem('nome', JSON.stringify(nomeInput))
    setNomeInput('')
    setNomeSalvo('')
  }

  async function pegarNome() {
    const iNome = await AsyncStorage.getItem('nome')
    const pNome = JSON.parse(iNome)
    setNomeSalvo(pNome)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <StatusBar
          backgroundColor='#FFFFFF'
          barStyle='dark-content'
          translucent={false}
        />
        <Text style={styles.textoTitulo}>Biblioteca AsyncStorage</Text>
        <TextInput
          style={styles.textoEntrada}
          placeholder='Digite o Nome'
          value={nomeInput}
          onChangeText={setNomeInput}
        />
        <TouchableOpacity style={styles.botaoGravar} onPress={salvarNome}>
          <Text style={styles.textoBotao}>Gravar Nome</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoPegar} onPress={pegarNome}>
          <Text style={styles.textoBotao}>Pegar Nome</Text>
        </TouchableOpacity>
        <Text style={styles.textoSalvo}>Nome Digitado é: <Text style={styles.nomeAsync}>{nomeSalvo}</Text></Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    marginTop: 20,
  },
  textoTitulo: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  textoEntrada: {
    marginTop: 10,
    fontSize: 30,
    textAlign: 'center',
    height: 60,
    borderWidth: 1,
    borderRadius: 8
  },
  botaoGravar: {
    marginTop: 10,
    height: 60,
    borderRadius: 8,
    backgroundColor: 'blue'
  },
  botaoPegar: {
    marginTop: 10,
    height: 60,
    borderRadius: 8,
    backgroundColor: 'green'
  },
  textoBotao: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    padding: 6
  },
  textoSalvo: {
    marginTop: 30,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  nomeAsync: {
    color: 'red',
    fontSize: 25,
    fontWeight: 'bold',
  }
})
