import ExpensesList from './ExpensesList';
import Card from '../UI/Card.js';
import './NewComponent.css';
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';
import ExpensesChart from './ExpensesChart';

function NewComponent(props) {
	const [ filterYear, setFilterYear ] = useState('2020');

	const selectedFilterYear = (selectedYear) => {
		setFilterYear(selectedYear);
	};

	const filteredArray = props.arr.filter((expense) => {
		return expense.date.getFullYear().toString() === filterYear;
	});

	return (
		<Card className="expenses">
			<ExpenseFilter selected={filterYear} onFilterYear={selectedFilterYear} />
			<ExpensesChart expenses={filteredArray} />
			<ExpensesList filteredExpenses={filteredArray} />   
		</Card>
	);
}

export default NewComponent;
