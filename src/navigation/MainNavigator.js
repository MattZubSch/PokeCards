import BoosterPackNavigation from "./BoosterPackNavigation";
import AuthNavigator from "./AuthNavigator";
import CardListNavigator from "./CardListNavigator";

import React from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";


const MainNavigator = () => {
    const userNewId = useSelector(state => state.auth.userId);
    const userId = useSelector(state => state.login.userId)

    return (
        <NavigationContainer>
         {userId || userNewId
         ? <BoosterPackNavigation /> 
         : <BoosterPackNavigation />}
        </NavigationContainer>
    )
}

export default MainNavigator