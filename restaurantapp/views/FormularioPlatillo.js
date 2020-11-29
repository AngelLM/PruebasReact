import React, {useState, useContext, useEffect } from 'react';
import { Alert } from 'react-native';
import {
    Container,
    Content,
    Form,
    Icon,
    Input,
    Grid,
    Col,
    Button,
    Text,
    Footer,
    FooterTab
} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import globalStyles from '../styles/global';

import PedidoContext from '../context/pedidos/pedidosContext';

const FormularioPlatillo = () => {

    // State para cantidades
    const [cantidad, guardarCantidad] = useState(1);
    const [total, guardarTotal] = useState(0);

    // Context
    const { platillo, guardarPedido } = useContext(PedidoContext);
    const { precio } = platillo;

    // En cuanto el componente carga, calcular la cantidad a pagar
    useEffect(() => {
        calcularTotal();
    },[cantidad]);
    
    // Se decrementa en uno la cantidad
    const decrementarUno = () => {
        if (cantidad>1){
            const nuevaCantidad = parseInt(cantidad) - 1;
            guardarCantidad(nuevaCantidad); 
        }
    }
    
    // Se incrementa en uno la cantidad
    const incrementarUno = () => {
        const nuevaCantidad = parseInt(cantidad) + 1;
        guardarCantidad(nuevaCantidad);
    }

    // Calcula el total del platillo por su cantidad
    const calcularTotal = () => {
        const totalPagar = precio * cantidad;
        guardarTotal(totalPagar);
    }

    // redireccionar
    const navigation = useNavigation();

    // Confirma si la orden es correcta
    const confirmarOrden = () => {
        Alert.alert(
            '¿Deseas confirmar tu pedido?',
            'Un pedido confirmado ya no se podrá modificar',
            [
                {
                    text: 'Confirmar',
                    onPress:() => {
                        // Almacenar el pedido al pedido principal
                        const pedido = {
                            ...platillo,
                            cantidad,
                            total
                        }
                        guardarPedido(pedido)
                        
                        // Navegar hacia el resumen
                        navigation.navigate('ResumenPedido');

                    }
                },
                {
                    text: 'Cancelar',
                    style: 'cancel'
                }
            ]
        )
    }

    return ( 
        <Container>
            <Content>
                <Form>
                    <Text style={globalStyles.titulo}>Cantidad</Text>
                    <Grid>
                        <Col>
                            <Button
                                props
                                dark
                                style={{height:80, width: '100%', justifyContent:'center'}}
                                onPress={ () => decrementarUno() }
                                // onPress={ () => {parseInt(cantidad)>1?guardarCantidad(parseInt(cantidad)-1):null} }   // Esto también valdría
                            >
                                <Icon style={{fontSize: 40}} name="remove" />
                            </Button>
                        </Col>
                        <Col>
                            <Input 
                                style={{textAlign:'center', fontSize: 20}}
                                value={cantidad.toString()}
                                keyboardType="numeric"
                                onChangeText={ (cantidad) => guardarCantidad(cantidad)}
                            />
                        </Col>
                        <Col>
                        <Button
                                props
                                dark
                                style={{height:80, width: '100%', justifyContent:'center'}}
                                onPress={ () => incrementarUno() }
                                // onPress={ () => {guardarCantidad(parseInt(cantidad) + 1)} }   // Esto también valdría
                            >
                                <Icon style={{fontSize: 40}} name="add" />
                            </Button>
                        </Col>
                    </Grid>
                    <Text style={globalStyles.cantidad}>Subtotal: {total}€</Text>
                </Form>
            </Content>
            <Footer>
                <FooterTab>
                    <Button 
                        style={globalStyles.boton}
                        onPress={ () => confirmarOrden() }
                    >
                        <Text style={globalStyles.botonTexto}>Agregar al pedido</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
     );
}
 
export default FormularioPlatillo;