import React from 'react';

import './listdata.css';

const ListData = (props) => {

    // console.log('all data', props)

    return (
        <div className='all-data-container'>
            <div className={'show-data-info ' + (props.selectedId == props.data.index ? 'clicked' : null )}>{props.data.index}</div>
            <div className={'show-name ' + (props.selectedId == props.data.index ? 'clicked' : null )}>{props.data.fullname}</div>
            <div className={'show-data-info ' + (props.selectedId == props.data.index ? 'clicked' : null )}>{props.data.email}</div>
            <div className={'show-data-info ' + (props.selectedId == props.data.index ? 'clicked' : null )}>{props.data.age}</div>
        </div>
    )
}

export default ListData;