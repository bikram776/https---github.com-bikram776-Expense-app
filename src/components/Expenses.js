import ExpenseItem from "../components/ExpenseItem";
import "./App.css";
import Card from "../components/UI/Card";

function Expenses(props) {
  return (
    <div>
      <Card className="expenses">
      {Array.isArray(props.items) && props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            id={expense.id}
            title={expense.title}
            amount={expense.amount} 
            date={expense.date}
            onDelete={props.onDeleteExpense}
          />
        ))}
        {/* <ExpenseItem expense={expenses[1]}></ExpenseItem>
    <ExpenseItem expense={expenses[2]}></ExpenseItem>
    <ExpenseItem expense={expenses[3]}></ExpenseItem> */}
      </Card>
    </div>
  );
}

export default Expenses;
