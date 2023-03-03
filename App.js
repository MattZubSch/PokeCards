import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import BoosterPackNavigation from './src/navigation/BoosterPackNavigation';

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [loaded] = useFonts({
    GothicNewRegular: require('./assets/fonts/Zen_Kaku_Gothic_New/ZenKakuGothicNew-Regular.ttf'),
    GothicNewMedium: require('./assets/fonts/Zen_Kaku_Gothic_New/ZenKakuGothicNew-Medium.ttf'),
    GothicNewBold: require('./assets/fonts/Zen_Kaku_Gothic_New/ZenKakuGothicNew-Bold.ttf'),
  })
  
  if (!loaded) return <AppLoading />
  
  return (
     <BoosterPackNavigation style={styles.container} />
     
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
