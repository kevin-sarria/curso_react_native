import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Fab } from "../components";

export const CounterScreen = () => {

    const [ counter, setCounter ] = useState(10)

  return (
    <View style={styles.container}>
        <Text style={styles.title}>
            Contador: {counter}
        </Text>

        <Fab
            title="-1"
            onPress={ () => setCounter(counter - 1) }
            position="bl"
        />

        <Fab
            title="+1"
            onPress={ () => setCounter(counter + 1) }
            position="br"
        />

    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    title: {
        textAlign: "center",
        fontSize: 40,
        top: -15,
    }
});