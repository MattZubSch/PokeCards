import { Image, StyleSheet, Text, View } from 'react-native'

import Card from './Card'
import Colors from '../constants/Colors'
import React from 'react'

const PokemonCard = ({item}) => {
    

  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.titleText}>{item.name}</Text>
        </View>
        <View>
            <Image 
            style={styles.img}
            source={{
                uri: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+item.pokedexNum+'.png'
            }}/>
        </View>
        <View>
            <Text>#{item.pokedexNum}</Text>
        </View>
        <View>
            <Card style={{...styles.cardContainer, ...{backgroundColor: item.colorType}}}>
                <Text>{item.type}</Text>
            </Card>
        </View>
    </View>
  )
}

export default PokemonCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: "center",
        shadowColor: "black",
        flexDirection: "column",
        borderColor: "black",
        borderRadius: 10,
        borderWidth: 1,
        marginLeft: 10,
        marginRight: 10
    },
    img: {
        width: 300,
        height: 300
    },
    cardContainer: {
        margin: 3,
        padding: 5,
        // height: 150,
        // width: '90%',
        shadowColor: 'black',
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 10,
        alignItems: "center",
        justifyContent: 'center',
      },
      titleText: {
        fontSize: 32,
        fontFamily: "GothicNewBold"
      }
})