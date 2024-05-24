const express = require("express")
var bodyParser = require('body-parser')
var cors = require('cors')

require("dotenv/config")
const PORT = process.env.PORT
const app = express()
app.use(bodyParser.json())
app.use(cors())
require("./src/config/db")
const routes = require("./src/routers/ProductsRouter")
app.use("/api", routes) 
app.listen(PORT, () => {
	console.log("Server has started!")
})