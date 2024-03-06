import { Platform, Pressable, Text } from 'react-native';
import { styles } from '.';

interface Props {
    nameButton?: string;
    onPress?: () => void;
    onLongPress?: () => void;
}

export const PrimaryButton = ({ nameButton = 'Click Me!', onPress, onLongPress }: Props) => {
  return (
    <Pressable
        onPress={onPress}
        onLongPress={onLongPress}
        style={ ({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed
        ] }
    >
        <Text
            style={{
                color: Platform.OS === 'android' ? 'white' : '#4746AB'
            }}
        >
            { nameButton }
        </Text>

    </Pressable>
  )
}
