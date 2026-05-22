import express from "express";
import mysql from 'mysql2/promise';

const app = express();
const PORT = 3000;

app.use(express.json());

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    database: process.env.DB_NAME || 'starter_kit',
    waitForConnections: true,
    connectionLimit: 10
});

async function testConnection() {
    try {
        const connection = await pool.getConnection();
        console.log('MySQL connecté');
        connection.release();
        return true;
    } catch (error) {
        console.error('Erreur MySQL:', error.message);
        return false;
    }
}

//testConnection();

app.get("/", async (req, res) => {
    res.json({
        message: "Bonjour",
    })
    console.log(req);
})

app.get("/db-test", async (req, res) => {
    let status;
    if (testConnection()) {
        status = "Base connéctée.";
    } else {
        status = "Base non connéctée.";
    }

    res.json({
        message: "Statut de la base",
        status: status
    })
})

app.listen(PORT, () => {
    console.log(`Serveur sur http://localhost:${PORT}`);
});