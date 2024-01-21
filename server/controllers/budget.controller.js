const Budget = require("../models/budget.model.js");

// GET ALL BY MONTH AND YEAR --> DASHBOARD
module.exports.getDashboard = (req, res) => {
    Budget.aggregate([
        { 
            $group : { _id : { year: "$year", month: "$month"},
            totalExpenses : { $sum : "$amount" } }
        }, 
        {
            $sort : { _id : 1}
        }
    ])
        .then(budgets => {
            console.log(budgets);
            res.json(budgets)
        })
        .catch(err => res.json({message: "Something went wrong", error:err}))
}

// GET ONE MONTH AND YEAR -- TEST
module.exports.getOneMonth = (req, res) => {
    Budget.aggregate([
        {$match: {$or: [{year:req.params.year}, {month:req.params.month}]}},
        { 
            $group : { _id : { category: "$category", month: "$month", year: "$year"},
            totalCategoryExpenses : { $sum : "$amount" }
            }
        },
        {
            $sort : { _id : 1}
        }
    ])
        .then(budget => res.json(budget))
        .catch(err => res.json({message: "Something went wrong", error:err}))
    }

// GET ONE MONTH AND YEAR
module.exports.getOneMonth1 = (req, res) => {
    Budget.find( {$and: [{year:req.params.year}, {month:req.params.month}]})
        .then(budget => res.json(budget))
        .catch(err => res.json({message: "Something went wrong", error:err}))
    }

// GET ONE CATEGORY, MONTH AND YEAR
module.exports.getOneCategory = (req, res) => {
    Budget.find( {$and: [{year:req.params.year}, {month:req.params.month}, {category:req.params.category}]})
        .then(budget => res.json(budget))
        .catch(err => res.json({message: "Something went wrong", error:err}))
    }

// CREATE AN EXPENSE
module.exports.createBudget = (req, res) => {
    Budget.create(req.body)
        .then(budget => res.json(budget))
        .catch(err => {res.status(500).json(err)})
}

// GET ONE EXPENSE
module.exports.getOneExpense = (req, res) => {
    Budget.findOne({_id:req.params.id})
        .then(store => res.json(store))
        .catch(err => res.json({message: "Something went wrong", error:err}))
    }

// EDIT AN EXPENSE
module.exports.updateOneExpense = (req, res) => {
    Budget.findOneAndUpdate({_id:req.params.id}, req.body, {new:true, runValidators: true})
        .then(updatedExpense => res.json(updatedExpense))
        .catch(err => {res.status(500).json(err)})
}

// DELETE AN EXPENSE
module.exports.deleteBudget = (req, res) => {
    Budget.findByIdAndDelete(req.params.id)
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json({message: "Something went wrong", error:err}))
}



// GET ALL --> BY CATEGORY ORIGINAL --> NOT USED
module.exports.getAllBudget = (req, res) => {
    Budget.find({}).collation({locale: "en"}).sort({month : 1, category: 1}) // WITH SORTING
        .then(budgets => {
            console.log(budgets);
            res.json(budgets)
        })
        .catch(err => res.json({message: "Something went wrong", error:err}))
}