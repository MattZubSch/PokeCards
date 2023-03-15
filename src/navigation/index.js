import BoosterPackNavigation from "./BoosterPackNavigation";
import AuthNavigator from "./AuthNavigator";

import React, {useState} from "react";


export default () => {
    const [user, setUser] = useState(null)

    return (
         <>
         {user ? <BoosterPackNavigation /> : <AuthNavigator />}
         </>
    )
}