import { Pool } from "pg";

const sqlRequst = async (sql: string, params?: any[]) => {
  try {
    const pool = await new Pool({
      connectionString: process.env.DATABASE_URL,
    });
    const client = await pool.connect();
    const result = await client.query(sql, params);
    client.release();
    return result;
  } catch (error) {
    console.error("Error executing sql query", error);
  }
};

export { sqlRequst };
