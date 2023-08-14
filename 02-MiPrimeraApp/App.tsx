import {SafeAreaView} from 'react-native';
import {
  BoxObjectModelScreen,
  CounterScreen,
  HolaMundoScreen,
} from './src/screens';
import { PositionScreen } from './src/screens/PositionScreen';
import { FlexScreen } from './src/screens/FlexScreen';
import { TareaScreen } from './src/screens/TareaScreen';

export const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
       { /* <HolaMundoScreen /> */ }
       { /* <CounterScreen /> */ }
      {/* <BoxObjectModelScreen /> */}
      {/* <PositionScreen /> */}
      {/* <FlexScreen /> */}
      <TareaScreen />
    </SafeAreaView>
  );
};