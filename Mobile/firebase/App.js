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

export default function App() {
    const [nome, setNome] = useState('')
    const [cidade, setCidade] = useState('')
    const [usuarios, setUsuarios] = useState([])
    const [editandoId, setEditandoId] = useState(null)


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

            <TouchableOpacity  style={styles.botao}>
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
