import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
    contenedor: {
        flex: 1
    },
    contenido: {
        marginHorizontal: '2.5%',
        flex: 1
    },
    boton:{
        backgroundColor: '#FFDA00'
    },
    botonTexto: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 14,
        color: '#000'
    },
    titulo:{
        textAlign:'center',
        marginTop: 20,
        marginBottom: 10,
        fontSize: 30
    },
    imagen: {
        height: 250,
        width: '100%'
    },
    cantidad: {
        marginVertical: 10,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    botonTopbar:{
        backgroundColor: 'transparent',
        marginRight: 10,
        elevation: 0
    },
    botonEliminar:{
        borderRadius: 25,
        height: 40,
        width: 50,
        alignItems: 'center',
        backgroundColor: 'red'
    },
    botonTextoEliminar:{
        fontSize: 20,
    }
});

export default globalStyles;