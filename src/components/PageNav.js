import React from 'react';
import './style.css';
import { useHistory } from "react-router-dom";
const PageNav = ({pagename}) => {
    let history = useHistory()
    return (
        <div className="page-nav">
            <i className="las la-arrow-left" onClick={() => history.goBack()} ></i>
            <span>{pagename}</span>
        </div>
    );
}

export default PageNav;
