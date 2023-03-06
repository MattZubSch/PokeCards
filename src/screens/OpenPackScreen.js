import { StyleSheet, Text, View, FlatList } from 'react-native'
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
    <View>
      <FlatList
        data={POKEMONS}
        renderItem={renderPokemonCards}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default OpenPackScreen

const styles = StyleSheet.create({})