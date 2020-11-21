import React from 'react';
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native';


const Cita = ({item, eliminarPaciente}) => {

    const dialogoEliminar = id => {
        console.log('eliminando...', id);
        eliminarPaciente(id);
    }

    return (
        <View style = {styles.cita}>
            <View>
                <Text style = {styles.label}>Paciente:</Text>
                <Text style={styles.texto}>{item.paciente}</Text>
            </View>
            <View>
                <Text style = {styles.label}>Propietario:</Text>
                <Text style={styles.texto}>{item.propietario}</Text>
            </View>
            <View>
                <Text style = {styles.label}>Síntomas:</Text>
                <Text style={styles.texto}>{item.sintomas}</Text>
            </View>

            <View>
                <TouchableHighlight onPress={ () => dialogoEliminar(item.id)} style={styles.btnElimnar}>
                    <Text style={styles.textoEliminar}> Eliminar &times; </Text>
                </TouchableHighlight>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    cita: {
        backgroundColor: '#FFF',
        borderBottomColor: '#E1E1E1',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    label: {
        fontWeight: 'bold',
        fontSize: 14,
        marginTop: 5
    },
    texto:{
        fontSize: 14,
    },
    btnElimnar:{
        padding: 5,
        backgroundColor: 'red',
        marginVertical: 10
    },
    textoEliminar: {
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default Cita;