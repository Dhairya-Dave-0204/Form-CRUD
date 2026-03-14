import "dotenv/config"
import mysql2 from "mysql2";

const pool = mysql2.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  dateStrings: true,
  connectionLimit: 10,
});

const connectDB = async () => {
 pool.getConnection((err, connection) => {
    try {
      console.log("DB connected successfully!");
      connection.release();
    } catch (error) {
      console.log("Error connecting to the database!", err);
    }
  });
};

export { connectDB };
