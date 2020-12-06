import React, {useState} from 'react';
import { View } from 'react-native';
import { Container, Button, Text, H1, Input, Form, Item, Toast } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import globalStyles from '../styles/global';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Apollo
import { gql, useMutation } from '@apollo/client';

const AUTENTICAR_USUARIO = gql`
    mutation autenticarUsuario($input: AutenticarInput) {
        autenticarUsuario(input: $input){
        token
        }
    }
`;

const Login = () => {

    // State del formulario
    const [email, guardarEmail] = useState('');
    const [password, guardarPassword] = useState('');

    const [mensaje, guardarMensaje] = useState(null);

    // React navigation
    const navigation = useNavigation();

    // Mutation de Apollo
    const [ autenticarUsuario ] = useMutation(AUTENTICAR_USUARIO);

    // Cuando el usuario presiona en Iniciar Sesión
    const handleSubmit = async () => {
        // validar
        if (email === '' || password === ''){
            // Mostrar un error
            guardarMensaje('Todos los campos son obligatorios');
            return;
        }

        try {
            // autenticar al usuario
            const data = await autenticarUsuario({
                variables: {
                    input: {
                        email,
                        password
                    }
                }
            });

            const { token } = data.data.autenticarUsuario;

            // Colocar token en storage
            await AsyncStorage.setItem('token', token);

            // Redireccionar a proyectos
            navigation.navigate("Proyectos");
        } catch (error) {
            guardarMensaje(error.message);
        }
    };

    // Muestra un mensaje toast
    const mostrarAlerta = () => {
        Toast.show({
            text: mensaje,
            buttonText: 'OK',
            duration: 5000
        })
    }

    return ( 
        <Container style={[ globalStyles.contenedor, {backgroundColor: '#e84347'} ]}>
            <View style={globalStyles.contenido}>
                <H1 style={globalStyles.titulo}>UpTask</H1>

                <Form>
                    <Item inlineLabel last style={globalStyles.input}>
                        <Input
                            autoCompleteType="email"
                            placeholder="Email"
                            onChangeText={texto => guardarEmail(texto.toLowerCase())}
                            value={email}
                        />
                    </Item>
                    <Item inlineLabel last style={globalStyles.input}>
                        <Input
                            secureTextEntry={true}
                            placeholder="Password"
                            onChangeText={texto => guardarPassword(texto)}
                        />
                    </Item>
                </Form>

                <Button 
                    square
                    block
                    style={globalStyles.boton}
                    onPress={() => handleSubmit()}
                >
                    <Text style={globalStyles.botonTexto}>Iniciar Sesión</Text>
                </Button>

                {mensaje && mostrarAlerta()}

                <Text 
                    onPress = { () => navigation.navigate("CrearCuenta")}
                    style={globalStyles.enlace}
                >
                    Crear Cuenta
                </Text>
            </View>
        </Container>
     );
}
 
export default Login;