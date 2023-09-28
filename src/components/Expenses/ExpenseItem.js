import ExpenseDate from './ExpenseDate';
import Card from "../UI/Card";
import deleteImg from "../../images/delete-button.png";
import './ExpenseItem.css';

function ExpenseItem(props) {
  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
          <img id={props.id} className='expense-item__delete' src={deleteImg} alt="delete button" onClick={props.onDelete}/>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
