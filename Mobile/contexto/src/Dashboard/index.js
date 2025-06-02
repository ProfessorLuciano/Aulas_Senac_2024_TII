import {
    StyleSheet,
    SafeAreaView,
    View,
    Text
} from 'react-native'

export default function Dashboard(){
    return(
        <SafeAreaView style={styles.conteiner}>
            <View>
                <Text style={styles.Titulo}>Dashboard</Text>
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
    }
})