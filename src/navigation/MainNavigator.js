import BoosterPackNavigation from "./BoosterPackNavigation";
import AuthNavigator from "./AuthNavigator";

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
         : <AuthNavigator />}
         </NavigationContainer>
    )
}

export default MainNavigator