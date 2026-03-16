import express from "express"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.static("public"))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs")
app.set("views", "./views")

app.get("/test-ejs", (req, res) => {
  res.render("index")
})

app.get("/", (req, res) => {
  res.send("Hello Mate,  the form is on the url: http://localhost:3000/test-ejs")
})

// import and setup of the routes
import { formRouter } from "./routes/form.route.js"
app.use("/form", formRouter)

export { app };
