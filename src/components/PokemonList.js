import { Image, StyleSheet, Text, View, Dimensions } from 'react-native'

import Card from './Card'
import Colors from '../constants/Colors'
import React from 'react'

const PokemonList = ({item}) => {
    

  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.titleText}>{item.name}</Text>
        </View>
        <View style={styles.imgContainer}>
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

export default PokemonList

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
        // marginLeft: 10,
        // marginRight: 10,
        margin: 10
    },
    imgContainer: {
        width: Dimensions.get('window').width / 4,
        height: Dimensions.get('window').height / 8
    },
    img: {
        width: "100%",
        height: "100%",
        padding: 10 
        // width: Dimensions.get('window').width / 5,
        // height: Dimensions.get('window').height / 6
    },
    cardContainer: {
        margin: 3,
        padding: 5,
        shadowColor: 'black',
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 10,
        alignItems: "center",
        justifyContent: 'center',
      },
      titleText: {
        fontSize: 16,
        fontFamily: "GothicNewBold"
      }
})