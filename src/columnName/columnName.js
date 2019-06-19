import React from 'react';

import './columnName.css';

const ColumnName = (props) => {

    return (
        <div className='column-name-container'>
            <div className='show-data' onClick={()=>{props.changeOrder('id')}}>ID </div>
            <div className='show-name' onClick={()=>{props.changeOrder('name')}}>Name </div>
            <div className='show-data' onClick={()=>{props.changeOrder('email')}}>Email </div>
            <div className='show-data' onClick={()=>{props.changeOrder('age')}}>Age</div>
        </div>
    )
}

export default ColumnName;