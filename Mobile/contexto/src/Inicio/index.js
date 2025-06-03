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

export default function Inicio() {

    const { loginUsuarios } = useContext(AutenticadoContexto)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function logarSistema() {
        await loginUsuarios(email, password)
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