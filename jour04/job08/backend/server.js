import express from "express";
import cors from "cors";
import mysql from 'mysql2/promise';

const app = express();
const PORT = 3000;

app.use(cors({
    origin: (origin, callback) => {
        //console.log(origin);

        if (!origin) {
            return callback(null, true);
        }
        return callback(null, origin === process.env.FRONTEND_URL);

        //return callback(null, devOriginPattern.test(origin));
    },
    credentials: true,
}));
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
        console.error('Erreur MySQL:', error);
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

// async function mydtestfunc(req, res) {
//     console.log("CALLED");
//     res.json({
//         a: "message",
//         b: "test"
//     });
// }

// app.use("/db-test", mydtestfunc);

app.get("/db-test", async (req, res) => {
    console.log("db-test, called!");
    let status;
    let connexion = await testConnection();
    console.log(connexion);
    if (connexion) {
        status = "Base connéctée.";
    } else {
        status = "Base non connéctée.";
    }

    //res.send("HELLO HAALLOOO");

    res.json({
        message: "Statut de la base",
        status: status
    })
    //console.log(res);
})

app.listen(PORT, () => {
    console.log(`Serveur sur http://localhost:${PORT}`);
});