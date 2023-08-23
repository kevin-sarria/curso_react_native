import { Text, View } from 'react-native';
import { styles } from '../theme';
import { BotonCalc } from '../components';
import { UseCalculadora } from '../hooks';

export const CalculadoraScreen = () => {

  const {
    armarNumero,
    botonDividir,
    botonMultiplicar,
    botonRestar,
    botonSumar,
    btnDelete,
    calcular,
    limpiar,
    numero,
    numeroAnterior,
    positivoNegativo
  } = UseCalculadora();

  return (
    <View style={styles.calculadoraContainer}>

        {
          (numeroAnterior !== '0') && (<Text style={styles.resultadoPequeno}>{ numeroAnterior }</Text>)
        }

        <Text
          style={styles.resultado}
          numberOfLines={1}
          adjustsFontSizeToFit
        >
          { numero }
        </Text>

        <View style={styles.fila}>
            {/* Fila de botones */}
            <BotonCalc texto='C' action={limpiar} />
            <BotonCalc texto='+/-' action={positivoNegativo} />
            <BotonCalc texto='del' action={btnDelete} />
            <BotonCalc texto='/' color="#FF9427" action={botonDividir} />
        </View>

        <View style={styles.fila}>
            {/* Fila de botones */}
            <BotonCalc texto='7' action={armarNumero} />
            <BotonCalc texto='8' action={armarNumero} />
            <BotonCalc texto='9' action={armarNumero} />
            <BotonCalc texto='X' color="#FF9427" action={botonMultiplicar} />
        </View>

        <View style={styles.fila}>
            {/* Fila de botones */}
            <BotonCalc texto='4' action={armarNumero} />
            <BotonCalc texto='5' action={armarNumero} />
            <BotonCalc texto='6' action={armarNumero} />
            <BotonCalc texto='-' color="#FF9427" action={botonRestar} />
        </View>
        
        <View style={styles.fila}>
            {/* Fila de botones */}
            <BotonCalc texto='1' action={armarNumero} />
            <BotonCalc texto='2' action={armarNumero} />
            <BotonCalc texto='3' action={armarNumero} />
            <BotonCalc texto='+' color="#FF9427" action={botonSumar} />
        </View>

        <View style={styles.fila}>
            {/* Fila de botones */}
            <BotonCalc texto='0' action={armarNumero} ancho />
            <BotonCalc texto='.' action={armarNumero} />
            <BotonCalc texto='=' color="#FF9427" action={calcular} />
        </View>

    </View>
  )
}
