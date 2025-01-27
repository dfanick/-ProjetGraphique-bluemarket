
import pg from 'pg';
import { env } from '$env/dynamic/private'; 

const pool = new pg.Pool({
  connectionString: env.DATABASE_URL, 
});


export const query = async (text, params) => {
  const client = await pool.connect();
  try {
    const res = await client.query(text, params); 
    return res.rows; 
  } finally {
    client.release(); 
  }
};

// Test de la connexion à la base de données
async function testConnection() {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('Connexion à PostgreSQL réussie, serveur actuel :', res.rows[0].now);
  } catch (err) {
    console.error('Erreur de connexion à PostgreSQL :', err);
  }
}

testConnection(); // Testez la connexion au démarrage
