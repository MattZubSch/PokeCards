import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity, TextInput, Button  } from 'react-native'
import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { singup } from '../store/actions/auth.action'
import ImageSelector from '../components/ImageSelector'

const AuthScreen = () => {
    
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlerSingUp = () => {
        dispatch(singup(email, password))
    }

  return (
    <KeyboardAvoidingView behavior='height' style={styles.screen}>
        <View style={styles.container}>
          <Text style={styles.title}>Registro</Text>
          <Text>E-Mail</Text>
          <TextInput 
          keyboardType='email-address' 
          autoCapitalize='none' 
          value={email} 
          onChangeText={setEmail}/>
          <Text>Password</Text>
          <TextInput 
          secureTextEntry 
          autoCapitalize='none'
          value={password}
          onChangeText={setPassword}/>
          <Button 
          title='Registrarse'
          onPress={handlerSingUp}></Button>
            <View style={styles.prompt}>
                <Text style={styles.promptMessage}>Ya tienes una cuenta?</Text>
                <TouchableOpacity onPress={() => console.log('ingresar')}>
                    <Text style={styles.promptButton}>Ingresar</Text>
                </TouchableOpacity>
            </View>
            <ImageSelector onImage={image => console.log(image)} />
        </View>
    </KeyboardAvoidingView>
  )
}

export default AuthScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        width: '80%',
        maxWidth: 400,
        padding: 12,
        margin: 12,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    title: {
        fontSize: 24, 
        marginBottom: 18, 
        textAlign: 'center'
    },
    prompt: {
        alignItems: 'center'
    },
    promptMessage: {
        fontSize: 16,
        color: '#333'
    },
    promptButton: {
        fontSize: 16
    },
    button: {
        backgroundColor: 'lightblue',
        marginTop: 20
    }
})