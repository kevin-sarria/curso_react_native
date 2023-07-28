import {StyleSheet, Text, TouchableNativeFeedback, View, Platform, TouchableOpacity} from 'react-native';

interface Props {
  title: String;
  position?: 'br' | 'bl';
  onPress: () => void;
}

export const Fab = ({title, onPress, position = 'br'}: Props) => {

    const ios = () => {
        return (
            <TouchableOpacity
                activeOpacity={ 0.75 }
                style={[
                    styles.fabLocation,
                    position === 'bl' ? styles.left : styles.right,
                ]}
                onPress={onPress}
                >
                
                <View style={styles.fab}>
                    <Text style={styles.fabText}>{title}</Text>
                </View>
                
            </TouchableOpacity>
        );
    }

    const android = () => {
        return (
            <View
                style={[
                    styles.fabLocation,
                    position === 'bl' ? styles.left : styles.right,
                ]}>
                <TouchableNativeFeedback onPress={onPress} background={TouchableNativeFeedback.Ripple('rgba(255, 255, 255, 0.3)', false, 30)}>
                    <View style={styles.fab}>
                        <Text style={styles.fabText}>{title}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }

  return (Platform.OS === 'ios') ? ios() : android();
};

const styles = StyleSheet.create({
  fabLocation: {
    position: 'absolute',
    bottom: 15,
  },
  left: {
    left: 15,
  },
  right: {
    right: 15,
  },
  fab: {
    backgroundColor: '#28BFF3',
    borderRadius: 100,
    width: 60,
    height: 60,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  fabText: {
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
