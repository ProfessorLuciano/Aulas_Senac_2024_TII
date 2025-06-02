import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { AuthProvider } from './src/Contexts/AuthContexts'
import RotasIndex from './src/routes'

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor='#FFFFFF' barStyle='dark-content' translucent={false} />
        <RotasIndex />
      </AuthProvider>
    </NavigationContainer>
  )
}
