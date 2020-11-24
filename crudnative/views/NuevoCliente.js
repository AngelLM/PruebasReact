import Axios from 'axios';
import React, { useState } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { TextInput, Headline, Button, Paragraph, Dialog, Portal } from 'react-native-paper';
import globalStyles from '../styles/global';
import axios from 'axios'

const NuevoCliente = () => {

    // campos formulario
    const [ nombre, guardarNombre ] = useState(''); 
    const [ telefono, guardarTelefono ] = useState(''); 
    const [ correo, guardarCorreo ] = useState(''); 
    const [ empresa, guardarEmpresa ] = useState(''); 
    const [ alerta, guardarAlerta ] = useState(false); 

    // almacena el cliente en la DB
    const guardarCliente = async () => {
        // validar
        if(nombre === '' || telefono === '' || correo === '' || empresa === ''){
            guardarAlerta(true);
            return;
        }

        // generar el cliente
        const cliente = { nombre, telefono, correo, empresa };
        console.log(cliente);

        // guardar el cliente en la API
        try {
            if(Platform.OS == 'ios'){
                await axios.post('http://10.0.2.2:3000/clientes', cliente);  // para iOS
            } else {
                axios.post('http://127.0.0.1:3000/clientes', cliente); // para Android
            }

        } catch (error) {
            console.log(error);
        }

        // redireccionar

        // limpiar el form (opcional)
    }

    return (
        <View style = {globalStyles.contenedor}>

            <Headline style = {globalStyles.titulo}>Añadir Nuevo Cliente</Headline>
            
            <TextInput
                label="Nombre"
                placeholder="Juan"
                onChangeText={ (texto) => guardarNombre(texto) }
                value={ nombre }
                style={styles.input}
            />
            <TextInput
                label="Teléfono"
                placeholder="123456789"
                onChangeText={ (texto) => guardarTelefono(texto) }
                value={ telefono }
                style={styles.input}
            />
            <TextInput
                label="Correo"
                placeholder="correo@correo.com"
                onChangeText={ (texto) => guardarCorreo(texto) }
                value={ correo }
                style={styles.input}
            />
            <TextInput
                label="Empresa"
                placeholder="Nombre Empresa"
                onChangeText={ (texto) => guardarEmpresa(texto) }
                value={ empresa }
                style={styles.input}
            />
           
           <Button icon = "pencil-circle" mode='contained' onPress={() => guardarCliente()} >
               Guardar Cliente
           </Button>

            <Portal>
                <Dialog
                    visible={alerta}
                    onDismiss={ () => guardarAlerta(false) }
                >
                    <Dialog.Title>Error</Dialog.Title>
                    <Dialog.Content>
                        <Paragraph>Todos los campos son obligatorios</Paragraph>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={ () => guardarAlerta(false) }>OK</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 20,
        backgroundColor: 'transparent'
    }
});

export default NuevoCliente;