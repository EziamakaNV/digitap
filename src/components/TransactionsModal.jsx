import React from 'react';

const TransactionsModal = (props) => {
    if (props.transactions.length === 0) {
        return (
            <div id="historyModal" className="modal">
                <p className="modal-content">No transactions have occured</p>
            </div>
        );
    } else {
        return (
            <div id="historyModal" className="modal">
                <div className="modal-content">
                    <h4 className="header">Transaction details</h4>
                    <ul>
                        {props.transactions.map((transaction) => {
                            return (
                                <li key={transaction.id}>
                                    <div>
                                        {transaction.id}. {transaction.type} NGN {transaction.amount} {transaction.time.toString()}
                                    </div>
                                    <a 
                                    id={transaction.id}
                                    href="#h"
                                    className="modal-close"
                                    onClick={(e) => {
                                        props.submitComplaint(e,transaction.type,transaction.amount,transaction.time)
                                    }}
                                    >
                                       Query Transaction 
                                    </a>
                                    <div className="divider"></div>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="modal-footer">
                        <button className="modal-close waves-effect waves-green btn-flat">
                            Exit
                        </button>
                    </div>
                </div>
            </div>
        );
    }
};

export default TransactionsModal