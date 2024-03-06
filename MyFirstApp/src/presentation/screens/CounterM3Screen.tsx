import { useState } from 'react';
import { Text, View } from 'react-native';
import { Button, FAB } from 'react-native-paper';
import { globalStyles } from '../components/theme/global.styles';

import Icon from 'react-native-vector-icons/Ionicons';

export const CounterM3Screen = () => {

    const [ counter, setCounter ] = useState(0);

  return (
    <View style={ globalStyles.centerContainer }>
        <Text style={ globalStyles.title }>{counter}</Text>

        {/* <Icon name='accessibility-outline' size={25} /> */}

        {/* <Button
            onPress={ () => setCounter( counter + 1 ) }
            onLongPress={ () => setCounter(0) }
            mode='contained'
        >
            Incrementar
        </Button> */}

        <FAB
            // label='+1'
            icon="add"
            onPress={ () => setCounter( counter + 1 ) }
            onLongPress={ () => setCounter(0) }
            style={ globalStyles.fab }
        />

    </View>
  )
}