import { StyleSheet, Text, View } from "react-native"

export const BoxObjectModelScreen = () => {
  return (
    <View style={ styles.container }>
        {/* <Text style={ styles.title }>BoxObjectModel</Text> */}
        {/* <View style={ styles.purpleBox }></View> */}
        <View style={ styles.purpleBox }>
            <Text>Hola Mundo</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
    },
    title: {
        fontSize: 40,
        borderWidth: 10,
        paddingHorizontal: 30,
        paddingVertical: 10
    },
    purpleBox: {
        height: 30,
        backgroundColor: 'purple',
        // margin: 20
        marginHorizontal: 20,
        marginVertical: 50,
        padding: 5,

    }
});