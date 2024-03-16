import { DrawerActions, useNavigation } from "@react-navigation/native"
import { useEffect } from "react";
import { Pressable, Text } from "react-native"
import { IonIcon } from "./IonIcon";
import { globalColors } from "../../theme/theme";

export const HamburgerMenu = () => {

    const navigation = useNavigation();

    useEffect( () => {
        navigation.setOptions({
            headerLeft: () => (
                <Pressable
                    onPress={ () => navigation.dispatch(DrawerActions.toggleDrawer()) }
                    style={{
                        marginLeft: 5
                    }}
                >
                    <IonIcon name="menu-outline" color={ globalColors.primary } size={20} />
                </Pressable>
            )
        })
    } );

  return (
    <>
    </>
  )
}
