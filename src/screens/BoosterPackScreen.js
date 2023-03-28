import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { clearPack, multipleCards } from '../store/actions/packScreen.action'
import { cardsObtained, saveCards } from '../store/actions/cardList.action'
import { useDispatch, useSelector } from 'react-redux'
// import { POKEMONS } from '../data/pokemon'

import Card from '../components/Card'

const BoosterPackScreen = ({navigation}) => {

  const dispatch = useDispatch()

  const cardsList = useSelector(state => state.obtainedCards.obtainedIds)
  const cardsLoaded = useSelector(state => state.packScreen.openCards)

  const generateRandom = () => { 
    return Math.floor(Math.random() * 649).toString()
  }
  

  const handlerPack = (length) => {
    dispatch(clearPack())
    let idRandom = []
    for (let i = 0; i < length; i++) {
      let sort = generateRandom()
      if (idRandom.includes(sort)) {
        i--
      } else {
        idRandom.push(sort)
      }}
      for (let i = 0; i < idRandom.length; i++){
        dispatch(multipleCards(idRandom[i]))
        if (!cardsList.includes(idRandom[i])) {
          dispatch(cardsObtained(idRandom[i]))
          dispatch(saveCards(idRandom[i]))
        }
      }
      navigation.navigate('OpenPackScreen') 
  } 
  

  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity 
        style={styles.touchableContainer}
        onPress={() => handlerPack(1)}>
          <Card style={styles.cardContainer}>
              <Text style={styles.text}>Sobre Gratuito</Text>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.touchableContainer} 
        onPress={() => handlerPack(3)}>
          <Card style={styles.cardContainer}>
              <Text style={styles.text}>Sobre X3</Text>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.touchableContainer}
        onPress={() => {console.log(cardsLoaded)}}>
          <Card style={styles.cardContainer}>
              <Text style={styles.text}>Prueba</Text>
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
    fontSize: 36,
    justifyContent: 'center',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: -1},
    textShadowRadius: 10,
    color: 'white',
    padding: 5
  }

})