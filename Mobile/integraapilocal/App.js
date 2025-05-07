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
      <Text style={styles.textoGeral1}>Produtos</Text>
      <StatusBar backgroundColor='#FFFFFF' barStyle='dark-content' translucent={false} />
      {dadosProdutos.map((item) => {
        return (
          <>
            <Text style={styles.textoGeral} key={item.id}>{item.nome} - {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.preco)}</Text>
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
  textoGeral: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 13
  },
  textoGeral1: {
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 13,
    color: 'red'
  }
});
