import React from 'react';

const ComplaintsModal = (props) => {
    if (props.complaints.length === 0) {
        return (
            <div id="complaintsModal" className="modal">
                <p className="modal-content">No complaints have been logged</p>
            </div>
        );
    } else {
        return (
            <div id="complaintsModal" className="modal">
                <div className="modal-content">
                    <h4 className="header">Complaints details</h4>
                    <ul>
                        {props.complaints.map((complaint) => {
                            return (
                                <li key={complaint.id}>
                                    <a 
                                    id={complaint.id}
                                    href="#h"
                                    className="modal-close">
                                        {complaint.id}. {complaint.transactionType} NGN {complaint.transactionAmount} {complaint.transactionTime.toString()}
                                    </a>
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

export default ComplaintsModal;