import { useState } from 'react';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { PrimaryButton, styles } from '../components';
import { Button } from 'react-native-paper';

export const CounterScreen = () => {

    const [ counter, setCounter ] = useState(0);

  return (
    <View style={ styles.container }>
        <Text style={ styles.title }>{counter}</Text>

        {/* <PrimaryButton
            nameButton='Incrementar'
            onPress={ () => setCounter( counter + 1 ) }
            onLongPress={ () => setCounter(0) }
        /> */}

        <Button
            onPress={ () => setCounter( counter + 1 ) }
            onLongPress={ () => setCounter(0) }
            mode='contained'
        >
            Incrementar
        </Button>

    </View>
  )
}