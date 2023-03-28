import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Pokemon from '../models/pokemon'
import { useSelector, useDispatch } from 'react-redux'

const CreateCardScreen = () => {
    const [ loading, setLoading ] = useState(true)
    const [confirm, setConfirm] = useState(false)
    const [ pokemon, setPokemon ] = useState(null)
    const packToLoad = useSelector(state => state.packScreen.selected)
    const cardsToUpload = useSelector(state => state.obtainedCards.obtainedCards)

    for (let i = 0; i < packToLoad.length; i++) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${packToLoad[i]}`)
            .then(res => res.json())
            .then(data => {
                
            setConfirm(true)
            setPokemon(data)
            })
              .catch(err => {
                
              })
        if (confirm) {
            
        }
    }
          

  return (
    <View>
      <Text>CreateCardScreen</Text>
    </View>
  )
}

export default CreateCardScreen

const styles = StyleSheet.create({})