import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
    

    const [enteredTitle, setTitle] = useState('');
    const [enteredAmout, setAmount] = useState(0);
    const [enteredDate, setDate] = useState('');

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        props.onFormSubmit({
            title: enteredTitle,
            amount: +enteredAmout,
            date: new Date(enteredDate)
        });
        setTitle('');
        setAmount(0);
        setDate('');
    };

    const formCancelHandler = () => {
        props.onFormCancel();
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} minLength="2" onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmout} min="0" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} min="01-01-2019" max="31-12-2022" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={formCancelHandler}>Cancel</button>
                <button type="submit" >Add New Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;