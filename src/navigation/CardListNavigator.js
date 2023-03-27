import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import CardListScreen from "../screens/CardListScreen";

const Stack = createNativeStackNavigator()

const CardListNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} options={{title: 'PokeCards'}} />
            <Stack.Screen name='List' component={CardListScreen} />
        </Stack.Navigator>
    )
}

export default CardListNavigator