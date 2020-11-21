import React, { useState } from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';
import Cita from './componentes/Cita';
import Formulario from './componentes/formulario';

const App = () => {

  // definir el state de citas
  const [citas, setCitas] = useState([
    {id: "1", paciente: "Hook", propietario: "Juan", sintomas: "No Come"},
    {id: "2", paciente: "Redux", propietario: "Itzel", sintomas: "No Duerme"},
    {id: "3", paciente: "Native", propietario: "Josue", sintomas: "No Canta"},
  ]);

  // Elimina los pacientes del state
  const eliminarPaciente = id => {
    setCitas( (citasActuales) => {
      return citasActuales.filter( cita => cita.id !== id)
    })
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Administrador de Citas</Text>

      <Formulario />

      <Text style={styles.titulo}> {citas.length > 0 ? 'Administra tus citas' : 'No hay citas, agrega una'} </Text>
            
      <FlatList
        data={citas}
        renderItem={ ({item}) => <Cita item={item} eliminarPaciente={eliminarPaciente}/>}
        keyExtractor={ cita => cita.id}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#AA076B',
    flex: 1
  },
  titulo: {
    color: '#FFF',
    marginTop: 20,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default App;
