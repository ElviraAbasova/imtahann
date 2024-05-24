const mongoose = require("mongoose")

const schema = mongoose.Schema({
	title: {
        type: String,
        required: true

    },
    image: {
        type: String,
        required: true

    },
    description: {
        type: String,
        required: true

    },
	price: {
        type: Number,
        required: true
    },
    profile: {
        type: String,
        required: true

    },
    author: {
        type: String,
        required: true

    }
})

module.exports = mongoose.model("Product", schema)