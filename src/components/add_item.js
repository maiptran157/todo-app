import React, { Component } from 'react';
import NavBtn from './nav_btn';
import axios from 'axios';
import config from '../config'; //if you name your file index, you do not need to type in index for ../config

class AddItem extends Component {

    state = {
        title: '',
        details: ''
    }

    handleAddItem = async (event) => {
        event.preventDefault();
        // this.props.add(this.state);
        // this.setState({
        //     title: '',
        //     details: ''
        // });
        // addItem = async (item) => {
        await axios.post(`${config.BASE_URL}/todos${config.API_KEY}`, this.state);
        //     this.getListData();
        // }
        this.props.history.push('/'); //any route you wanna go back to
    }

    render() {
        const { title, details } = this.state;
        return (
            <div>
                <h1 className="center">Add To Do Item</h1>
                <NavBtn to="/" text="< Back To List" color="#b39ddb deep-purple lighten-3" />
                <form onSubmit={this.handleAddItem}>
                    <div className="row">
                        <div className="col s8 offset-s2">
                            <label>Title</label>
                            <input onChange={(event) => {
                                this.setState({
                                    title: event.target.value
                                })
                            }} type="text" value={title} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s8 offset-s2">
                            <label>Details</label>
                            <input onChange={(event) => {
                                this.setState({
                                    details: event.target.value
                                })
                            }} type="text" value={details} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s8 offset-s2 right-align">
                            <button className="btn orange">ADD ITEM</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddItem;