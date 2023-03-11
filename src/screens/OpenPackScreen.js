import { FlatList, StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import PokemonCard from '../components/PokemonCard'
import { selectedCards } from '../store/actions/packScreen.action'

const OpenPackScreen = () => {

  const packFiltered = useSelector(state => state.packScreen.selected)


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
      },
})