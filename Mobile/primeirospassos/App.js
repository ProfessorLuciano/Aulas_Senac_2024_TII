import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform
} from 'react-native'
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <StatusBar backgroundColor='#FFFFFF' barStyle='dark-content' translucent={false} />
        <Text style={styles.Titulo}>Hello World</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? '15' : 0
  },
  Titulo: {
    color: '#0098E0',
    fontSize: 50,
    fontWeight: 'bold',
    fontStyle: 'italic'
  }
})
