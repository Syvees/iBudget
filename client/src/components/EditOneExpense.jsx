import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from "react-router-dom"

const EditOneExpense = (props) => {
    const [year, setYear] = useState("");
    const [month, setMonth] = useState("");
    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()
    const {id} = useParams();

    useEffect (() => {
        axios.get(`http://localhost:8000/api/budget/${id}`) // GET ONE EXPENSE
        .then(res => {
            setYear(res.data.year);
            setMonth(res.data.month);
            setCategory(res.data.category);
            setAmount(res.data.amount);
            setDescription(res.data.description);
        })
        .catch(err => console.log(err))
    },[])
    
    const submitHandler = e => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/budget/" + id, {
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
            //navigate("/")
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
            <h2>&nbsp;&nbsp;{month} {year}</h2>
            <h4>Update an Expense</h4> &nbsp; &nbsp; &nbsp;
            <Link className="dash" to="/">Dashboard</Link>
            <form onSubmit={submitHandler} className="col-md-12 offset-1">
                <br></br>
                <p className="expensetxt">
                    <label>Year:</label> &nbsp; 
                    {year == "2024" 
                        ?   <p>
                                <input type="radio" name="year" id="2023" value="2023" onChange = {e => setYear(e.target.value)}/> 2023 &nbsp; &nbsp;
                                <input type="radio" name="year" id="2024" value="2024" checked="checked" onChange = {e => setYear(e.target.value)}/> 2024
                            </p>
                        :  null
                    }
                    {year == "2023" 
                        ?   <p>
                                <input type="radio" name="year" id="2023" value="2023" checked="checked" onChange = {e => setYear(e.target.value)}/> 2023 &nbsp; &nbsp;
                                <input type="radio" name="year" id="2024" value="2024" onChange = {e => setYear(e.target.value)}/> 2024
                            </p>
                        :  null
                    }
                    {errors.year ? <p className="text-danger">{errors.year.message}</p> : null}
                </p>
                <p className="expensetxt">
                    <label>Month: </label> &nbsp;
                    {month == "January"
                        ? <p>
                            <input type="radio" name="month" id="01jan" value="January" checked="checked" onChange = {e => setMonth(e.target.value)}/> January &nbsp; &nbsp;
                            <input type="radio" name="month" id="02feb" value="February" onChange = {e => setMonth(e.target.value)}/> February &nbsp; &nbsp;
                            <input type="radio" name="month" id="03mar" value="March" onChange = {e => setMonth(e.target.value)}/> March &nbsp; &nbsp;
                            <input type="radio" name="month" id="04apr" value="April" onChange = {e => setMonth(e.target.value)}/> April &nbsp; &nbsp;
                            <input type="radio" name="month" id="05may" value="May" onChange = {e => setMonth(e.target.value)}/> May &nbsp; &nbsp;
                            <input type="radio" name="month" id="06jun" value="June" onChange = {e => setMonth(e.target.value)}/> June &nbsp; &nbsp;
                            <input type="radio" name="month" id="07jul" value="July" onChange = {e => setMonth(e.target.value)}/> July &nbsp; &nbsp;
                            <input type="radio" name="month" id="08aug" value="August" onChange = {e => setMonth(e.target.value)}/> August &nbsp; &nbsp;
                            <input type="radio" name="month" id="09sep" value="September" onChange = {e => setMonth(e.target.value)}/> September &nbsp; &nbsp;
                            <input type="radio" name="month" id="10oct" value="October" onChange = {e => setMonth(e.target.value)}/> October &nbsp; &nbsp;
                            <input type="radio" name="month" id="11nov" value="November" onChange = {e => setMonth(e.target.value)}/> November &nbsp; &nbsp;
                            <input type="radio" name="month" id="12dec" value="December" onChange = {e => setMonth(e.target.value)}/> December &nbsp; &nbsp;
                        </p>
                        : null
                    }
                    {month == "February"
                        ? <p>
                            <input type="radio" name="month" id="01jan" value="January" onChange = {e => setMonth(e.target.value)}/> January &nbsp; &nbsp;
                            <input type="radio" name="month" id="02feb" value="February" checked="checked" onChange = {e => setMonth(e.target.value)}/> February &nbsp; &nbsp;
                            <input type="radio" name="month" id="03mar" value="March" onChange = {e => setMonth(e.target.value)}/> March &nbsp; &nbsp;
                            <input type="radio" name="month" id="04apr" value="April" onChange = {e => setMonth(e.target.value)}/> April &nbsp; &nbsp;
                            <input type="radio" name="month" id="05may" value="May" onChange = {e => setMonth(e.target.value)}/> May &nbsp; &nbsp;
                            <input type="radio" name="month" id="06jun" value="June" onChange = {e => setMonth(e.target.value)}/> June &nbsp; &nbsp;
                            <input type="radio" name="month" id="07jul" value="July" onChange = {e => setMonth(e.target.value)}/> July &nbsp; &nbsp;
                            <input type="radio" name="month" id="08aug" value="August" onChange = {e => setMonth(e.target.value)}/> August &nbsp; &nbsp;
                            <input type="radio" name="month" id="09sep" value="September" onChange = {e => setMonth(e.target.value)}/> September &nbsp; &nbsp;
                            <input type="radio" name="month" id="10oct" value="October" onChange = {e => setMonth(e.target.value)}/> October &nbsp; &nbsp;
                            <input type="radio" name="month" id="11nov" value="November" onChange = {e => setMonth(e.target.value)}/> November &nbsp; &nbsp;
                            <input type="radio" name="month" id="12dec" value="December" onChange = {e => setMonth(e.target.value)}/> December &nbsp; &nbsp;
                        </p>
                        : null
                    }
                    {month == "March"
                        ? <p>
                            <input type="radio" name="month" id="01jan" value="January" onChange = {e => setMonth(e.target.value)}/> January &nbsp; &nbsp;
                            <input type="radio" name="month" id="02feb" value="February" onChange = {e => setMonth(e.target.value)}/> February &nbsp; &nbsp;
                            <input type="radio" name="month" id="03mar" value="March" checked="checked" onChange = {e => setMonth(e.target.value)}/> March &nbsp; &nbsp;
                            <input type="radio" name="month" id="04apr" value="April" onChange = {e => setMonth(e.target.value)}/> April &nbsp; &nbsp;
                            <input type="radio" name="month" id="05may" value="May" onChange = {e => setMonth(e.target.value)}/> May &nbsp; &nbsp;
                            <input type="radio" name="month" id="06jun" value="June" onChange = {e => setMonth(e.target.value)}/> June &nbsp; &nbsp;
                            <input type="radio" name="month" id="07jul" value="July" onChange = {e => setMonth(e.target.value)}/> July &nbsp; &nbsp;
                            <input type="radio" name="month" id="08aug" value="August" onChange = {e => setMonth(e.target.value)}/> August &nbsp; &nbsp;
                            <input type="radio" name="month" id="09sep" value="September" onChange = {e => setMonth(e.target.value)}/> September &nbsp; &nbsp;
                            <input type="radio" name="month" id="10oct" value="October" onChange = {e => setMonth(e.target.value)}/> October &nbsp; &nbsp;
                            <input type="radio" name="month" id="11nov" value="November" onChange = {e => setMonth(e.target.value)}/> November &nbsp; &nbsp;
                            <input type="radio" name="month" id="12dec" value="December" onChange = {e => setMonth(e.target.value)}/> December &nbsp; &nbsp;
                        </p>
                        : null
                    }
                    {month == "April"
                        ? <p>
                            <input type="radio" name="month" id="01jan" value="January" onChange = {e => setMonth(e.target.value)}/> January &nbsp; &nbsp;
                            <input type="radio" name="month" id="02feb" value="February" onChange = {e => setMonth(e.target.value)}/> February &nbsp; &nbsp;
                            <input type="radio" name="month" id="03mar" value="March" onChange = {e => setMonth(e.target.value)}/> March &nbsp; &nbsp;
                            <input type="radio" name="month" id="04apr" value="April" checked="checked" onChange = {e => setMonth(e.target.value)}/> April &nbsp; &nbsp;
                            <input type="radio" name="month" id="05may" value="May" onChange = {e => setMonth(e.target.value)}/> May &nbsp; &nbsp;
                            <input type="radio" name="month" id="06jun" value="June" onChange = {e => setMonth(e.target.value)}/> June &nbsp; &nbsp;
                            <input type="radio" name="month" id="07jul" value="July" onChange = {e => setMonth(e.target.value)}/> July &nbsp; &nbsp;
                            <input type="radio" name="month" id="08aug" value="August" onChange = {e => setMonth(e.target.value)}/> August &nbsp; &nbsp;
                            <input type="radio" name="month" id="09sep" value="September" onChange = {e => setMonth(e.target.value)}/> September &nbsp; &nbsp;
                            <input type="radio" name="month" id="10oct" value="October" onChange = {e => setMonth(e.target.value)}/> October &nbsp; &nbsp;
                            <input type="radio" name="month" id="11nov" value="November" onChange = {e => setMonth(e.target.value)}/> November &nbsp; &nbsp;
                            <input type="radio" name="month" id="12dec" value="December" onChange = {e => setMonth(e.target.value)}/> December &nbsp; &nbsp;
                        </p>
                        : null
                    }
                    {month == "May"
                        ? <p>
                            <input type="radio" name="month" id="01jan" value="January"onChange = {e => setMonth(e.target.value)}/> January &nbsp; &nbsp;
                            <input type="radio" name="month" id="02feb" value="February" onChange = {e => setMonth(e.target.value)}/> February &nbsp; &nbsp;
                            <input type="radio" name="month" id="03mar" value="March" onChange = {e => setMonth(e.target.value)}/> March &nbsp; &nbsp;
                            <input type="radio" name="month" id="04apr" value="April" onChange = {e => setMonth(e.target.value)}/> April &nbsp; &nbsp;
                            <input type="radio" name="month" id="05may" value="May" checked="checked" onChange = {e => setMonth(e.target.value)}/> May &nbsp; &nbsp;
                            <input type="radio" name="month" id="06jun" value="June" onChange = {e => setMonth(e.target.value)}/> June &nbsp; &nbsp;
                            <input type="radio" name="month" id="07jul" value="July" onChange = {e => setMonth(e.target.value)}/> July &nbsp; &nbsp;
                            <input type="radio" name="month" id="08aug" value="August" onChange = {e => setMonth(e.target.value)}/> August &nbsp; &nbsp;
                            <input type="radio" name="month" id="09sep" value="September" onChange = {e => setMonth(e.target.value)}/> September &nbsp; &nbsp;
                            <input type="radio" name="month" id="10oct" value="October" onChange = {e => setMonth(e.target.value)}/> October &nbsp; &nbsp;
                            <input type="radio" name="month" id="11nov" value="November" onChange = {e => setMonth(e.target.value)}/> November &nbsp; &nbsp;
                            <input type="radio" name="month" id="12dec" value="December" onChange = {e => setMonth(e.target.value)}/> December &nbsp; &nbsp;
                        </p>
                        : null
                    }
                    {month == "June"
                        ? <p>
                            <input type="radio" name="month" id="01jan" value="January" onChange = {e => setMonth(e.target.value)}/> January &nbsp; &nbsp;
                            <input type="radio" name="month" id="02feb" value="February" onChange = {e => setMonth(e.target.value)}/> February &nbsp; &nbsp;
                            <input type="radio" name="month" id="03mar" value="March" onChange = {e => setMonth(e.target.value)}/> March &nbsp; &nbsp;
                            <input type="radio" name="month" id="04apr" value="April" onChange = {e => setMonth(e.target.value)}/> April &nbsp; &nbsp;
                            <input type="radio" name="month" id="05may" value="May" onChange = {e => setMonth(e.target.value)}/> May &nbsp; &nbsp;
                            <input type="radio" name="month" id="06jun" value="June" checked="checked" onChange = {e => setMonth(e.target.value)}/> June &nbsp; &nbsp;
                            <input type="radio" name="month" id="07jul" value="July" onChange = {e => setMonth(e.target.value)}/> July &nbsp; &nbsp;
                            <input type="radio" name="month" id="08aug" value="August" onChange = {e => setMonth(e.target.value)}/> August &nbsp; &nbsp;
                            <input type="radio" name="month" id="09sep" value="September" onChange = {e => setMonth(e.target.value)}/> September &nbsp; &nbsp;
                            <input type="radio" name="month" id="10oct" value="October" onChange = {e => setMonth(e.target.value)}/> October &nbsp; &nbsp;
                            <input type="radio" name="month" id="11nov" value="November" onChange = {e => setMonth(e.target.value)}/> November &nbsp; &nbsp;
                            <input type="radio" name="month" id="12dec" value="December" onChange = {e => setMonth(e.target.value)}/> December &nbsp; &nbsp;
                        </p>
                        : null
                    }
                    {month == "July"
                        ? <p>
                            <input type="radio" name="month" id="01jan" value="January" onChange = {e => setMonth(e.target.value)}/> January &nbsp; &nbsp;
                            <input type="radio" name="month" id="02feb" value="February" onChange = {e => setMonth(e.target.value)}/> February &nbsp; &nbsp;
                            <input type="radio" name="month" id="03mar" value="March" onChange = {e => setMonth(e.target.value)}/> March &nbsp; &nbsp;
                            <input type="radio" name="month" id="04apr" value="April" onChange = {e => setMonth(e.target.value)}/> April &nbsp; &nbsp;
                            <input type="radio" name="month" id="05may" value="May" onChange = {e => setMonth(e.target.value)}/> May &nbsp; &nbsp;
                            <input type="radio" name="month" id="06jun" value="June" onChange = {e => setMonth(e.target.value)}/> June &nbsp; &nbsp;
                            <input type="radio" name="month" id="07jul" value="July"  checked="checked" onChange = {e => setMonth(e.target.value)}/> July &nbsp; &nbsp;
                            <input type="radio" name="month" id="08aug" value="August" onChange = {e => setMonth(e.target.value)}/> August &nbsp; &nbsp;
                            <input type="radio" name="month" id="09sep" value="September" onChange = {e => setMonth(e.target.value)}/> September &nbsp; &nbsp;
                            <input type="radio" name="month" id="10oct" value="October" onChange = {e => setMonth(e.target.value)}/> October &nbsp; &nbsp;
                            <input type="radio" name="month" id="11nov" value="November" onChange = {e => setMonth(e.target.value)}/> November &nbsp; &nbsp;
                            <input type="radio" name="month" id="12dec" value="December" onChange = {e => setMonth(e.target.value)}/> December &nbsp; &nbsp;
                        </p>
                        : null
                    }
                    {month == "August"
                        ? <p>
                            <input type="radio" name="month" id="01jan" value="January" onChange = {e => setMonth(e.target.value)}/> January &nbsp; &nbsp;
                            <input type="radio" name="month" id="02feb" value="February" onChange = {e => setMonth(e.target.value)}/> February &nbsp; &nbsp;
                            <input type="radio" name="month" id="03mar" value="March" onChange = {e => setMonth(e.target.value)}/> March &nbsp; &nbsp;
                            <input type="radio" name="month" id="04apr" value="April" onChange = {e => setMonth(e.target.value)}/> April &nbsp; &nbsp;
                            <input type="radio" name="month" id="05may" value="May" onChange = {e => setMonth(e.target.value)}/> May &nbsp; &nbsp;
                            <input type="radio" name="month" id="06jun" value="June" onChange = {e => setMonth(e.target.value)}/> June &nbsp; &nbsp;
                            <input type="radio" name="month" id="07jul" value="July" onChange = {e => setMonth(e.target.value)}/> July &nbsp; &nbsp;
                            <input type="radio" name="month" id="08aug" value="August" checked="checked" onChange = {e => setMonth(e.target.value)}/> August &nbsp; &nbsp;
                            <input type="radio" name="month" id="09sep" value="September" onChange = {e => setMonth(e.target.value)}/> September &nbsp; &nbsp;
                            <input type="radio" name="month" id="10oct" value="October" onChange = {e => setMonth(e.target.value)}/> October &nbsp; &nbsp;
                            <input type="radio" name="month" id="11nov" value="November" onChange = {e => setMonth(e.target.value)}/> November &nbsp; &nbsp;
                            <input type="radio" name="month" id="12dec" value="December" onChange = {e => setMonth(e.target.value)}/> December &nbsp; &nbsp;
                        </p>
                        : null
                    }
                    {month == "September"
                        ? <p>
                            <input type="radio" name="month" id="01jan" value="January" onChange = {e => setMonth(e.target.value)}/> January &nbsp; &nbsp;
                            <input type="radio" name="month" id="02feb" value="February" onChange = {e => setMonth(e.target.value)}/> February &nbsp; &nbsp;
                            <input type="radio" name="month" id="03mar" value="March" onChange = {e => setMonth(e.target.value)}/> March &nbsp; &nbsp;
                            <input type="radio" name="month" id="04apr" value="April" onChange = {e => setMonth(e.target.value)}/> April &nbsp; &nbsp;
                            <input type="radio" name="month" id="05may" value="May" onChange = {e => setMonth(e.target.value)}/> May &nbsp; &nbsp;
                            <input type="radio" name="month" id="06jun" value="June" onChange = {e => setMonth(e.target.value)}/> June &nbsp; &nbsp;
                            <input type="radio" name="month" id="07jul" value="July" onChange = {e => setMonth(e.target.value)}/> July &nbsp; &nbsp;
                            <input type="radio" name="month" id="08aug" value="August" onChange = {e => setMonth(e.target.value)}/> August &nbsp; &nbsp;
                            <input type="radio" name="month" id="09sep" value="September" checked="checked" onChange = {e => setMonth(e.target.value)}/> September &nbsp; &nbsp;
                            <input type="radio" name="month" id="10oct" value="October" onChange = {e => setMonth(e.target.value)}/> October &nbsp; &nbsp;
                            <input type="radio" name="month" id="11nov" value="November" onChange = {e => setMonth(e.target.value)}/> November &nbsp; &nbsp;
                            <input type="radio" name="month" id="12dec" value="December" onChange = {e => setMonth(e.target.value)}/> December &nbsp; &nbsp;
                        </p>
                        : null
                    }
                    {month == "October"
                        ? <p>
                            <input type="radio" name="month" id="01jan" value="January" onChange = {e => setMonth(e.target.value)}/> January &nbsp; &nbsp;
                            <input type="radio" name="month" id="02feb" value="February" onChange = {e => setMonth(e.target.value)}/> February &nbsp; &nbsp;
                            <input type="radio" name="month" id="03mar" value="March" onChange = {e => setMonth(e.target.value)}/> March &nbsp; &nbsp;
                            <input type="radio" name="month" id="04apr" value="April" onChange = {e => setMonth(e.target.value)}/> April &nbsp; &nbsp;
                            <input type="radio" name="month" id="05may" value="May" onChange = {e => setMonth(e.target.value)}/> May &nbsp; &nbsp;
                            <input type="radio" name="month" id="06jun" value="June" onChange = {e => setMonth(e.target.value)}/> June &nbsp; &nbsp;
                            <input type="radio" name="month" id="07jul" value="July" onChange = {e => setMonth(e.target.value)}/> July &nbsp; &nbsp;
                            <input type="radio" name="month" id="08aug" value="August" onChange = {e => setMonth(e.target.value)}/> August &nbsp; &nbsp;
                            <input type="radio" name="month" id="09sep" value="September" onChange = {e => setMonth(e.target.value)}/> September &nbsp; &nbsp;
                            <input type="radio" name="month" id="10oct" value="October" checked="checked" onChange = {e => setMonth(e.target.value)}/> October &nbsp; &nbsp;
                            <input type="radio" name="month" id="11nov" value="November" onChange = {e => setMonth(e.target.value)}/> November &nbsp; &nbsp;
                            <input type="radio" name="month" id="12dec" value="December" onChange = {e => setMonth(e.target.value)}/> December &nbsp; &nbsp;
                        </p>
                        : null
                    }
                    {month == "November"
                        ? <p>
                            <input type="radio" name="month" id="01jan" value="January" onChange = {e => setMonth(e.target.value)}/> January &nbsp; &nbsp;
                            <input type="radio" name="month" id="02feb" value="February" onChange = {e => setMonth(e.target.value)}/> February &nbsp; &nbsp;
                            <input type="radio" name="month" id="03mar" value="March" onChange = {e => setMonth(e.target.value)}/> March &nbsp; &nbsp;
                            <input type="radio" name="month" id="04apr" value="April" onChange = {e => setMonth(e.target.value)}/> April &nbsp; &nbsp;
                            <input type="radio" name="month" id="05may" value="May" onChange = {e => setMonth(e.target.value)}/> May &nbsp; &nbsp;
                            <input type="radio" name="month" id="06jun" value="June" onChange = {e => setMonth(e.target.value)}/> June &nbsp; &nbsp;
                            <input type="radio" name="month" id="07jul" value="July" onChange = {e => setMonth(e.target.value)}/> July &nbsp; &nbsp;
                            <input type="radio" name="month" id="08aug" value="August" onChange = {e => setMonth(e.target.value)}/> August &nbsp; &nbsp;
                            <input type="radio" name="month" id="09sep" value="September" onChange = {e => setMonth(e.target.value)}/> September &nbsp; &nbsp;
                            <input type="radio" name="month" id="10oct" value="October" onChange = {e => setMonth(e.target.value)}/> October &nbsp; &nbsp;
                            <input type="radio" name="month" id="11nov" value="November" checked="checked" onChange = {e => setMonth(e.target.value)}/> November &nbsp; &nbsp;
                            <input type="radio" name="month" id="12dec" value="December" onChange = {e => setMonth(e.target.value)}/> December &nbsp; &nbsp;
                        </p>
                        : null
                    }
                    {month == "December"
                        ? <p>
                            <input type="radio" name="month" id="01jan" value="January" onChange = {e => setMonth(e.target.value)}/> January &nbsp; &nbsp;
                            <input type="radio" name="month" id="02feb" value="February" onChange = {e => setMonth(e.target.value)}/> February &nbsp; &nbsp;
                            <input type="radio" name="month" id="03mar" value="March" onChange = {e => setMonth(e.target.value)}/> March &nbsp; &nbsp;
                            <input type="radio" name="month" id="04apr" value="April" onChange = {e => setMonth(e.target.value)}/> April &nbsp; &nbsp;
                            <input type="radio" name="month" id="05may" value="May" onChange = {e => setMonth(e.target.value)}/> May &nbsp; &nbsp;
                            <input type="radio" name="month" id="06jun" value="June" onChange = {e => setMonth(e.target.value)}/> June &nbsp; &nbsp;
                            <input type="radio" name="month" id="07jul" value="July" onChange = {e => setMonth(e.target.value)}/> July &nbsp; &nbsp;
                            <input type="radio" name="month" id="08aug" value="August" onChange = {e => setMonth(e.target.value)}/> August &nbsp; &nbsp;
                            <input type="radio" name="month" id="09sep" value="September" onChange = {e => setMonth(e.target.value)}/> September &nbsp; &nbsp;
                            <input type="radio" name="month" id="10oct" value="October" onChange = {e => setMonth(e.target.value)}/> October &nbsp; &nbsp;
                            <input type="radio" name="month" id="11nov" value="November" onChange = {e => setMonth(e.target.value)}/> November &nbsp; &nbsp;
                            <input type="radio" name="month" id="12dec" value="December" checked="checked" onChange = {e => setMonth(e.target.value)}/> December &nbsp; &nbsp;
                        </p>
                        : null
                    }
                    {errors.month ? <p className="text-danger">{errors.month.message}</p> : null}
                </p>
                <p className="expensetxt">
                    <label>Category: </label> &nbsp;
                    {category == "Housing"
                        ? <p>
                            <input type="radio" name="category" id="housing" value="Housing" checked="checked" onChange = {e => setCategory(e.target.value)}/> Housing &nbsp; &nbsp;
                            <input type="radio" name="category" id="food" value="Food" onChange = {e => setCategory(e.target.value)}/> Food &nbsp; &nbsp;
                            <input type="radio" name="category" id="transportation" value="Transportation" onChange = {e => setCategory(e.target.value)}/> Transportation &nbsp; &nbsp;
                            <input type="radio" name="category" id="insurance" value="Insurance" onChange = {e => setCategory(e.target.value)}/> Insurance &nbsp; &nbsp;
                            <input type="radio" name="category" id="utilities" value="Utilities" onChange = {e => setCategory(e.target.value)}/> Utilities &nbsp; &nbsp;
                            <input type="radio" name="category" id="medicalhealthcare" value="Medical and Healthcare" onChange = {e => setCategory(e.target.value)}/> Medical and Healthcare &nbsp; &nbsp;
                            <input type="radio" name="category" id="savings" value="Savings, Investing and Debt Payments" onChange = {e => setCategory(e.target.value)}/> Savings, Investing and Debt Payments &nbsp; &nbsp;
                            <input type="radio" name="category" id="personal" value="Personal Spending" onChange = {e => setCategory(e.target.value)}/> Personal Spending &nbsp; &nbsp;
                            <input type="radio" name="category" id="recreation" value="Recreation and Entertainment" onChange = {e => setCategory(e.target.value)}/> Recreation and Entertainment &nbsp; &nbsp;
                            <input type="radio" name="category" id="misc" value="Miscellaneous" onChange = {e => setCategory(e.target.value)}/> Miscellaneous &nbsp; &nbsp;
                        </p>
                        : null
                    }
                    {category == "Food"
                        ? <p>
                            <input type="radio" name="category" id="housing" value="Housing"  onChange = {e => setCategory(e.target.value)}/> Housing &nbsp; &nbsp;
                            <input type="radio" name="category" id="food" value="Food" checked="checked" onChange = {e => setCategory(e.target.value)}/> Food &nbsp; &nbsp;
                            <input type="radio" name="category" id="transportation" value="Transportation" onChange = {e => setCategory(e.target.value)}/> Transportation &nbsp; &nbsp;
                            <input type="radio" name="category" id="insurance" value="Insurance" onChange = {e => setCategory(e.target.value)}/> Insurance &nbsp; &nbsp;
                            <input type="radio" name="category" id="utilities" value="Utilities" onChange = {e => setCategory(e.target.value)}/> Utilities &nbsp; &nbsp;
                            <input type="radio" name="category" id="medicalhealthcare" value="Medical and Healthcare" onChange = {e => setCategory(e.target.value)}/> Medical and Healthcare &nbsp; &nbsp;
                            <input type="radio" name="category" id="savings" value="Savings, Investing and Debt Payments" onChange = {e => setCategory(e.target.value)}/> Savings, Investing and Debt Payments &nbsp; &nbsp;
                            <input type="radio" name="category" id="personal" value="Personal Spending" onChange = {e => setCategory(e.target.value)}/> Personal Spending &nbsp; &nbsp;
                            <input type="radio" name="category" id="recreation" value="Recreation and Entertainment" onChange = {e => setCategory(e.target.value)}/> Recreation and Entertainment &nbsp; &nbsp;
                            <input type="radio" name="category" id="misc" value="Miscellaneous" onChange = {e => setCategory(e.target.value)}/> Miscellaneous &nbsp; &nbsp;
                        </p>
                        : null
                    }
                    {category == "Transportation"
                        ? <p>
                            <input type="radio" name="category" id="housing" value="Housing" onChange = {e => setCategory(e.target.value)}/> Housing &nbsp; &nbsp;
                            <input type="radio" name="category" id="food" value="Food" onChange = {e => setCategory(e.target.value)}/> Food &nbsp; &nbsp;
                            <input type="radio" name="category" id="transportation" value="Transportation" checked="checked" onChange = {e => setCategory(e.target.value)}/> Transportation &nbsp; &nbsp;
                            <input type="radio" name="category" id="insurance" value="Insurance" onChange = {e => setCategory(e.target.value)}/> Insurance &nbsp; &nbsp;
                            <input type="radio" name="category" id="utilities" value="Utilities" onChange = {e => setCategory(e.target.value)}/> Utilities &nbsp; &nbsp;
                            <input type="radio" name="category" id="medicalhealthcare" value="Medical and Healthcare" onChange = {e => setCategory(e.target.value)}/> Medical and Healthcare &nbsp; &nbsp;
                            <input type="radio" name="category" id="savings" value="Savings, Investing and Debt Payments" onChange = {e => setCategory(e.target.value)}/> Savings, Investing and Debt Payments &nbsp; &nbsp;
                            <input type="radio" name="category" id="personal" value="Personal Spending" onChange = {e => setCategory(e.target.value)}/> Personal Spending &nbsp; &nbsp;
                            <input type="radio" name="category" id="recreation" value="Recreation and Entertainment" onChange = {e => setCategory(e.target.value)}/> Recreation and Entertainment &nbsp; &nbsp;
                            <input type="radio" name="category" id="misc" value="Miscellaneous" onChange = {e => setCategory(e.target.value)}/> Miscellaneous &nbsp; &nbsp;
                        </p>
                        : null
                    }
                    {category == "Insurance"
                        ? <p>
                            <input type="radio" name="category" id="housing" value="Housing" onChange = {e => setCategory(e.target.value)}/> Housing &nbsp; &nbsp;
                            <input type="radio" name="category" id="food" value="Food" onChange = {e => setCategory(e.target.value)}/> Food &nbsp; &nbsp;
                            <input type="radio" name="category" id="transportation" value="Transportation" onChange = {e => setCategory(e.target.value)}/> Transportation &nbsp; &nbsp;
                            <input type="radio" name="category" id="insurance" value="Insurance" checked="checked" onChange = {e => setCategory(e.target.value)}/> Insurance &nbsp; &nbsp;
                            <input type="radio" name="category" id="utilities" value="Utilities" onChange = {e => setCategory(e.target.value)}/> Utilities &nbsp; &nbsp;
                            <input type="radio" name="category" id="medicalhealthcare" value="Medical and Healthcare" onChange = {e => setCategory(e.target.value)}/> Medical and Healthcare &nbsp; &nbsp;
                            <input type="radio" name="category" id="savings" value="Savings, Investing and Debt Payments" onChange = {e => setCategory(e.target.value)}/> Savings, Investing and Debt Payments &nbsp; &nbsp;
                            <input type="radio" name="category" id="personal" value="Personal Spending" onChange = {e => setCategory(e.target.value)}/> Personal Spending &nbsp; &nbsp;
                            <input type="radio" name="category" id="recreation" value="Recreation and Entertainment" onChange = {e => setCategory(e.target.value)}/> Recreation and Entertainment &nbsp; &nbsp;
                            <input type="radio" name="category" id="misc" value="Miscellaneous" onChange = {e => setCategory(e.target.value)}/> Miscellaneous &nbsp; &nbsp;
                        </p>
                        : null
                    }
                    {category == "Utilities"
                        ? <p>
                            <input type="radio" name="category" id="housing" value="Housing" onChange = {e => setCategory(e.target.value)}/> Housing &nbsp; &nbsp;
                            <input type="radio" name="category" id="food" value="Food" onChange = {e => setCategory(e.target.value)}/> Food &nbsp; &nbsp;
                            <input type="radio" name="category" id="transportation" value="Transportation" onChange = {e => setCategory(e.target.value)}/> Transportation &nbsp; &nbsp;
                            <input type="radio" name="category" id="insurance" value="Insurance" onChange = {e => setCategory(e.target.value)}/> Insurance &nbsp; &nbsp;
                            <input type="radio" name="category" id="utilities" value="Utilities" checked="checked" onChange = {e => setCategory(e.target.value)}/> Utilities &nbsp; &nbsp;
                            <input type="radio" name="category" id="medicalhealthcare" value="Medical and Healthcare" onChange = {e => setCategory(e.target.value)}/> Medical and Healthcare &nbsp; &nbsp;
                            <input type="radio" name="category" id="savings" value="Savings, Investing and Debt Payments" onChange = {e => setCategory(e.target.value)}/> Savings, Investing and Debt Payments &nbsp; &nbsp;
                            <input type="radio" name="category" id="personal" value="Personal Spending" onChange = {e => setCategory(e.target.value)}/> Personal Spending &nbsp; &nbsp;
                            <input type="radio" name="category" id="recreation" value="Recreation and Entertainment" onChange = {e => setCategory(e.target.value)}/> Recreation and Entertainment &nbsp; &nbsp;
                            <input type="radio" name="category" id="misc" value="Miscellaneous" onChange = {e => setCategory(e.target.value)}/> Miscellaneous &nbsp; &nbsp;
                        </p>
                        : null
                    }
                    {category == "Medical and Healthcare"
                        ? <p>
                            <input type="radio" name="category" id="housing" value="Housing" onChange = {e => setCategory(e.target.value)}/> Housing &nbsp; &nbsp;
                            <input type="radio" name="category" id="food" value="Food" onChange = {e => setCategory(e.target.value)}/> Food &nbsp; &nbsp;
                            <input type="radio" name="category" id="transportation" value="Transportation" onChange = {e => setCategory(e.target.value)}/> Transportation &nbsp; &nbsp;
                            <input type="radio" name="category" id="insurance" value="Insurance" onChange = {e => setCategory(e.target.value)}/> Insurance &nbsp; &nbsp;
                            <input type="radio" name="category" id="utilities" value="Utilities" onChange = {e => setCategory(e.target.value)}/> Utilities &nbsp; &nbsp;
                            <input type="radio" name="category" id="medicalhealthcare" value="Medical and Healthcare" checked="checked" onChange = {e => setCategory(e.target.value)}/> Medical and Healthcare &nbsp; &nbsp;
                            <input type="radio" name="category" id="savings" value="Savings, Investing and Debt Payments" onChange = {e => setCategory(e.target.value)}/> Savings, Investing and Debt Payments &nbsp; &nbsp;
                            <input type="radio" name="category" id="personal" value="Personal Spending" onChange = {e => setCategory(e.target.value)}/> Personal Spending &nbsp; &nbsp;
                            <input type="radio" name="category" id="recreation" value="Recreation and Entertainment" onChange = {e => setCategory(e.target.value)}/> Recreation and Entertainment &nbsp; &nbsp;
                            <input type="radio" name="category" id="misc" value="Miscellaneous" onChange = {e => setCategory(e.target.value)}/> Miscellaneous &nbsp; &nbsp;
                        </p>
                        : null
                    }
                    {category == "Savings, Investing and Debt Payments"
                        ? <p>
                            <input type="radio" name="category" id="housing" value="Housing" onChange = {e => setCategory(e.target.value)}/> Housing &nbsp; &nbsp;
                            <input type="radio" name="category" id="food" value="Food" onChange = {e => setCategory(e.target.value)}/> Food &nbsp; &nbsp;
                            <input type="radio" name="category" id="transportation" value="Transportation" onChange = {e => setCategory(e.target.value)}/> Transportation &nbsp; &nbsp;
                            <input type="radio" name="category" id="insurance" value="Insurance" onChange = {e => setCategory(e.target.value)}/> Insurance &nbsp; &nbsp;
                            <input type="radio" name="category" id="utilities" value="Utilities" onChange = {e => setCategory(e.target.value)}/> Utilities &nbsp; &nbsp;
                            <input type="radio" name="category" id="medicalhealthcare" value="Medical and Healthcare" onChange = {e => setCategory(e.target.value)}/> Medical and Healthcare &nbsp; &nbsp;
                            <input type="radio" name="category" id="savings" value="Savings, Investing and Debt Payments" checked="checked" onChange = {e => setCategory(e.target.value)}/> Savings, Investing and Debt Payments &nbsp; &nbsp;
                            <input type="radio" name="category" id="personal" value="Personal Spending" onChange = {e => setCategory(e.target.value)}/> Personal Spending &nbsp; &nbsp;
                            <input type="radio" name="category" id="recreation" value="Recreation and Entertainment" onChange = {e => setCategory(e.target.value)}/> Recreation and Entertainment &nbsp; &nbsp;
                            <input type="radio" name="category" id="misc" value="Miscellaneous" onChange = {e => setCategory(e.target.value)}/> Miscellaneous &nbsp; &nbsp;
                        </p>
                        : null
                    }
                    {category == "Personal Spending"
                        ? <p>
                            <input type="radio" name="category" id="housing" value="Housing" onChange = {e => setCategory(e.target.value)}/> Housing &nbsp; &nbsp;
                            <input type="radio" name="category" id="food" value="Food" onChange = {e => setCategory(e.target.value)}/> Food &nbsp; &nbsp;
                            <input type="radio" name="category" id="transportation" value="Transportation" onChange = {e => setCategory(e.target.value)}/> Transportation &nbsp; &nbsp;
                            <input type="radio" name="category" id="insurance" value="Insurance" onChange = {e => setCategory(e.target.value)}/> Insurance &nbsp; &nbsp;
                            <input type="radio" name="category" id="utilities" value="Utilities" onChange = {e => setCategory(e.target.value)}/> Utilities &nbsp; &nbsp;
                            <input type="radio" name="category" id="medicalhealthcare" value="Medical and Healthcare" onChange = {e => setCategory(e.target.value)}/> Medical and Healthcare &nbsp; &nbsp;
                            <input type="radio" name="category" id="savings" value="Savings, Investing and Debt Payments" onChange = {e => setCategory(e.target.value)}/> Savings, Investing and Debt Payments &nbsp; &nbsp;
                            <input type="radio" name="category" id="personal" value="Personal Spending" checked="checked" onChange = {e => setCategory(e.target.value)}/> Personal Spending &nbsp; &nbsp;
                            <input type="radio" name="category" id="recreation" value="Recreation and Entertainment" onChange = {e => setCategory(e.target.value)}/> Recreation and Entertainment &nbsp; &nbsp;
                            <input type="radio" name="category" id="misc" value="Miscellaneous" onChange = {e => setCategory(e.target.value)}/> Miscellaneous &nbsp; &nbsp;
                        </p>
                        : null
                    }
                    {category == "Recreation and Entertainment"
                        ? <p>
                            <input type="radio" name="category" id="housing" value="Housing" onChange = {e => setCategory(e.target.value)}/> Housing &nbsp; &nbsp;
                            <input type="radio" name="category" id="food" value="Food" onChange = {e => setCategory(e.target.value)}/> Food &nbsp; &nbsp;
                            <input type="radio" name="category" id="transportation" value="Transportation" onChange = {e => setCategory(e.target.value)}/> Transportation &nbsp; &nbsp;
                            <input type="radio" name="category" id="insurance" value="Insurance" onChange = {e => setCategory(e.target.value)}/> Insurance &nbsp; &nbsp;
                            <input type="radio" name="category" id="utilities" value="Utilities" onChange = {e => setCategory(e.target.value)}/> Utilities &nbsp; &nbsp;
                            <input type="radio" name="category" id="medicalhealthcare" value="Medical and Healthcare" onChange = {e => setCategory(e.target.value)}/> Medical and Healthcare &nbsp; &nbsp;
                            <input type="radio" name="category" id="savings" value="Savings, Investing and Debt Payments" onChange = {e => setCategory(e.target.value)}/> Savings, Investing and Debt Payments &nbsp; &nbsp;
                            <input type="radio" name="category" id="personal" value="Personal Spending" onChange = {e => setCategory(e.target.value)}/> Personal Spending &nbsp; &nbsp;
                            <input type="radio" name="category" id="recreation" value="Recreation and Entertainment" checked="checked" onChange = {e => setCategory(e.target.value)}/> Recreation and Entertainment &nbsp; &nbsp;
                            <input type="radio" name="category" id="misc" value="Miscellaneous" onChange = {e => setCategory(e.target.value)}/> Miscellaneous &nbsp; &nbsp;
                        </p>
                        : null
                    }
                    {category == "Miscellaneous"
                        ? <p>
                            <input type="radio" name="category" id="housing" value="Housing" onChange = {e => setCategory(e.target.value)}/> Housing &nbsp; &nbsp;
                            <input type="radio" name="category" id="food" value="Food" onChange = {e => setCategory(e.target.value)}/> Food &nbsp; &nbsp;
                            <input type="radio" name="category" id="transportation" value="Transportation" onChange = {e => setCategory(e.target.value)}/> Transportation &nbsp; &nbsp;
                            <input type="radio" name="category" id="insurance" value="Insurance" onChange = {e => setCategory(e.target.value)}/> Insurance &nbsp; &nbsp;
                            <input type="radio" name="category" id="utilities" value="Utilities" onChange = {e => setCategory(e.target.value)}/> Utilities &nbsp; &nbsp;
                            <input type="radio" name="category" id="medicalhealthcare" value="Medical and Healthcare" onChange = {e => setCategory(e.target.value)}/> Medical and Healthcare &nbsp; &nbsp;
                            <input type="radio" name="category" id="savings" value="Savings, Investing and Debt Payments" onChange = {e => setCategory(e.target.value)}/> Savings, Investing and Debt Payments &nbsp; &nbsp;
                            <input type="radio" name="category" id="personal" value="Personal Spending" onChange = {e => setCategory(e.target.value)}/> Personal Spending &nbsp; &nbsp;
                            <input type="radio" name="category" id="recreation" value="Recreation and Entertainment" onChange = {e => setCategory(e.target.value)}/> Recreation and Entertainment &nbsp; &nbsp;
                            <input type="radio" name="category" id="misc" value="Miscellaneous" checked="checked" onChange = {e => setCategory(e.target.value)}/> Miscellaneous &nbsp; &nbsp;
                        </p>
                        : null
                    }
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

export default EditOneExpense;