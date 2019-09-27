import React from 'react';
import ChildTransferActions from './ChildTransferAction';
import transferImage from '../icons/TransferFunds.png';
import historyImage from '../icons/TransactionHistory.jpg';
import complaintsImage from '../icons/Complaints.png';

const TransferActions = (props) => (
   <section className="row center-align">
       <ChildTransferActions
       imageUrl={transferImage}
       cardTitle={'Transfer Funds'}
       cardContent={'Transfer funds to other bank accounts'}
       modalLink={'#transferModal'}
       buttonDescription={'Transfer Funds'}
       />
       <ChildTransferActions
       imageUrl={historyImage}
       cardTitle={'Transfer History'}
       cardContent={'View your transaction history'}
       modalLink={'#historyModal'}
       buttonDescription={'View Transactions'}
       />
       <ChildTransferActions
       imageUrl={complaintsImage}
       cardTitle={'Complaints History'}
       cardContent={'View all your complaints'}
       modalLink={'#complaintsModal'}
       buttonDescription={'View Complaints'}
       />
   </section>
);

export default TransferActions;