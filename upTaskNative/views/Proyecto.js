import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Button, Text, H2, Content, List, Form, Item, Input, Toast } from 'native-base';
import globalStyles from '../styles/global';
import { gql, useMutation, useQuery } from '@apollo/client';
import Tarea from '../components/Tarea';

// // Crear nuevas tareas
const NUEVA_TAREA = gql`
    mutation nuevaTarea($input: TareaInput) {
        nuevaTarea (input: $input) {
            nombre
            id
            proyecto
            estado
        }
    }
`;

// Consulta las tareas del proyecto
const OBTENER_TAREAS = gql`
    query obtenerTareas($input: ProyectoIDInput){
        obtenerTareas(input: $input){
            nombre
            id
            estado
        }
    }
`;

const Proyecto = ({route}) => {
    
    // Obtenemos el id del proyecto
    const { id } = route.params;

    // State del componente
    const [ nombre, guardarNombre ] = useState('');
    const [ mensaje, guardarMensaje ] = useState(null);

    // Apollo obtener tareas
    const { data, loading, error } = useQuery(OBTENER_TAREAS,{
        variables:{
            input:{
                proyecto: id
            }
        }
    });

    //Apollo crear tareas
    const [ nuevaTarea ] = useMutation(NUEVA_TAREA, {
        update(cache, { data: { nuevaTarea}}) {
            const { obtenerTareas } = cache.readQuery({
                query: OBTENER_TAREAS,
                variables:{
                    input:{
                        proyecto: id
                    }
                }
            });

            cache.writeQuery({
                query: OBTENER_TAREAS,
                variables:{
                    input:{
                        proyecto: id
                    }
                },
                data: {
                    obtenerTareas: [...obtenerTareas, nuevaTarea]
                }
            })
        }
    });

    // Validar y crear tareas
    const handleSubmit = async () => {
        if (nombre===''){
            guardarMensaje('El nombre de la tarea es obligatorio');
            return;
        }

        // almacenarlo en la base de datos
        try {
            const {data} = await nuevaTarea({
                variables:{
                    input:{
                        nombre,
                        proyecto: id
                    }
                }
            });
            console.log(data);
            guardarNombre('');
            guardarMensaje('Tarea creada correctamente');

            setTimeout(() => {
                guardarMensaje(null);
            }, 3000);
        } catch (error) {
            console.log(error);
        }
    }

    const mostrarAlerta = () => {
        Toast.show({
            text: mensaje,
            buttonText: 'OK',
            duration: 5000
        })
    }

    // Si apollo está consultando

    if(loading) return <Text>Cargando...</Text>

    return ( 
        <Container style={[globalStyles.contenedor, {backgroundColor: '#e84347'}]}>
            <Form style={{marginHorizontal: '2.5%', marginTop: 20}}>
                <Item inlineLabel last style={globalStyles.input} >
                    <Input
                        placeholder="Nombre Tarea"
                        value = {nombre}
                        onChangeText={texto => guardarNombre(texto)}
                    />
                </Item>

                <Button
                        style={globalStyles.boton}
                        square
                        block
                        onPress={() => handleSubmit()}
                    >
                        <Text>Crear Tarea</Text>
                </Button>
            </Form>

            <H2 style={globalStyles.subtitulo}>Tareas: {route.params.nombre}</H2>
            
            <Content>
                <List style={styles.contenido}>
                    {data.obtenerTareas.map(tarea => (
                        <Tarea 
                            key={tarea.id}
                            tarea={tarea}
                            proyectoId={id}
                        />
                    ))}
                </List>
            </Content>


            {mensaje && mostrarAlerta()}
        </Container>
    );
}

const styles = StyleSheet.create({
    contenido:{
        backgroundColor: "#fff",
        marginHorizontal: '2.5%'
    }
});
 
export default Proyecto;