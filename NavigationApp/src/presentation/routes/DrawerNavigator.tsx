import { View, useWindowDimensions } from "react-native";
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer"
import { globalColors } from "../theme/theme";

import { StackNavigator } from "./StackNavigator";
import { ProfileScreen } from "../screens/profile/ProfileScreen";
import { BottomTabsNavigator } from "./BottomTabsNavigator";
import { IonIcon } from "../components/shared/IonIcon";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {

    const { width, height } = useWindowDimensions();

  return (
    <Drawer.Navigator

        drawerContent={ (props) => (<CustomDrawerContent { ...props } />) }

        screenOptions={{
            headerShown: false,
            drawerType: ( width >= 758 ) ? 'permanent' : 'slide',

            drawerActiveBackgroundColor: globalColors.primary,
            drawerActiveTintColor: 'white',
            drawerInactiveTintColor: globalColors.primary,
            drawerItemStyle: {
                borderRadius: 100,
                paddingHorizontal: 20
            }
        }}
    >
      {/* <Drawer.Screen name="StackNavigator" component={StackNavigator} /> */}
      {/* <Drawer.Screen name="Tabs" component={BottomTabsNavigator} /> */}
      <Drawer.Screen options={{ drawerIcon: ({ color }) => (<IonIcon name="bonfire-outline" color={color} />) }} name="Tabs" component={BottomTabsNavigator} />
      <Drawer.Screen options={{ drawerIcon: ({ color }) => (<IonIcon name="person-circle-outline" color={color} />) }} name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  )
}

const CustomDrawerContent = (props: DrawerContentComponentProps) => {



    return (
        <DrawerContentScrollView>
            <View
                style={{
                    height: 200,
                    backgroundColor: globalColors.primary,
                    margin: 30,
                    borderRadius: 50,
                }}
            />
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}