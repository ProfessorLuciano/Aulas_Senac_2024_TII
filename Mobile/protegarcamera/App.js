import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native'

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>🏠 Tela Inicial</Text>
        <Button title="Ir para Detalhes" onPress={() => navigation.navigate('Details')} />
      </View>
    </SafeAreaView>
  );
}

function DetailsScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Text style={styles.title}>📄 Tela de Detalhes</Text>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle='dark-content' />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false, // vamos usar nosso próprio cabeçalho seguro
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
