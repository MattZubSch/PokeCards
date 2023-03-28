import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import React, {useCallback, useReducer, useState, useEffect} from 'react'
import Input from '../components/Input'
import Card from '../components/Card'
import { logIn } from '../store/actions/login.action'
import { useDispatch, useSelector } from 'react-redux'

import * as loginAction from '../store/actions/login.action'



const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE"
  
const formReducer = (state, action) => {
  console.log(action)
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    }
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    }
    let updatedFormIsValid = true
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key]
    }
    return {
      inputValues: updatedValues,
      inputValidities: updatedValidities,
      formIsValid: updatedFormIsValid,
    }
  }
  return state
}

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch()
  const userid = useSelector(state => state.login.userId)
  
  

  useEffect(() => {
    dispatch(loginAction.loadUser())
  }, [])

  console.log('id ' + userid)

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: "",
      password: "",
    },
    inputValidities: {
      email: false,
      password: false,
    },
    formIsValid: false,
  })

  const handlerLogIn = () => {
    if (formState.formIsValid) {
      dispatch(
        logIn(formState.inputValues.email, formState.inputValues.password)
      )
    } else {
      Alert.alert("formulaio invalido", "Ingresa email y usuario valido", [
        { text: "ok" },
      ])
    }
  }

  const onInputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      })
    },
    [dispatchFormState]
  )


  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Ingresar</Text>
      <View style={styles.container}>
        <Card style={styles.cardContainer}>
            <Input
                id="email"
                label="Email"
                keyboardType="email-address"
                required
                email
                autoCapitalize="none"
                errorText="Por favor ingrese un email valido"
                onInputChange={onInputChangeHandler}
                initialValue=""
            />
            <Input
                id="password"
                label="Password"
                keyboardType="default"
                required
                password
                secureTextEntry
                autoCapitalize="none"
                errorText="Por favor ingrese una contrasena valida"
                onInputChange={onInputChangeHandler}
                initialValue=""
            />
            <View style={styles.buttonForm}>
                <Text style={styles.textButton}>Escribe tu Email y contraseña para</Text>
                <TouchableOpacity 
                style={styles.button}
                onPress={handlerLogIn}
                >
                  <Text>INGRESAR</Text>
                </TouchableOpacity>
                <Text style={styles.textButton}>o, si no estas registrado</Text>
                <TouchableOpacity 
                style={styles.button}
                onPress={() => {navigation.navigate('Auth')}}>
                    <Text>CREAR UNA CUENTA</Text>
                </TouchableOpacity>
            </View>
        </Card>
      </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        // backgroundColor: "grey",
        justifyContent: "center",
        alignItems: "center",
      },
      title: {
        fontSize: 32,
        fontFamily: "GothicNewMedium",
        marginBottom: 18,
      },
      container: {
        width: "80%",
        maxWidth: 400,
      },
      cardContainer: {
        backgroundColor: "#fff",
        padding: 24,
      },
      input: {
        // fontSize: 16,
      },
      buttonForm: {
        marginTop: 32,
        justifyContent: "center",
        alignItems: "center",
      },
      button: {
        width: '100%',
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'lightblue',
        marginTop: 10,
        padding: 10
      },
      textButton: {
        marginTop: 10
      }
})