import { StyleSheet, Text, View } from 'react-native'
import BoosterPackNavigation from './src/navigation/BoosterPackNavigation'
import { NavigationContainer } from '@react-navigation/native'

import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'

import { Provider } from 'react-redux'
import store from './src/store'

export default function App() {
  const [loaded] = useFonts({
    GothicNewRegular: require('./assets/fonts/Zen_Kaku_Gothic_New/ZenKakuGothicNew-Regular.ttf'),
    GothicNewMedium: require('./assets/fonts/Zen_Kaku_Gothic_New/ZenKakuGothicNew-Medium.ttf'),
    GothicNewBold: require('./assets/fonts/Zen_Kaku_Gothic_New/ZenKakuGothicNew-Bold.ttf'),
  })
  
  if (!loaded) return <AppLoading />
  
  return (
    <Provider store={store}>

      <BoosterPackNavigation style={styles.container} />

    </Provider>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
