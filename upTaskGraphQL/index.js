const { ApolloServer } = require('apollo-server');      // Sintaxis de node antiguo, ahora igual se podrían utilizar imports aunque puede que haya algunas librerias que no lo soporten
const typeDefs = require("./db/schema");
const resolvers = require("./db/resolvers");

const conectarDB = require('./config/db')

// Conectar a la DB
conectarDB();

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then( ({url}) => {
    console.log(`Servidor listo en la URL ${url}`);
} )