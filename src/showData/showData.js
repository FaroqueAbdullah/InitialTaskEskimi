import React from 'react';

import './showData.css';

const ShowData = (props) => {

    return (
        <div className='selected-data-container'>
            Selected Employee
            {
                props.id ?
                    <div>
                        <div className='data-container'>ID: {props.id}</div>
                        <div className='data-container'>Name: {props.name}</div>
                        <div className='data-container'>Surname: {props.surname}</div>
                        <div className='data-container'>Age: {props.age}</div>
                        <div className='data-container'>Email: {props.email}</div>
                    </div>
                    :
                    null
            }
        </div>
    )
}

export default ShowData;