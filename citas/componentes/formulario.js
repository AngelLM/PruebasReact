import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput} from 'react-native';

const Formulario = () => {
    return(
        <>
        <View style={styles.formulario}>
            <View>
                <Text style={styles.label}>Paciente: </Text>
                <TextInput 
                    style = {styles.input}
                    onChangeText={ (texto) => console.log(texto) }
                />
            </View>

            <View>
                <Text style={styles.label}>Dueño: </Text>
                <TextInput 
                    style = {styles.input}
                    onChangeText={ (texto) => console.log(texto) }
                />
            </View>

            <View>
                <Text style={styles.label}>Teléfono Contacto: </Text>
                <TextInput 
                    style = {styles.input}
                    onChangeText={ (texto) => console.log(texto) }
                    keyboardType = 'numeric'
                />
            </View>

            <View>
                <Text style={styles.label}>Síntomas: </Text>
                <TextInput 
                    style = {styles.input}
                    onChangeText={ (texto) => console.log(texto) }
                    multiline
                />
            </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    formulario:{
        backgroundColor:'#FFF',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginHorizontal: '2.5%'
    },
    label: {
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 20,
    },
    input:{
        marginTop: 10,
        height: 50,
        borderColor: '#e1e1e1',
        borderWidth: 1,
        borderStyle: 'solid',
    }
})

export default Formulario;

