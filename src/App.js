import { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

const Oldexpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", 
    amount: 799.49, 
    date: new Date(2021, 2, 12)  
   },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];



function App() {

 
  const [expenses, UpdateExpense] = useState(Oldexpenses);
  // creating elements using only React
  // return React.createElement(
  //   Card,
  //   { className: 'expenses' },
  //   React.createElement(ExpenseItem, { expense: expenses[0] }),
  //   React.createElement(ExpenseItem, { expense: expenses[1] }),
  //   React.createElement(ExpenseItem, { expense: expenses[2] }),
  //   React.createElement(ExpenseItem, { expense: expenses[3] })
  // );


  const FormHandler = expense =>{
    UpdateExpense(prevExpense =>{
      return [expense, ...prevExpense]; 
    });
    console.log(expense);
  };

  const deleteExpenseHandler = (expenseId) => {
    console.log('Deleting expense with id:', expenseId);
    UpdateExpense(prevExpense => prevExpense.filter(expense => expense.id !== expenseId)
    );
  };


  return (
    <div>
      <NewExpense AddFormData={FormHandler} />
      <Expenses items={expenses} onDeleteExpense={deleteExpenseHandler}/>
    </div>
  );
}

export default App;
