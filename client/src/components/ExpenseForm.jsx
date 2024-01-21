import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from "react-router-dom"

const ExpenseForm = (props) => {
    const [year, setYear] = useState("");
    const [month, setMonth] = useState("");
    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()
    const {id} = useParams();
    
const submitHandler = e => {
        e.preventDefault();
        // MAKE A POST REQUEST TO CREATE A NEW EXPENSE
        axios.post("http://localhost:8000/api/budget", {
            year, 
            month,
            category,
            amount,
            description
        })
        .then(res => {
            console.log(res.data)
            console.log(res.data._id)
            console.log(res);
            navigate(`/details/${res.data.year}/${res.data.month}`)
        })
        .catch(err =>{
            console.log(err)
            setErrors(err.response.data.errors)
        })
    } 

    return (
        <div>
            <br></br><br></br>
            <h1>Let's add an Expense!</h1> &nbsp; &nbsp; &nbsp;
            <Link className="dash" to="/">Dashboard</Link>
            <br></br>
            <form onSubmit={submitHandler} className="col-md-12 offset-1">
                <br></br>
                <p className="expensetxt">
                    <label>Year: </label> &nbsp; 
                    <input type="radio" name="year" id="2023" value="2023" onChange = {e => setYear(e.target.value)}/> 2023 &nbsp; &nbsp;
                    <input type="radio" name="year" id="2024" value="2024" onChange = {e => setYear(e.target.value)}/> 2024
                    {errors.year ? <p className="text-danger">{errors.year.message}</p> : null}
                </p>
                <p className="expensetxt">
                    <label>Month: </label> &nbsp;
                    <div>
                        <input type="radio" name="month" id="01jan" value="January" onChange = {e => setMonth(e.target.value)}/> January &nbsp; &nbsp;
                        <input type="radio" name="month" id="02feb" value="February" onChange = {e => setMonth(e.target.value)}/> February &nbsp; &nbsp;
                        <input type="radio" name="month" id="03mar" value="March" onChange = {e => setMonth(e.target.value)}/> March &nbsp; &nbsp;
                        <input type="radio" name="month" id="04apr" value="April" onChange = {e => setMonth(e.target.value)}/> April &nbsp; &nbsp;
                        <input type="radio" name="month" id="05may" value="May" onChange = {e => setMonth(e.target.value)}/> May &nbsp; &nbsp;
                    </div>
                    <div>
                        <input type="radio" name="month" id="06jun" value="June" onChange = {e => setMonth(e.target.value)}/> June &nbsp; &nbsp;
                        <input type="radio" name="month" id="07jul" value="July" onChange = {e => setMonth(e.target.value)}/> July &nbsp; &nbsp;
                        <input type="radio" name="month" id="08aug" value="August" onChange = {e => setMonth(e.target.value)}/> August &nbsp; &nbsp;
                        <input type="radio" name="month" id="09sep" value="September" onChange = {e => setMonth(e.target.value)}/> September &nbsp; &nbsp;
                        <input type="radio" name="month" id="10oct" value="October" onChange = {e => setMonth(e.target.value)}/> October &nbsp; &nbsp;
                    </div>
                    <div>
                    <input type="radio" name="month" id="11nov" value="November" onChange = {e => setMonth(e.target.value)}/> November &nbsp; &nbsp;
                    <input type="radio" name="month" id="12dec" value="December" onChange = {e => setMonth(e.target.value)}/> December &nbsp; &nbsp;
                    </div>          
                    {errors.month ? <p className="text-danger">{errors.month.message}</p> : null}
                </p>
                <p className="expensetxt">
                    <label>Category: </label> &nbsp;
                    <div>
                        <input type="radio" name="category" id="housing" value="Housing" onChange = {e => setCategory(e.target.value)}/> Housing &nbsp; &nbsp;
                        <input type="radio" name="category" id="food" value="Food" onChange = {e => setCategory(e.target.value)}/> Food &nbsp; &nbsp;
                        <input type="radio" name="category" id="transportation" value="Transportation" onChange = {e => setCategory(e.target.value)}/> Transportation &nbsp; &nbsp;
                        <input type="radio" name="category" id="insurance" value="Insurance" onChange = {e => setCategory(e.target.value)}/> Insurance &nbsp; &nbsp;
                    </div>
                    <div>
                        <input type="radio" name="category" id="utilities" value="Utilities" onChange = {e => setCategory(e.target.value)}/> Utilities &nbsp; &nbsp;
                        <input type="radio" name="category" id="medicalhealthcare" value="Medical and Healthcare" onChange = {e => setCategory(e.target.value)}/> Medical and Healthcare &nbsp; &nbsp;
                        <input type="radio" name="category" id="personal" value="Personal Spending" onChange = {e => setCategory(e.target.value)}/> Personal Spending &nbsp; &nbsp;
                    </div>
                    <div>
                        <input type="radio" name="category" id="savings" value="Savings, Investing and Debt Payments" onChange = {e => setCategory(e.target.value)}/> Savings, Investing and Debt Payments &nbsp; &nbsp;
                    </div>
                    <div>
                        <input type="radio" name="category" id="recreation" value="Recreation and Entertainment" onChange = {e => setCategory(e.target.value)}/> Recreation and Entertainment &nbsp; &nbsp;
                        <input type="radio" name="category" id="misc" value="Miscellaneous" onChange = {e => setCategory(e.target.value)}/> Miscellaneous &nbsp; &nbsp;
                    </div>
                    {errors.category ? <p className="text-danger">{errors.category.message}</p> : null}
                </p>
                <p className="expensetxt">
                <label>Amount: </label> &nbsp; 
                    <input type="number" value={amount}  onChange = {e => setAmount(e.target.value)}></input>
                    {errors.amount ? <p className="text-danger">{errors.amount.message}</p> : null}
                </p>
                <p className="expensetxt">
                <label>Description: </label> &nbsp;
                    <input type="textarea" value={description} onChange = {e => setDescription(e.target.value)}></input>
                    {errors.description ? <p className="text-danger">{errors.description.message}</p> : null}
                </p>
                <input type="submit" className="btn btn-success btn-sm"></input>
            </form>
        </div>
    )
}

export default ExpenseForm;