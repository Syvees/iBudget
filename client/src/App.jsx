import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom"
import Dashboard from "./components/Dashboard"
import ExpenseForm from "./components/ExpenseForm"
import DisplayOneMonth from './components/DisplayOneMonth'
import DisplayOneExpense from './components/DisplayOneExpense'
import EditOneExpense from './components/EditOneExpense'

function App() {

  return (
    <div className="bg">
      <Routes>  
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/addExpense" element={<ExpenseForm />}></Route>
        <Route path="/details/:year/:month" element={<DisplayOneMonth />}></Route>
        <Route path="/details/:year/:month/:category" element={<DisplayOneExpense />}></Route>
        <Route path="/edit/:id" element={<EditOneExpense />}></Route>
      </Routes>
    </div>
  )
}

export default App