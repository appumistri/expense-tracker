import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {

    const [isNewExpenseFormVisible, setNewExpenseFormVisibility] = useState(false);

    const formSubmitHandler = (expenseData) => {
        props.onNewExpense(expenseData);
        setNewExpenseFormVisibility(false);
    };

    const addExpenseHandler = () => {
        setNewExpenseFormVisibility(true);
    }

    const formCancelHandler = () => {
        setNewExpenseFormVisibility(true);
    }

    let newExpenseState = <div><button onClick={addExpenseHandler}>Add Expense</button></div>;

    if (isNewExpenseFormVisible) {
        newExpenseState = <ExpenseForm onFormSubmit={formSubmitHandler} onFormCancel={formCancelHandler}/>;
    }
    

    return (
        <div className="new-expense">
            {newExpenseState}
        </div>
    );
}

export default NewExpense;