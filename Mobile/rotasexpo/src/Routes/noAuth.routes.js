import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Inicio from '../Pages/Inicio'

const Stack = createNativeStackNavigator()

export default function NoAuthRotas() {
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