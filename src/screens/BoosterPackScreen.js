import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import Card from '../components/Card'

const BoosterPackScreen = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity 
        style={styles.touchableContainer}
        onPress={() => {navigation.navigate('OpenPackScreen')}}>
          <Card style={styles.cardContainer}>
              <Text style={styles.text}>Sobre Gratuito</Text>
          </Card>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default BoosterPackScreen

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
  backgroundColor: 'lightblue',
  justifyContent: 'center'
},
touchableContainer: {
  width: '90%',
},
text: {
  fontFamily: "GothicNewMedium",
  fontSize: 24,
  justifyContent: 'center'

}})