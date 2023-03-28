import { Image, StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'
// import { useSelector } from 'react-redux' 

import Card from './Card'
import Colors from '../constants/Colors'

const PokemonCard = ({item}) => {
    
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
                    <Card style={styles.cardContainer}>
                        <Text style={styles.typeText}>{item.types[0].type.name}</Text>
                    </Card>
                </View>
            )}
            {item.types.length === 2 && (
                <View style={styles.typeContainer}>
                    <Card style={styles.cardContainer}>
                        <Text style={styles.typeText}>{item.types[0].type.name}</Text>
                    </Card>
                    <Card style={styles.cardContainer}>
                        <Text style={styles.typeText}>{item.types[1].type.name}</Text>
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
      },
      typeContainer: {
        flexDirection: "row",
      }
})