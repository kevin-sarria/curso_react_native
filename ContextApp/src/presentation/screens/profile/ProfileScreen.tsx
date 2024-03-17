import { Pressable, Text, View } from 'react-native'
import { styles } from '../../../config'
import { useProfileStore } from '../../store/profile-store'

export const ProfileScreen = () => {

  const name = useProfileStore( state => state.name );
  const email = useProfileStore( state => state.email );
  const changeProfile = useProfileStore( state => state.changeProfile );

  return (
    <View style={ styles.container }>
        <Text style={ styles.title }>{ name }</Text>
        <Text style={ styles.title }>{ email }</Text>

        <Pressable
          style={ styles.primaryButton }
          onPress={ () => { useProfileStore.setState({ name: 'Kevin Sarria' }) } }
        >
          <Text>Cambiar Nombre</Text>
        </Pressable>

        <Pressable
          style={ styles.primaryButton }
          onPress={ () => { useProfileStore.setState({ email: 'jose@jose.com' }) } }
        >
          <Text>Cambiar Email</Text>
        </Pressable>

        <Pressable
          style={ styles.primaryButton }
          onPress={ () => { changeProfile('Jhon Doe', 'correo@correo.com' ) }}
        >
          <Text>Regresar a Jhon</Text>
        </Pressable>

    </View>
  )
}
