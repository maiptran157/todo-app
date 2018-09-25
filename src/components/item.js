import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
    return <li className="collection-item">
        <div className="col s8">
            <Link to={`/item/${props.item._id}`}>{props.item.title}</Link>

        </div>
        <div className="col s4 right-align">
            <button className="btn red darken-2" onClick={props.delete}>Delete</button></div>
    </li>
};