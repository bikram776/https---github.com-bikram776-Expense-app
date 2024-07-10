import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from './ExpenseDate';
import Card from "./UI/Card";
import { useState } from "react";


function ExpenseItem(props) {
  // const ExpDate = new Date(2023, 1, 15);
  // const ExpTitle = "Home Loan";
  // const ExpAmount = 100;
  
 const [initialTitle, SetTitle] = useState(props.title);

//  let Titles = props.expense.title;

  function ClickHandle() {
  
  SetTitle('New Pop');
  console.log(initialTitle);
};
 
 
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{initialTitle}</h2>
        <div className="expense-item__price">₹{props.amount}</div>
      </div>
      <button className="Btnn" onClick={ClickHandle}>Change Title</button>
      <button className="Btnn" onClick={() => {console.log('Delete btn clicked for id:', props.id); props.onDelete(props.id)}}>Delete</button>
    </Card>
  );
}

export default ExpenseItem;
