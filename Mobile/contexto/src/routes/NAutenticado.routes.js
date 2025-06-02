import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Inicio from '../Inicio'

const Stack = createNativeStackNavigator()

export default function NAutenticado() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Inicio'
                component={Inicio}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}