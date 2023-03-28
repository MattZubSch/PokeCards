import { StyleSheet, Text, View, FlatList, Button } from 'react-native'
import React, {useState} from 'react'
import PokemonList from '../components/PokemonList'
import { useSelector } from 'react-redux'

const CardListScreen = () => {

  const cardReducer = useSelector(state => state.obtainedCards.obtainedCards)

  const INITIAL_PAGE_SIZE = 9;
  const [initialPage, setInitialPage] = useState(0)
  const [pageSize, setPageSize] = useState(INITIAL_PAGE_SIZE);
  const [numPage, setNumPage] = useState(1)
  

  if (cardReducer.length < 1) {
    return (
      <View>
        <Text>Aun no tienes cartas</Text>
      </View>
    )
  }
  
  const renderPokemonList = ({item}) => (
    <View>
      <PokemonList item={item} />
    </View>  
  )

  const handleLoadMore = () => {
    setInitialPage(initialPage + INITIAL_PAGE_SIZE)
    setPageSize(pageSize + INITIAL_PAGE_SIZE);
    setNumPage(numPage + 1)
  };

  const handleLoadLess = () => {
    setInitialPage(initialPage - INITIAL_PAGE_SIZE)
    setPageSize(pageSize - INITIAL_PAGE_SIZE);
    setNumPage(numPage - 1)
  };

  let pageTotal = Math.ceil(cardReducer.length / INITIAL_PAGE_SIZE)

  return (
    <View style={styles.container}>
      <FlatList
        data={cardReducer.slice(initialPage, pageSize)}
        renderItem={renderPokemonList}
        keyExtractor={item => item.id}
        horizontal={false}
        numColumns={3} 
        initialNumToRender={9}
      />
      <View style={styles.buttonContainer}>
      {initialPage >= INITIAL_PAGE_SIZE && (
        <Button 
        title="←" 
        onPress={handleLoadLess}
        style={styles.button} 
        />
      )}
      {initialPage < INITIAL_PAGE_SIZE && (
        <Button 
        title="←" 
        color={'grey'}
        />
      )}
      <View>
        <Text style={styles.indexText}>Pagina</Text>
        <Text style={styles.indexText}>{numPage} de {pageTotal}</Text>
      </View>
      {pageSize < cardReducer.length && (
          <Button 
          title="→" 
          onPress={handleLoadMore}
          style={styles.button}  
          />
      )}
      {pageSize > cardReducer.length && (
        <Button 
        title="→"  
        color={'grey'}
        />
      )}
        </View>
    </View>
  )
}

export default CardListScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "black",
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 16,
  },
  button: {
    margin: 16,
    justifyContent: 'space-between'
  },
  indexText: {
    marginRight: 16,
    marginLeft: 16
  }
})