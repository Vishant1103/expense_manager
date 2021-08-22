import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import { useState } from 'react';

function NewExpense(props) {
	const [ isEditing, setIsEditing ] = useState(false);
	const onSubmitFormData = (submittedExpenseData) => {
		const expenseData = {
			...submittedExpenseData,
			id: Math.random().toString()
		};
		props.onAddExpense(expenseData);
	};

	const startEditHandler = () => {
		setIsEditing(true);
	};

	const stopEditHandler = () => {
		setIsEditing(false);
	};

	return (
		<div className="new-expense">
			{!isEditing && <button onClick={startEditHandler}>Add Expense</button>}
			{isEditing && <ExpenseForm onSubmitForm={onSubmitFormData} onCancel={stopEditHandler} />}
		</div>
	);
}

export default NewExpense;
