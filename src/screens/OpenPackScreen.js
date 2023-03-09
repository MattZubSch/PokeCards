import { StyleSheet, View, FlatList } from 'react-native'
import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { selectedCards} from '../store/actions/packScreen.action'

import PokemonCard from '../components/PokemonCard'


const OpenPackScreen = () => {
 
  const dispatch = useDispatch()
  const pokemons = useSelector(state => state.packScreen.packs)
  const packFiltered = useSelector(state => state.packScreen.selected)


  const generateRandom = () => { 
      return Math.floor(Math.random() * (pokemons.length)).toString()
      }
   
 
  const packShow = generateRandom()  

  useEffect(() => {
  dispatch(selectedCards(packShow))
  }, [])  
  console.log(packFiltered)    

  const renderPokemonCards = ({ item }) => (
            <View>
              <PokemonCard item={item} />
            </View>
      ) 
    
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
      },
})