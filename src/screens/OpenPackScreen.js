import { FlatList, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createCards } from '../store/actions/packScreen.action'


import PokemonCard from '../components/PokemonCard'

const OpenPackScreen = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const packFiltered = useSelector(state => state.packScreen.selected)
  const cardsLoaded = useSelector(state => state.packScreen.openCards)


  useEffect(() => {
    for (let i = 0; i < packFiltered.length; i++) {
      dispatch(createCards(packFiltered[i]))
    }
    setLoading(false)

  }, [])


  
  const renderPokemonCards = ({ item }) => (
    <View>
      <PokemonCard item={item} />
    </View>  
      ) 
      
      if (!loading) {

      return (  
        <View style={styles.container}>
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
      }
    })