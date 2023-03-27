import React, {useEffect} from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { clearPack, multipleCards, selectedCards } from '../store/actions/packScreen.action'
import { cardsObtained } from '../store/actions/cardList.action'
import { useDispatch, useSelector } from 'react-redux'

import Card from '../components/Card'

const BoosterPackScreen = ({navigation}) => {

  const dispatch = useDispatch()
  const pokemons = useSelector(state => state.packScreen.packs)
  const packFiltered = useSelector(state => state.packScreen.selected)


  
  const generateRandom = () => { 
    return Math.floor(Math.random() * (pokemons.length)).toString()
  }


  const handlerOpenPack = () => {
    dispatch(clearPack())
    let sort = generateRandom()
    dispatch(selectedCards(sort))
    navigation.navigate('OpenPackScreen')
  } 
  
  const handlerX3Pack = () => {
    dispatch(clearPack())
    let idRandom = []
    for (let i = 0; i < 3; i++) {
      let sort = generateRandom()
      if (idRandom.includes(sort)) {
        i--
      } else {
        idRandom.push(sort)
      }}
      for (let i = 0; i < idRandom.length; i++){
        dispatch(multipleCards(idRandom[i]))
      }
      dispatch(cardsObtained(idRandom))
      navigation.navigate('OpenPackScreen') 
  } 
         
    //   if (packFiltered.length === 0){
    //     dispatch(multipleCards(sort))
    //   } else {
    //     let check = packFiltered.findIndex(card => card.id === sort)
    //     console.log(check)
    //     console.log(packFiltered) 
    //     if (check === -1) {
    //       dispatch(multipleCards(sort))
    //     }
    //   }
    // }
    // navigation.navigate('OpenPackScreen')
  

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
    fontSize: 36,
    justifyContent: 'center',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: -1},
    textShadowRadius: 10,
    color: 'white',
    padding: 5
  }

})