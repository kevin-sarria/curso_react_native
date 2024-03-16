import { Pressable, Text } from "react-native"
import { globalStyles } from "../../theme/theme"

interface Props {
    onPress: () => void;
    label?: string;
}

export const PrimaryButton = ({ onPress, label = 'Click Me!' }: Props) => {
  return (
    <Pressable
        onPress={ () => onPress()}
        style={ globalStyles.primaryButton }
    >
        <Text style={ globalStyles.buttonText }>{label}</Text>
    </Pressable>
  )
}
