import 'materialize-css/dist/css/materialize.min.css';
import React, { Component } from 'react';
import axios from 'axios';
import AddItem from './add_item';
import List from './list';
import dummyListData from '../dummy_data/list_data';


const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=c718_miatran';
//?key query string
//any request you can send of query string with

class App extends Component {
    //newer syntax to set property in a class
    //define property
    state = {
        list: [],
        error: ''
    }

    componentDidMount() {
        this.getListData();
    }

    // getListData() {
    //     // call server to get data
    //     //http:api.reactprototypes.com/todos?key=somekey
    //     const resp = axios.get(`${BASE_URL}/todos${API_KEY}`).then((resp) => {
    //         if (resp.data.success) {
    //             this.setState({
    //                 list: resp.data.todos
    //             })
    //         }
    //     }).catch((err) => {
    //         console.log('Get List Data Error:', err.message);
    //         this.setState({
    //             error: 'Error retrieving list data'
    //         })
    //     });

    //     console.log('Axios returns value:', resp);

    //     // this.setState({
    //     //     list: dummyListData
    //     // })
    // }

    async getListData() {
        try {
            const resp = await axios.get(`${BASE_URL}/todos${API_KEY}`);

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


    // addItem = (item) => {
    //     // item._id = new Date().getTime();
    //     // this.setState({
    //     //     list: [item, ...this.state.list]
    //     // })
    //     axios.post(`${BASE_URL}/todos${API_KEY}`, item).then((resp) => {
    //         console.log('Add Item Resp:', resp);
    //         this.getListData();
    //     }).catch((err) => {
    //         console.log('Add Item Error:', err.message);
    //     })
    // }


    addItem = async (item) => {
        await axios.post(`${BASE_URL}/todos${API_KEY}`, item);
        this.getListData();
    }

    // deleteItem = (index) => {
    //     const { list } = this.state;
    //     const listCopy = list.slice();
    //     listCopy.splice(index, 1);
    //     this.setState({
    //         list: listCopy
    //     })
    // }


    deleteItem = async (id) => {
        await axios.delete(`${BASE_URL}/todos/${id + API_KEY}`);
        this.getListData();
    }

    render() {
        const { list, error } = this.state;
        return (
            <div className="container">
                <h1 className="center">To Do List</h1>
                <AddItem add={this.addItem} />
                <p className="red-text">{error}</p>
                <List data={list} delete={this.deleteItem} />
            </div>
        );
    }
}

export default App;
