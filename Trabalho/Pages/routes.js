import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Ldde from './Ldde'
import Fila from './Fila'
import Menu from './Menu'

const Stack = createStackNavigator();


export default function routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Menu" component={Menu} />
                <Stack.Screen name="Ldde" component={Ldde} />
                <Stack.Screen name="Fila" component={Fila} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
