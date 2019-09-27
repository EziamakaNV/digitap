import React from 'react';
import Header from '../components/Header.jsx';
import Welcome from '../components/Welcome.jsx';
import Balance from '../components/Balance.jsx';
import TransferActions from '../components/TransferActions.jsx';
import TransferModal from '../components/TransferModal.jsx';
import TransactionsModal from '../components/TransactionsModal.jsx';
import ComplaintsModal from '../components/ComplaintsModal.jsx';
import M from 'materialize-css'; // http://fullstackhybrid.com/using-materializecss-with-reactjs/

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'John Doe',
            balance: 70500,
            transactions: [],
            complaints: [],
            transferDetails: {
                accountNumber: '',
                amount: '',
            }
        }
    }

    transferModal = () => {
        this.setState({transferModalOpen: !this.state.transferModalOpen},
            () => {
                console.log('Transfer Modal: ',this.state.transferModalOpen);
            });
    }
    
    historyModal = () => {
        this.setState({transferHistoryModalOpen: !this.state.transferHistoryModalOpen},
            () => {
                console.log('History Modal: ',this.state.transferHistoryModalOpen);
            });
    }

    complaintsModal = () => {
        this.setState({complaintsModalOpen: !this.state.complaintsModalOpen},
            () => {
                console.log('Complaints Modal: ', this.state.complaintsModalOpen);
            });
    }

    handleTransferChange = (e) => {
        e.persist(); /*
        This synthetic event is reused for performance reasons.
        If you're seeing this, you're accessing the property `target` on a released/nullified synthetic event.
        This is set to null. If you must keep the original synthetic event around, use event.persist().
        See https://fb.me/react-event-pooling for more information. 
        */
        this.setState((prevState) => { // update an object in state
            const transferDetails = Object.assign({}, prevState.transferDetails);
            console.log(transferDetails);
            transferDetails[e.target.id] = Number(e.target.value);
            return { transferDetails };
        }, () => {
            console.log('Transfer details: ',this.state.transferDetails)
        });
    }

    transferFunds = (accountNumber, amount) => {
        if (this.state.balance < amount) return alert('Your balance is insufficient');
        this.setState({
            balance: this.state.balance - amount,
            transactions: [
            ...this.state.transactions,
            {
                id: this.state.transactions.length + 1,
                time: new Date(),
                type: 'DEBIT',
                amount,
                accountNumber
            }
        ]}, () => {
            alert('Transfer successful');
            console.log('Transactions: ',this.state.transactions);
        });
    }

    submitComplaint = (e, type, amount, time) => {
        this.setState({complaints:[
            ...this.state.complaints,
            {
                id: this.state.complaints.length + 1,
                transactionId: e.target.id,
                transactionType: type,
                transactionAmount: amount,
                transactionTime: time,
            }
        ]}, () => {
            alert('Your query was sucessfully logged. The transaction will be looked into');
            console.log(this.state.complaints)
        });
    }

    componentDidMount() { // Initialize materialize css modals
        document.addEventListener('DOMContentLoaded', function() {
            const elems = document.querySelectorAll('.modal');
            M.Modal.init(elems);
        });

    }

    render() {
        return (
            <React.Fragment>
                <Header/>
                <Welcome name={this.state.name}/>
                <Balance balance={this.state.balance}/>
                <TransferActions
                />
                <TransferModal
                accountNumber={this.state.transferDetails.accountNumber}
                amount={this.state.transferDetails.amount}
                handleChange={this.handleTransferChange}
                handleTransfer={this.transferFunds}
                />
                <TransactionsModal
                transactions={this.state.transactions}
                submitComplaint={this.submitComplaint}
                />
                <ComplaintsModal
                complaints={this.state.complaints}
                />
            </React.Fragment>
        );
    }
}