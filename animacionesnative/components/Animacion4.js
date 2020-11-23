import React, { useState, useEffect }from 'react'
import { StyleSheet, Text, Animated, View } from 'react-native'

const Animacion4 = () => {
    
    const [ animacion ] = useState (new Animated.Value(0));
    
    useEffect( () => {
        Animated.timing(
            animacion, {
                useNativeDriver: true,
                toValue: 360,    // Valor al que llega
                duration: 5000  // Cantidad de tiempo en llegar
            }
        ).start();
    }, []);

    const interpolacion = animacion.interpolate({
        inputRange: [0, 360],
        outputRange: ['0deg', '360deg']
    });

    const estiloAnimacion={
        transform: [{ rotate: interpolacion }]
    }

    return (
        <View>
            <Animated.View
                style={[styles.texto, estiloAnimacion]}
            >
            </Animated.View>
        </View>  
    );
}

const styles = StyleSheet.create({
    texto: {
        width: 100,
        height: 100,
        backgroundColor: 'cornflowerblue'
    }
})

export default Animacion4;