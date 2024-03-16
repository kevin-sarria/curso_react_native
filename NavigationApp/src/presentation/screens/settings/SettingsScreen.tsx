import { Text, View } from "react-native"
import { globalStyles } from "../../theme/theme"
import { PrimaryButton } from "../../components/shared/PrimaryButton"
import { type NavigationProp, useNavigation, StackActions } from "@react-navigation/native"
import { type RootStackParams } from "../../routes/StackNavigator"

export const SettingsScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={ globalStyles.container }>

        <Text style={{ marginBottom: 10 }}>Settings Screen</Text>

        <PrimaryButton
          label="Regresar"
          onPress={ () => { navigation.goBack() } }
        />

        <PrimaryButton
          label="Regresar al Home"
          onPress={ () => { navigation.dispatch( StackActions.popToTop() ) } }
        />

    </View>
  )
}
