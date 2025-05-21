import React, { useState } from 'react'
import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Keyboard
} from 'react-native'

import {
  initializeApp,
  getApps,
  getApp
} from 'firebase/app'

import {
  getDatabase,
  ref,
  push,
  set,
  update,
  remove,
  onValue
} from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyBSWmXYMzHLTnmDct9xyNxgf_5zORQ6VOU",
  authDomain: "aulasenac-ad1ed.firebaseapp.com",
  databaseURL: "https://aulasenac-ad1ed-default-rtdb.firebaseio.com",
  projectId: "aulasenac-ad1ed",
  storageBucket: "aulasenac-ad1ed.firebasestorage.app",
  messagingSenderId: "155450134981",
  appId: "1:155450134981:web:06a9ec54ff11bfb2a0fbac"
}
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp()
const database = getDatabase(app)

export default function App() {
  const [nome, setNome] = useState('')
  const [cidade, setCidade] = useState('')
  const [usuarios, setUsuarios] = useState([])
  const [editandoId, setEditandoId] = useState(null)

  async function botaoCadastrar() {
    if (!nome || !cidade) {
      alert('Preencha todos os campos')
      return
    }
    const usuariosRef = ref(database, 'usuarios')
    const novaRef = push(usuariosRef)
    await set(novaRef, { nome, cidade })

    setNome('')
    setCidade('')
    Keyboard.dismiss()
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#FFFFFF' barStyle='dark-content' />
      <Text style={styles.titulo}>Gerenciador Firebase</Text>

      <TextInput
        style={styles.input}
        placeholder='Digite seu nome'
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder='Digite sua cidade'
        value={cidade}
        onChangeText={setCidade}
      />

      <TouchableOpacity onPress={botaoCadastrar} style={styles.botao}>
        <Text style={styles.botaoTexto}>
          {editandoId ? 'Salvar Alterações' : 'Cadastrar'}
        </Text>
      </TouchableOpacity>

      <FlatList
        data={usuarios}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemTexto}>{item.nome} - {item.cidade}</Text>
            <View style={styles.acoes}>
              <TouchableOpacity onPress={() => prepararEdicao(item)}>
                <Text style={styles.editar}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => excluirUsuario(item.id)}>
                <Text style={styles.excluir}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    fontSize: 25,
    width: '80%'
  },
  botao: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
    width: '80%'
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10
  },
  itemTexto: {
    fontSize: 16
  },
  acoes: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 20, marginTop: 5
  },
  editar: {
    color: 'green',
    fontWeight: 'bold'
  },
  excluir: {
    color: 'red',
    fontWeight: 'bold'
  }
})
