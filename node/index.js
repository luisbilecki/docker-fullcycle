
const mysql = require('mysql')
const express = require('express')
const app = express()
const port = 3000
const dbConfig = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}
const connection = mysql.createConnection(dbConfig)

const sql = `INSERT INTO people(name) VALUES('luis')`
connection.query(sql)
connection.end()

app.get('/', (req, res) => {
    res.send('<h1>Full Cycle</h1>')
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})