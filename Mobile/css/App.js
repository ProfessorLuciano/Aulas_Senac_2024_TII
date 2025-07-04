import { StyleSheet, Text, View, StatusBar } from 'react-native'

export default function App() {
  return (
    <View style={styles.geral}>
      <View style={styles.container}>
        <View style={styles.V1}><Text style={{ fontSize: 50 }}>P1V</Text></View>
        <View style={styles.V2}><Text style={{ fontSize: 50 }}>P2V</Text></View>
      </View>
      <View style={styles.container1}>
        <StatusBar backgroundColor='#00000' barStyle='dark-content' translucent={true} />
        <Text style={{ fontSize: 50 }}>Parte 2</Text>
      </View>
      <View style={styles.container2}>
        <StatusBar backgroundColor='#00000' barStyle='dark-content' translucent={true} />
        <Text style={{ fontSize: 50 }}>Parte 3</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  geral: {
    flex: 1,
    //flexDirection: 'row'
  },
  container: {
    flex: 1,
    flexDirection: 'row',  
    backgroundColor: '#EBB121',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  V1: {
    flex: 3,   
    backgroundColor: '#15EB5C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  V2: {
    flex: 1,   
    backgroundColor: '#D6EB65',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    flex: 2,
    backgroundColor: '#446CF0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    backgroundColor: '#EA078C',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
