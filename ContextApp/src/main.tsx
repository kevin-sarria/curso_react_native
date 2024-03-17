import { NavigationContainer } from "@react-navigation/native"
import { Text, View } from "react-native"
import { BottomTabNavigator } from "./presentation/navigators"

export const main = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  )
}
