import React, {useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableHighlight} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'


const App = () => {

  const[ inputTexto, guardarInputTexto ] = useState('');
  const [nombreStorage, guardarNombreStorage ] = useState('');
  
  useEffect(() => {
    obtenerDatosStorage();
  }, []);

  const guardarDatos = async () => {
    try {
      await AsyncStorage.setItem('nombre', inputTexto);
      guardarNombreStorage(inputTexto);
      console.log('hey')
    } catch (error) {
      console.log(error);
    }
  }

  const obtenerDatosStorage = async () => {
    try{
      const nombre = await AsyncStorage.getItem('nombre');
      guardarNombreStorage(nombre);
    } catch(error){
      console.log(error);
    }
  }

  const eliminarDatos = async () => {
    try{
      await AsyncStorage.removeItem('nombre');
      guardarNombreStorage('');
    } catch(error){
      console.log(error);
    }
  }

  return (
    <>
      <View style={styles.contenedor}>
        {nombreStorage ? (<Text>Hola {nombreStorage}</Text>) : (<Text>Y tú... ¿te llamabas?</Text>)}
        <TextInput 
          placeholder='Escribe tu nombre'
          style={styles.input}
          onChangeText={ texto => guardarInputTexto(texto) }
        />

        <Button 
          title='Guardar'
          color='#333'
          onPress={ () => guardarDatos() }
        />

        {nombreStorage ? (
          <TouchableHighlight 
          style={styles.btnEliminar}
          onPress = { () => eliminarDatos() }
          >
            <Text style={styles.textoEliminar}>Eliminar Nombre &times;</Text>
          </TouchableHighlight>
        ) : null}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    borderColor: '#666',
    borderBottomWidth: 1,
    width: 300,
    height: 40,
    marginBottom: 10
  },
  btnEliminar: {
    backgroundColor: 'red',
    marginTop: 20,
    padding: 10
  },
  textoEliminar: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    width: 300
  }
});

export default App;
