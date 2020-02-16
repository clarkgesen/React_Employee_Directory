const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const employeeSchema = new Schema(
    {
        firstName: {
            type: String,
            trim: true,
            required: "Enter a first name"
        },
        lastName: {
            type: String,
            trim: true,
            required: "Enter a last name"
        },
        department: {
            type: String,
            trim: true
        },
        title: {
            type: String
        },
        yearsEmployed: {
            type: Number
        }

    }
)