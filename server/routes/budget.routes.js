const BudgetController = require("../controllers/budget.controller");

module.exports = (app) => {
    app.get("/api/budget", BudgetController.getDashboard); // DASHBOARD
   // app.get("/api/budget", BudgetController.getAllBudget); // GET ALL EXPENSES
    app.get("/api/budget/:year/:month", BudgetController.getOneMonth); // GET ONE MONTH
    app.get("/api/budget/:year/:month/:category", BudgetController.getOneCategory); // GET ONE CATEGORY
    app.get("/api/budget/:id", BudgetController.getOneExpense); // GET ONE EXPENSE
    app.post("/api/budget", BudgetController.createBudget); // CREATE
    app.put("/api/budget/:id", BudgetController.updateOneExpense); // UPDATE
    app.delete("/api/budget/:id", BudgetController.deleteBudget); // DELETE
} 