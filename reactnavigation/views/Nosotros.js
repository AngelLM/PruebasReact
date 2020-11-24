import React from 'react';
import { Text , StyleSheet, View, Button} from 'react-native';

const Nosotros = ({navigation, route}) => {

    const { clienteId, totalpagar } = route.params;

    const volver = () => {
        navigation.navigate('Inicio');
        // navigation.goBack();
        // navigation.push('Inicio')
    }

    return(
        <View style={styles.condenedor}>
            {/* <Text>{route.params.clienteId} {route.params.totalpagar}</Text> */}
            <Text>{clienteId} {totalpagar}</Text>
            <Button
                title="Volver"
                onPress={ () => volver()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    condenedor: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Nosotros;