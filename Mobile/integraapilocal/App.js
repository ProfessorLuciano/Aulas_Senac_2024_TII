import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import apiLocal from './apiLocal';

export default function App() {

  const [dadosProdutos, setDadosProdutos] = useState([''])
  useEffect(() => {
    async function pegardadosProdutos() {
      const resposta = await apiLocal.get('/ConsultarProdutos')
      setDadosProdutos(resposta.data)
    }
    pegardadosProdutos()
  }, [dadosProdutos])

  return (
    <View style={styles.container}>
      <Text>Produtos</Text>
      <StatusBar backgroundColor='#FFFFFF' barStyle='dark-content' translucent={false} />
      {dadosProdutos.map((item) => {
        return (
          <>
            <Text key={item.id}>Nome: {item.nome} - {item.preco}</Text>
          </>
        )
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
