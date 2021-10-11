const express = require('express')
const app = express()
const port = 3001
const cors = require('cors')
const knex = require('knex')
app.use(cors())

const database = knex({
  client: 'mysql2',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'usuarios'
  },
  debug: false
})

 const query = async (table) => {
    const pessoas = await database(table).select()

    return pessoas
}
 

//ROTA RAIZ
app.get('/', async (req, res) => {
    // "CONSULTA" devolve um OBJETO com as informações do usuario
    const consulta = await query('usuarios')

    res.send(consulta)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

