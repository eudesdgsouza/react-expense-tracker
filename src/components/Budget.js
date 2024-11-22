import React from 'react'
import {useAuthState} from '../Context/AuthContext';

function Budget() {

    const {transaction} = useAuthState();

    const amounts = transaction && transaction.map(trans => trans.amount);

    const incomeBudget = amounts && amounts.filter(item => item > 0)
    .reduce((acc,curr) => acc += Number(curr) , 0);

    const expenceBudget = amounts && amounts.filter(item => item < 0)
    .reduce((acc,curr) => acc += Number(curr) * -1 , 0)

    const balanceBudget = incomeBudget - expenceBudget;

    return (
        <div className='container mt-1'>
            <div className="row budget my-4">
            <div className='col-11 col-md-3 mb-2 balance'>
                <p>Balanço</p>
                <p className='budget-amount'>R${balanceBudget}</p>
            </div>
            <div className='col-5 col-md-3 mb-2 income'>
                <p>Renda</p>
                <p className='budget-amount'>R${incomeBudget}</p>
            </div>
            <div className='col-5 col-md-3 mb-2 expence'>
                <p>Despesa</p>
                <p className='budget-amount'>R${expenceBudget}</p>
            </div>
            </div>
        </div>
    )
}

export default Budget
