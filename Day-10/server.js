import dotenv from "dotenv";
import { app } from "./app.js";
import { connectDB } from "./db/db.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server running on the URL: http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed \n", err);
  });
