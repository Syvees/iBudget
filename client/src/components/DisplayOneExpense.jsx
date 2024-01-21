import React from 'react';
import { useState, useEffect} from "react";
import axios from "axios"
import {useNavigate, useParams, Link} from "react-router-dom";

const DisplayOneExpense = () => {
    const {year} = useParams();
    const {month} = useParams();
    const {category} = useParams();
    const [budget, setBudget] = useState([])
    const navigate = useNavigate()

    useEffect (() => {
        axios.get("http://localhost:8000/api/budget/" + year + "/" + month + "/" + category) // GET BY YEAR, MONTH AND CATEGORY
        .then(res => {
            console.log(res.data)
            setBudget(res.data)
        })
        .catch(err => console.log(err))
    },[])

    const deleteHandler = (budgetId) => {
        axios.delete("http://localhost:8000/api/budget/" + budgetId)
        .then(res => {
            removeFromDom(budgetId)
        })
        .catch((err) => {console.log(err)});    
    } 

const removeFromDom = budgetId => {
        setBudget(budget.filter(budget => budget._id != budgetId))
    }

    return (    
        <div> 
            <br></br><br></br>
            <h2>&nbsp;{month} {year}</h2>&nbsp; &nbsp; 
            <Link className="dash"  to="/">Dashboard</Link> &nbsp; &nbsp; &nbsp;
            <table class="table table-sm">
                <thead>&nbsp; &nbsp; &nbsp;
                    <tr class="table-success">
                        <th>&nbsp;&nbsp;Description</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    budget.map((budget, index) => {
                    return <tr class="table-success" key={budget._id}>
                        <td>
                        <td>&nbsp;&nbsp;{budget.description}</td>
                        </td>
                        <td>
                            <p>${budget.amount}</p>
                        </td>
                        <td>
                            <Link to={"/edit/" + budget._id}>Edit</Link> &nbsp; &nbsp;
                            <button onClick = {e => {deleteHandler(budget._id)}} className="btn btn-danger btn-sm">Delete</button>
                        </td>
                    </tr>
                    })
                }
            </tbody>
        </table>
        <br></br>&nbsp; &nbsp;
        <Link className="dash"  to={"/addExpense"}>Add an Expense</Link>
        </div>
    )
}   
export default DisplayOneExpense