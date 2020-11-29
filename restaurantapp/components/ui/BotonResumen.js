import React, { useContext } from 'react';
import { Button, Text, Icon } from 'native-base';
import globalStyles from '../../styles/global';
import { useNavigation } from '@react-navigation/native';
import PedidoContext from '../../context/pedidos/pedidosContext';

const BotonResumen = () => {

    const navigation = useNavigation();

    const { pedido } = useContext(PedidoContext);

    if (pedido.length === 0) return null;   // Si no hay nada añadido al pedido, retornamos null para no enseñar el botón

    return ( 
        <Button 
            style={globalStyles.botonTopbar}
            onPress={ () => navigation.navigate('ResumenPedido')}
        >
            {/* <Text style={globalStyles.botonTexto}>Pedido</Text>
             */}
            <Icon style={{fontSize: 25, color:'#000'}} name="cart" />
        </Button>
     );
}
 
export default BotonResumen;