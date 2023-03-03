import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = props => {
    const { title } = props
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create ({
    header: {
        width: '100%',
        height: 80,
        paddingTop: 30,
        backgroundColor: 'lightgreen',
        alignItems: 'flex-start',
        justifyContent: 'center',
        
    },
    headerTitle: {
        color: 'black',
        fontSize: 20,
        marginLeft: "5%"
       
    }
})