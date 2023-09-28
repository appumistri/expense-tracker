import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

function ExpenseList(props) {
    if (props.items.length === 0) {
        return (<h2 className="expenses-list__fallback">No Expense Item Found</h2>);
    }
    else {
        return (
            <ul className="expenses-list">
                {props.items.map(expense => (
                    <ExpenseItem
                        key={expense.id}
                        id={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                        onDelete={props.onExpenseDelete}
                    />
                ))}
            </ul>
        );
    }
}

export default ExpenseList;