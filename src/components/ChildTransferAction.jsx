import React from 'react';

const ChildTransferAction = (props) => (
<div className="col s12 m4">
      <div className="card">
        <div className="card-image">
          <img className="responsive-img" src={props.imageUrl} alt="Transfer funds"/>
          <span className="card-title">{props.cardTitle}</span>
        </div>
        <div className="card-content">
          <p>{props.cardContent}</p>
        </div>
        <div className="card-action">
            <a href={props.modalLink} className="modal-trigger">
                {props.buttonDescription}
            </a>
        </div>
      </div>
    </div>
);

export default ChildTransferAction;