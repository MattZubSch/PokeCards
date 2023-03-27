import { FlatList, StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import PokemonCard from '../components/PokemonCard'

const OpenPackScreen = () => {

  const packFiltered = useSelector(state => state.packScreen.selected)
  const cardList = useSelector(state => state.obtainedCards.obtainedCards)

  console.log(cardList)


  const renderPokemonCards = ({ item }) => (
    <View>
      <PokemonCard item={item} />
    </View>  
      ) 
      
      if (!Array.isArray(packFiltered)) {
        return (  
          <View style={styles.container}>
            <FlatList
              data={[packFiltered]}
              renderItem={renderPokemonCards}
              keyExtractor={item => item.id} 
              horizontal={true} 
            />
          </View>
        )
      }
  return (  
    <View style={styles.container}>
      <FlatList
        data={packFiltered}
        renderItem={renderPokemonCards}
        keyExtractor={item => item.id} 
        horizontal={true} 
      />
    </View>
  )
}

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