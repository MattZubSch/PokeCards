import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import Card from '../components/Card'

import { useSelector, useDispatch } from 'react-redux'
import { selectedCards, multipleCards, clearPack} from '../store/actions/packScreen.action'

const BoosterPackScreen = ({navigation}) => {

  const dispatch = useDispatch()
  const pokemons = useSelector(state => state.packScreen.packs)

  const generateRandom = () => { 
    return Math.floor(Math.random() * (pokemons.length)).toString()
  }

  const lol = generateRandom()
  console.log(lol)

  // console.log(pokemons)
  const handlerOpenPack = () => {
    dispatch(selectedCards(generateRandom()))
    navigation.navigate('OpenPackScreen')
  }
  const handlerX3Pack = () => {
    dispatch(clearPack())
    for (let i = 0; i < 3; i++) {
      dispatch(multipleCards(generateRandom()))
    }
    navigation.navigate('OpenPackScreen')
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity 
        style={styles.touchableContainer}
        onPress={handlerOpenPack}>
          <Card style={styles.cardContainer}>
              <Text style={styles.text}>Sobre Gratuito</Text>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.touchableContainer}
        onPress={handlerX3Pack}>
          <Card style={styles.cardContainer}>
              <Text style={styles.text}>Sobre X3</Text>
          </Card>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default BoosterPackScreen

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  // justifyContent: 'center',
  shadowColor: "black",
  flexDirection: "column",
},
cardContainer: {
  margin: 3,
  padding: 5,
  height: 150,
  // width: '90%',
  shadowColor: 'black',
  flexDirection: "row",
  marginTop: 10,
  marginBottom: 10,
  alignItems: "center",
  backgroundColor: 'lightblue',
  justifyContent: 'center'
},
touchableContainer: {
  width: '90%',
},
text: {
  fontFamily: "GothicNewMedium",
  fontSize: 24,
  justifyContent: 'center'

}})