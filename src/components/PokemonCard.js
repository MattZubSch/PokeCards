import { Image, StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'

import Card from './Card'
import Colors from '../constants/Colors'

const PokemonCard = ({item}) => {
    const getTypeColor = (type) => {
        if (type === "grass") return Colors.grass
        if (type === "fire") return Colors.fire
        if (type === "water") return Colors.water
        if (type === "flying") return Colors.flying
        if (type === "electric") return Colors.electric
        if (type === "normal") return Colors.normal
        if (type === "psychic") return Colors.psychic
        if (type === "dragon") return Colors.dragon
        if (type === "fighting") return Colors.fighting
        if (type === "poison") return Colors.poison
        if (type === "ground") return Colors.ground
        if (type === "rock") return Colors.rock
        if (type === "bug") return Colors.bug
        if (type === "ghost") return Colors.ghost
        if (type === "steel") return Colors.steel
        if (type === "ice") return Colors.ice
        if (type === "fairy") return Colors.fairy
        if (type === "dark") return Colors.dark
        }


  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.titleText}>{item.name}</Text>
        </View>
        <View style={styles.imgContainer}>
            <Image 
            style={styles.img}
            source={{
                uri: item.image
            }}/>
        </View>
        <View>
            <Text>#{item.id}</Text>
        </View>
            {item.types.length === 1 && (
                <View>
                    <Card style={{...styles.cardContainer, ...{backgroundColor: getTypeColor(item.types[0].type.name)}}}>
                        <Text style={styles.typeText}>{item.types[0].type.name.toUpperCase()}</Text>
                    </Card>
                </View>
            )}
            {item.types.length === 2 && (
                <View style={styles.typeContainer}>
                    <Card style={{...styles.cardContainer, ...{backgroundColor: getTypeColor(item.types[0].type.name)}}}>
                        <Text style={styles.typeText}>{item.types[0].type.name.toUpperCase()}</Text>
                    </Card>
                    <Card style={{...styles.cardContainer, ...{backgroundColor: getTypeColor(item.types[1].type.name)}}}>
                        <Text style={styles.typeText}>{item.types[1].type.name.toUpperCase()}</Text>
                    </Card>
                </View>
            )}
    </View>
  )    
}
// }

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
        marginRight: 10,
    },
    imgContainer: {
        width: 300,
        height: 300
    },
    img: {
        width: '100%',
        height: '100%'
    },
    cardContainer: {
        margin: 10,
        padding: 5,
        shadowColor: 'black',
        // flexDirection: "row",
        marginTop: 10,
        marginBottom: 10,
        alignItems: "space-between",
        // justifyContent: 'space-between',
      },
      titleText: {
        fontSize: 32,
        fontFamily: "GothicNewRegular"
      },
      typeText: {
        // alignContent: 'space-between'
        margin: 10,
        fontFamily: "GothicNewBold",
        color:  'white'
      },
      typeContainer: {
        flexDirection: "row",
      }
})