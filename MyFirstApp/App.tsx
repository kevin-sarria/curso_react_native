import { SafeAreaView, Text, View } from "react-native"
import { CounterScreen, CounterM3Screen, BoxObjectModelScreen, HelloWorldScreen, DimensionScreen, PositionScreen } from "./src/presentation/screens";
import { PaperProvider } from "react-native-paper";

import IonIcon from 'react-native-vector-icons/Ionicons';

const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: (props) => <IonIcon {...props} />
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        {/* <CounterScreen /> */}
        {/* <CounterM3Screen /> */}
        {/* <BoxObjectModelScreen /> */}
        {/* <DimensionScreen /> */}
        <PositionScreen />
      </SafeAreaView>
    </PaperProvider>
  )
}

export default App;