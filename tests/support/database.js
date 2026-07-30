const { Pool } = require('pg')
require('dotenv').config()

const pool = new Pool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || 5432),
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
})

async function executeSQL(sqlScript) {
    const client = await pool.connect()

    try {
        const result = await client.query(sqlScript)
        return result
    }
    catch (error) {
        console.error('Erro ao executar SQL:', error)
    }
    finally {
        client.release()
    }
}

module.exports = { executeSQL }

