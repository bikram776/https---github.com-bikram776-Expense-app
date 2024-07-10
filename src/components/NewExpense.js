import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(prop) {

  const savedExpenseData = (EnteredData) => {
    const expenseData = {
      ...EnteredData,
      date: new Date(EnteredData.date),
      id : ((Math.random() + 1).toFixed(2)).toString()
    };
    prop.AddFormData(expenseData);
    
  };

  return (
    <div className="new-expense">
      <ExpenseForm SavedData={savedExpenseData}></ExpenseForm>
    </div>
  ); 
}

export default NewExpense;
