import React, { Component } from 'react';
import Item from './item';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBtn from './nav_btn';
import config from '../config';

class List extends Component {
    state = {
        list: [],
        error: ''
    }

    componentDidMount() {
        this.getListData();
    }

    async getListData() {
        try {
            const resp = await axios.get(`${config.BASE_URL}/todos${config.API_KEY}`);

            if (!resp.data.success) {
                throw new Error('Something went wrong');
            }

            this.setState({
                list: resp.data.todos
            })
        } catch (err) {
            console.log('Error message:', err.message)
            this.setState({
                error: 'Error retrieving list data'
            })
        }

    }


    deleteItem = async (id) => {
        await axios.delete(`${config.BASE_URL}/todos/${id + config.API_KEY}`);
        this.getListData();
    }


    render() {
        // console.log('list props:', props);
        const { error, list } = this.state;
        const listElements = list.map((item, index) => {
            return <Item key={item._id} item={item} delete={() => { this.deleteItem(item._id) }} />
        });

        return (
            <div>
                <h1 className="center">To Do List</h1>
                {/* <div className="row">
                <div className="col s12 right-align">
                    <Link to="/add-item" className="btn #aed581 light-green lighten-2">Add Item</Link>
                </div>
            </div> */}
                <NavBtn to="/add-item" color="#aed581 light-green lighten-2" text="+ Add Item" />
                <p className="red-text text-darken-2">{error}</p>
                <ul className="collection">
                    {listElements}
                </ul>
            </div>
        );
    }

}

export default List;