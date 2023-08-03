import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Dropdown from './Dropdown';



var x;
const Budget = () => {
  const { budget, dispatch, expenses } = useContext(AppContext);

  const handleDropdownChange = (selectedOption) => {
    console.log('Selected option:', selectedOption);
    x = selectedOption;
  };


  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  const increaseBudget = () => {
    if (budget < 2000) {
      dispatch({ type: 'SET_BUDGET', payload: budget + 10 });
    } else {
      alert("Cannot increase the allocation! Budget limit reached (2000).");
    }
  };

  const decreaseBudget = () => {
    if (budget > totalExpenses) {
      dispatch({ type: 'SET_BUDGET', payload: budget - 10 });
    } else {
      alert("Cannot decrease the allocation! Budget limit is 0.");
    }
  };

  return (
    <div className='alert alert-secondary'>
      <span>Budget: £{budget}</span>
      <div>
        <button onClick={increaseBudget}>Increase Budget</button>
        <button onClick={decreaseBudget}>Decrease Budget</button>
      </div>
    </div>
  );
};

export default Budget;

