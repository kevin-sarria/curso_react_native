import { Text, View } from 'react-native';

export const HolaMundoScreen = () => {
  return (
    <View style={{
        flex: 1,
        // backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Text style={{
          fontSize: 45
        }}>
          Hola Mundo!!!
        </Text>
      </View>
  )
}
