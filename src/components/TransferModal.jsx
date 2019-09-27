import React from 'react';

const TransferModal = (props) => {
    return (
        <div id="transferModal" className="modal">
            <form className="modal-content">
                <div>
                    <label htmlFor="accountNumber">Account Number</label>
                    <input
                    id="accountNumber" name="accountNumber" type="number" value={props.accountNumber} onChange={props.handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="amount">Amount</label>
                    <input
                    id="amount" name="amount" type="number" value={props.amount} onChange={props.handleChange}
                    />
                </div>
                <div className="modal-footer">
                    <button className="waves-effect waves-green btn-flat" onClick={(e) => {
                        e.preventDefault();
                        props.handleTransfer(props.accountNumber, props.amount)}}
                    >
                        Transfer
                    </button>
                    <button
                    className="modal-close waves-effect waves-green btn-flat" onClick={(e) => {e.preventDefault()}}
                    >
                        Exit
                    </button>
                </div>
                
            </form>
        </div>
    );
}

export default TransferModal;