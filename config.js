
//Configura o banco de dados para importar os chats 
exports.knex = require("knex")({
    client: "sqlite3",
    connection: {
        filename: "./esquema_inicial.db"
    },
useNullAsDefault: true
})

//Congigura a API de consulta, 
const baseURL = "https://api.powerzap.com.br/v2"
const axios = require("axios")
exports.api = axios.create({baseURL})

//Configura o tradutor de requests
exports.express = require("express")