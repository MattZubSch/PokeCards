import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthScreen from "../screens/AuthScreen";
import LoginScreen from "../screens/LoginScreen";

const Stack = createNativeStackNavigator()

const AuthNavigator = () => {
    return (
    
            <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{headerShown: false}}>
                <Stack.Screen name='Auth' component={AuthScreen}     
                />
                <Stack.Screen name="Login" component={LoginScreen}
                />
            </Stack.Navigator>
        
        )
}

export default AuthNavigator
