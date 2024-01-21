import React from 'react';
import { useState, useEffect} from "react";
import axios from "axios"
import {useNavigate, useParams, Link} from "react-router-dom";

const DisplayOneMonth = () => {
    const {year} = useParams();
    const {month} = useParams();
    const {category} = useParams();
    const [budget, setBudget] = useState([])
    const navigate = useNavigate()

    useEffect (() => {
        axios.get("http://localhost:8000/api/budget/" + year + "/" + month) // GET BY YEAR AND MONTH
        .then(res => {
            console.log(res.data)
            setBudget(res.data)
        })
        .catch(err => console.log(err))
    },[])

    return (    
        <div> 
            <br></br><br></br>
            <h2>&nbsp;{month} {year}</h2>&nbsp; &nbsp; 
            <Link className="dash" to="/">Dashboard</Link>
            <br></br><br></br>
            <table class="table table-sm">
                <thead>
                    <tr class="table-success">
                        <th>&nbsp;&nbsp;Category</th>
                        <th>Total</th>
                        <th>Percentage</th>
                    </tr>
                </thead>
                <tbody>
                {
                    budget.map((budget, index) => {
                    return <tr class="table-success" key={budget._id}>
                        <td>
                        <td>&nbsp;&nbsp;<Link to={"/details/" + budget._id.year+ "/" + budget._id.month + "/" + budget._id.category}>{budget._id.category}</Link></td>
                        </td>
                        <td>
                            <p>${budget.totalCategoryExpenses}</p>
                        </td>
                        <td></td> 
                    </tr>
                    })
                }
            </tbody>
        </table>
        <br></br>&nbsp; &nbsp;
        <Link className="dash" to={"/addExpense"}>Add an Expense</Link>
        </div>
    )
}   
export default DisplayOneMonth