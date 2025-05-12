import {
    StyleSheet,
    SafeAreaView,
    View,
    Text
} from 'react-native'

export default function Dashboard(){
    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.textoTitulo}>Página do Dashboard</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 15
    },
    textoTitulo: {
        fontSize: 30,
        fontWeight: 'bold'
    }
})