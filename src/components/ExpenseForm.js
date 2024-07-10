import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(prop) {
  //   const [EnterTitle, UpdateTitle] = useState("");
  //   const [EnterAmount, UpdateAmount] = useState("");
  //   const [EnterDate, UpdateDate] = useState("");

  const [initialData, UpdateData] = useState({
    title: " ",
    amount: " ",
    date: " ",
  }); //initial state

  const handleInputChange = (event) => { 
    const {name, value} = event.target;
    UpdateData((prevData) => ({...prevData, [name]: value}));
  };

//   const TitleHandler = (event) => { 
//     UpdateTitle(event.target.value);
//   };

//   const AmountHandler = (event) => {
//     UpdateAmount(event.target.value); 
//   };

//   const DateHandler = (event) => {
//     UpdateDate(event.target.value);
//   };

const SubmitHandler = (event) => {
  event.preventDefault();
  const expenseData = initialData;
  prop.SavedData(expenseData);
    UpdateData({title: " ", amount: " ", date: " "});

};


  return (
    <form onSubmit={SubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input value={initialData.title} type="text" name="title" onChange={handleInputChange} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            value={initialData.amount}
            min="1.0"
            step="0.1"
            onChange={handleInputChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={initialData.date}
            min="2023-08-08"
            max="25-12-31"
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
