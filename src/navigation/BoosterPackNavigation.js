import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from '../screens/HomeScreen'
import BoosterPackScreen from '../screens/BoosterPackScreen'
import OpenPackScreen from '../screens/OpenPackScreen'
import CardListScreen from "../screens/CardListScreen";

const Stack = createNativeStackNavigator()

const BoosterPackNavigation = () => {
    return (
      
            <Stack.Navigator initialRouteName='Home'
            >
                <Stack.Screen name='Home' component={HomeScreen} options={{
                    title: "PokeCards"}}/>
                <Stack.Screen name='BoosterPackScreen' component={BoosterPackScreen} />
                <Stack.Screen name='OpenPackScreen' component={OpenPackScreen} />
                <Stack.Screen name='List' component={CardListScreen} />
            </Stack.Navigator>
     

)};

export default BoosterPackNavigation