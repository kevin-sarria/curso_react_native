import { StyleSheet, Text, View } from "react-native"

export const BoxObjectModelScreen = () => {
  return (
    <View style={ styles.container }>
        <Text style={ styles.title }>Box Object Model</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "red"
    },
    title: {
      fontSize: 20,
      // width: 250,
      borderWidth: 10
      // backgroundColor: "red"
    }
});
