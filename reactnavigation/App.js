// Guía paso a paso para instalar react-navigation Stack: https://gist.github.com/juanpablogdl/86c7db533280f5fd23735794d870a38c
import 'react-native-gesture-handler'; // Primera linea

import React from 'react';
import { View, Text } from 'react-native';

// React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Inicio from './views/Inicio';
import Nosotros from './views/Nosotros';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        
        <Stack.Navigator
          initialRouteName="Inicio"
          screenOptions={{
            title: "Componente Principal",
            headerStyle:{
              backgroundColor: '#f4511E'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold'
            },
            headerTitleAlign: 'center'
          }}
        >
          <Stack.Screen
            name="Inicio"
            component={Inicio}
            options={{                           // Se ha comentado porque se ha pasado el estilo a todo el Stack Navigator
              title: "Componente Principal",
            //   headerStyle:{
            //     backgroundColor: '#f4511E'
            //   },
            //   headerTintColor: '#fff',
            //   headerTitleStyle: {
            //     fontWeight: 'bold'
            //   },
            //   headerTitleAlign: 'center'
            }}
          />
          <Stack.Screen
            name="Nosotros"
            component={Nosotros}
            options={ ({route}) => ({
              title: route.params.clienteId // title: clienteId es igual
            })}
          />
        </Stack.Navigator>

      </NavigationContainer>
      
    </>
  );
};

export default App;
