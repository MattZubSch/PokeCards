import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from '../screens/HomeScreen'
import BoosterPackScreen from '../screens/BoosterPackScreen'
import OpenPackScreen from '../screens/OpenPackScreen'

const Stack = createNativeStackNavigator()

const BoosterPackNavigation = () => {
    return (
      
            <Stack.Navigator initialRouteName='Home'
            >
                <Stack.Screen name='Home' component={HomeScreen} options={{
                    title: "Pokecards"}}/>
                <Stack.Screen name='BoosterPackScreen' component={BoosterPackScreen} />
                <Stack.Screen name='OpenPackScreen' component={OpenPackScreen} />
            </Stack.Navigator>
     

)};

export default BoosterPackNavigation