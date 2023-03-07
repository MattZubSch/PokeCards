import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { POKEMONS } from '../data/pokemon'
import PokemonCard from '../components/PokemonCard'


const OpenPackScreen = () => {

    const renderPokemonCards = ({ item }) => (
            <View>
              <PokemonCard item={item} />
            </View>
      )
    
  return (
        <View style={styles.container}>
           
              <FlatList
                data={POKEMONS}
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
        // alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "black",
      },
})