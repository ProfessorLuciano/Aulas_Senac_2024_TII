import React, { useState } from 'react'
import apiCep from './src/Api/apiCep'
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TextInput,
  TouchableOpacity
} from 'react-native'

export default function App() {

  const [cep, setCep] = useState('')
  const [dadosCep, setDadosCep] =useState('')

  async function buscaCEP() {
    const resposta = await apiCep.get(`${cep}/json`)
    setDadosCep(resposta.data)
  }
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <StatusBar backgroundColor='#000000' barStyle='light-content' translucent={false} />
        <Text>Api de Busca CEP</Text>
        <TextInput
          placeholder='Digite o CEP'
          value={cep}
          onChangeText={setCep}
        />
        <TouchableOpacity onPress={buscaCEP}><Text>Enviar</Text></TouchableOpacity>
      </View>
      <View>
        <Text>{dadosCep.logradouro}</Text>
        <Text>{dadosCep.bairro}</Text>
        <Text>{dadosCep.localidade}</Text>
        <Text>{dadosCep.uf}</Text>
      </View>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 15
  },
})
