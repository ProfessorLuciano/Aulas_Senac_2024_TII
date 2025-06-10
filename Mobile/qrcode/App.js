import React, { useState } from 'react'
import QRCode from 'react-native-qrcode-svg'
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity
} from 'react-native'

export default function App() {

  const [qrValor, setQrValor] = useState('')
  const [textoEntrada, setTextoEntrada] = useState('')

  async function criarQrCode(){
    setQrValor(textoEntrada)
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#FFFFFF' barStyle='dark-content' translucent={false} />
      <Text>Geração de QRCode</Text>

      <QRCode
        value={qrValor ? qrValor : 'Sem Informações'}
        size={200}
        color='#000000'
        backgroundColor='#FFFFFF'
      />

      <TextInput
        placeholder='Digite o Código'
        value={textoEntrada}
        onChangeText={setTextoEntrada}
      />

      <TouchableOpacity onPress={criarQrCode}>
        <Text>Criar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
})