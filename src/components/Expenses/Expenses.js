import { useState } from 'react';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';
import ExpenseList from './ExpenseList';
import ExpenseChart from "../Chart/ExpenseChart";
import './Expenses.css';

function Expenses(props) {

    const [filteredYear, setYearFilter] = useState('2022');

    const applyExpenseFilterChange = (selectedYear) => {
        setYearFilter(selectedYear);
    };

    const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === filteredYear);

    return (
        <Card className='expenses'>
            <ExpenseFilter onExpenseFilterChange={applyExpenseFilterChange} />
            <ExpenseChart items={filteredExpenses}/>
            <ExpenseList items={filteredExpenses} />
        </Card>
    );
}

export default Expenses;