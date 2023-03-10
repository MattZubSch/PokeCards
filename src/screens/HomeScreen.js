import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TouchableHighlight } from 'react-native'
import React from 'react'

import Card from '../components/Card'
import Colors from '../constants/Colors'

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* <Header title={'PokeCards'}/> */}
            <TouchableOpacity
            style={styles.touchableContainer}
            onPress={() => {navigation.navigate('BoosterPackScreen')}}>
          <Card style={styles.cardContainer}>
              <Text style={styles.text}>Comprar Sobres</Text>
          </Card>
            </TouchableOpacity>
            <TouchableHighlight style={styles.touchableContainer}>
          <Card style={styles.cardContainer}>
              <Text style={styles.text}>Lista de Cartas</Text>
          </Card>
            </TouchableHighlight>
            <TouchableHighlight style={styles.touchableContainer}>
          <Card style={styles.cardUncomming}>
              <Text style={styles.text}>Tiendas de Cartas</Text>
          </Card>
            </TouchableHighlight>
            <TouchableHighlight style={styles.touchableContainer}>
          <Card style={styles.cardUncomming}>
              <Text style={styles.text}>Conseguir Monedas</Text>
          </Card>
          </TouchableHighlight>
            <TouchableHighlight style={styles.touchableContainer}>
          <Card style={styles.cardUncomming}>
              <Text style={styles.text}>Intercambiar Cartas</Text>
          </Card>
            </TouchableHighlight>
      </View>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    shadowColor: "black",
    flexDirection: "column",
  },
  cardContainer: {
    margin: 3,
    padding: 5,
    height: 150,
    // width: '90%',
    shadowColor: 'black',
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    alignItems: "center",
    backgroundColor: Colors.primary,
    justifyContent: 'center',
  },
  cardUncomming: {
    margin: 3,
    padding: 5,
    height: 150,
    // width: '90%',
    shadowColor: 'black',
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    alignItems: "center",
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
  },
  touchableContainer: {
    width: '90%',
  },
  text: {
    fontFamily: "GothicNewMedium",
    fontSize: 36,
    justifyContent: 'center',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: -1},
    textShadowRadius: 10,
    color: 'white',
    padding: 5
  }
})