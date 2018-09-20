import React from 'react';


export default (props) => {
    return <li className="collection-item">
        <div className="col s8"> {props.item.title}</div>
        <div className="col s4 right-align">
            <button className="btn red darken-2" onClick={props.delete}>Delete</button></div>
    </li>
};