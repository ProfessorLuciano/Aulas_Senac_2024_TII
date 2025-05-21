import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Dashboard from '../Pages/Dashboard'
const Stack = createNativeStackNavigator()

export default function Auth() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Dashboard'
                component={Dashboard}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}