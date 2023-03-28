import { FlatList, StyleSheet, View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createCards } from '../store/actions/packScreen.action'


import PokemonCard from '../components/PokemonCard'

const OpenPackScreen = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const packFiltered = useSelector(state => state.packScreen.selected)
  const cardsLoaded = useSelector(state => state.packScreen.openCards)
  const cardList = useSelector(state => state.obtainedCards.obtainedCards)

  // function getCard(array) {
  //   for (let i = 0; i < array.length; i++) {
  //     dispatch(createCards(array[i]))
  //   }
  // }

  useEffect(() => {
    for (let i = 0; i < packFiltered.length; i++) {
      dispatch(createCards(packFiltered[i]))
    }
    setLoading(false)
  }, [])

  // getCard(packFiltered)
  // console.log(packFiltered.length)


  
  const renderPokemonCards = ({ item }) => (
    <View>
      <PokemonCard item={item} />
    </View>  
      ) 
      
      // if (!Array.isArray(packFiltered)) {
      //   return (  
      //     <View style={styles.container}>
      //       <Text>OpenPackScreen</Text>
      //       {/* <FlatList
      //         data={[packFiltered]}
      //         renderItem={renderPokemonCards}
      //         keyExtractor={item => item.id} 
      //         horizontal={true} 
    //       /> */}
      //     </View>
      //   )
      // }
      if (!loading) {

      return (  
        <View style={styles.container}>
      <Text>OpenPackScreen</Text>
      <FlatList
        data={cardsLoaded}
        renderItem={renderPokemonCards}
        keyExtractor={item => item.id} 
        horizontal={true} 
      />
    </View>
  )
}}

export default OpenPackScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
        shadowColor: "black",
        padding: 50,
        //paddingBottom: 0,
        //paddingTop: 0
      }
    })
    
    
    
    
    // console.log(Array.isArray(packFiltered))
    
    // async function getCards(id) {
    //   const dataPack = []
    //   if (Array.isArray(id)) {
    //     try {
    //       const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
          
    //       const result = await response.json()
    //       // console.log(result)
    //       dataPack.push(result)
    //     } catch (error) {
    //       console.log(error.message)
    //     }
    //   }  else {
    //     for (let i = 0; i < id.length; i++) {
    //       try {
    //         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            
    //         const result = await response.json()
    //         dataPack.push(result)
    //       } catch (error) {
    //         console.log(error.message)
    //       }
    //     }
    //   } 
    //   console.log(dataPack)
    //   console.log(dataPack.length)
    // }
    // // const dataPack = []
    // // dataPack.push(getCards(packFiltered))
    
    // getCards(packFiltered)