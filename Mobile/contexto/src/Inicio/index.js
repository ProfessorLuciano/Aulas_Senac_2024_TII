import { useState, useContext } from 'react'
import { AutenticadoContexto } from '../Contexts/AuthContexts'
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Inicio() {

    const { loginUsuarios } = useContext(AutenticadoContexto)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState('')

    async function logarSistema() {
        await loginUsuarios(email, password)
    }

    async function pegarToken(){
        const pegar = await AsyncStorage.getItem('token')
        const tokenT = JSON.parse(pegar)
        setToken(tokenT)
    }

    async function limparToken(){
        await AsyncStorage.clear()
        setToken('')
    }

    return (
        <SafeAreaView style={styles.conteiner}>
            <View>
                <Text style={styles.Titulo}>Login Sistema</Text>
                <TextInput
                    style={styles.textoEntrada}
                    placeholder='Digite Seu E-mail'
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.textoEntrada}
                    placeholder='Digite sua Senha'
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity onPress={logarSistema} style={styles.botao}><Text style={styles.textoBotao} >Enviar</Text></TouchableOpacity>
                <TouchableOpacity onPress={pegarToken} style={styles.botaoToken}><Text style={styles.textoBotao} >Token</Text></TouchableOpacity>
                <TouchableOpacity onPress={limparToken} style={styles.botaoLimpar}><Text style={styles.textoBotao} >Limpar</Text></TouchableOpacity>
                <Text>{token}</Text> 
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Titulo: {
        fontSize: 35,
        fontWeight: 'bold'
    },
    textoEntrada: {
        fontSize: 25,
        textAlign: 'center',
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 5
    },
    botao: {
        marginTop: 5,
        backgroundColor: 'blue',
        height: 60,
        borderRadius: 8
    },
    botaoToken: {
        marginTop: 5,
        backgroundColor: 'green',
        height: 60,
        borderRadius: 8
    },
    botaoLimpar: {
        marginTop: 5,
        backgroundColor: 'red',
        height: 60,
        borderRadius: 8
    },
    textoBotao: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#FFFFFF',
        padding: 10
    }
})