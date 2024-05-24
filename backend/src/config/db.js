const mongoose = require("mongoose") 
require("dotenv/config")
const MongoUrl = process.env.mongoUrl
mongoose
	.connect(MongoUrl)
	.then(() => {
		
			console.log("Connected")
		
	})