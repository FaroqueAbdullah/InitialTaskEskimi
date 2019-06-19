import React from 'react';

import './header.css';

const Header = (props) => {

    return (
        <div className='header-container'>
            <div className='header-name'>
                Eskimi Initial Task
            </div>
            <div class="dropdown">
                <button class="dropbtn">Per Page Data : {props.paginationValue}</button>
                <div class="dropdown-content">
                    <a onClick={()=>{props.setPagination(100)}}>100</a>
                    <a onClick={()=>{props.setPagination(500)}}>500</a>
                    <a onClick={()=>{props.setPagination(1000)}}>1000</a>
                    <a onClick={()=>{props.setPagination(5000)}}>5000</a>
                </div>
            </div>
        </div>
    )
}

export default Header;