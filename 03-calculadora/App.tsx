import { SafeAreaView, StatusBar } from 'react-native';
import { CalculadoraScreen } from './src/screens';
import { styles } from './src/theme';

export const App = () => {
  return (
    <SafeAreaView style={ styles.fondo }>
      <StatusBar backgroundColor="black" barStyle='light-content' />
      <CalculadoraScreen />
    </SafeAreaView>
  )
}