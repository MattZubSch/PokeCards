import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from '../screens/HomeScreen'
import BoosterPackScreen from '../screens/BoosterPackScreen'

const Stack = createNativeStackNavigator()

const BoosterPackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'
            >
                <Stack.Screen name='Home' component={HomeScreen} options={{
                    title: "Pokecards"}}/>
                <Stack.Screen name='BoosterPackScreen' component={BoosterPackScreen} />
            </Stack.Navigator>
        </NavigationContainer>

)};

export default BoosterPackNavigation