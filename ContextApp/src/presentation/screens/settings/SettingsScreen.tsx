import { Pressable, Text, View } from "react-native"
import { styles } from "../../../config"
import { useCounterStore } from "../../store"
import { useEffect } from "react";
import { TabActions, useNavigation } from "@react-navigation/native";

export const SettingsScreen = () => {

  const number = useCounterStore( state => state.count );
  const incrementBy = useCounterStore( state => state.incrementBy );

  const navigation = useNavigation();

  useEffect( () => {
    navigation.setOptions({
      title: `Contador: ${number}`
    });
  }, [number] );

  return (
    <View style={ styles.container }>
        <Text style={ styles.title }>Count: {number}</Text>

        <Pressable
          style={ styles.primaryButton }
          onPress={ () => incrementBy(2) }
        >
          <Text>+2</Text>
        </Pressable>

        <Pressable
          style={ styles.primaryButton }
          onPress={ () => incrementBy(-2) }
        >
          <Text>-2</Text>
        </Pressable>

    </View>
  )
}
