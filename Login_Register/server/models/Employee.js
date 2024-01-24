const { MongoChangeStreamError } = require("mongodb")
const mongoose = require("mongoose")

// creating schema for the table
const EmployeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

// creating model for it
const EmployeeModel = mongoose.model("employess", EmployeeSchema)

module.exports = EmployeeModel