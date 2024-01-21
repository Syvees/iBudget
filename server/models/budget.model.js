const mongoose = require("mongoose");

const BudgetSchema = new mongoose.Schema({
    year: {
        type: Number,
        required: [true, "Year is required"],
        min: [2023, "Year must be at least 2023"]
    },
    month: {
        type: String,
        required: [true, "Month is required"],
    },
    category: {
        type: String,
        required: [true, "Category is required"],
    },
    amount: {
        type: Number,
        required: [true, "Amount is required"],
        min: [1, "Must be a number greater than 0"]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
    }
}, {timestamps: true});

module.exports = mongoose.model("Budget", BudgetSchema);