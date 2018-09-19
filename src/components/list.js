import React, { Component } from 'react';
import dummyListData from '../dummy_data/list_data';

class List extends Component {
    //newer syntax to set property in a class
    //define property
    state = {
        list: []
    }

    componentDidMount() {
        this.getListData();
    }

    getListData() {
        // call server to get data
        this.setState({
            list: dummyListData
        })
    }

    render() {
        const listElements = this.state.list.map((item, index) => {
            return <li className="collection-item" key={item._id}>
                {item.title}
            </li>
        });

        return (
            <ul className="collection">
                {listElements}
            </ul>
        );
    }
}

export default List;