import 'materialize-css/dist/css/materialize.min.css';
import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
// import axios from 'axios';
import AddItem from './add_item';
import List from './list';
// import dummyListData from '../dummy_data/list_data';
import Details from './details';
import NotFound from './not_found';

// const BASE_URL = 'http://api.reactprototypes.com';
// const API_KEY = '?key=c718_miatran';
//?key query string
//any request you can send of query string with

class App extends Component {

    render() {
        // const { list, error } = this.state;
        return (

            <div className="container">
                <Switch>
                    <Route path="/" exact component={List}
                    // render={(routingInfo) => {
                    //     // console.log("routing info:", routingInfo);
                    //     return <List {...routingInfo} error={error} data={list} delete={this.deleteItem} />
                    // }}
                    />
                    <Route path="/add-item" component={AddItem}
                    // render={props => {
                    //     return <AddItem {...props} add={this.addItem} />
                    // }} 
                    />
                    <Route path="/item/:itemId" component={Details} />
                    <Route path="/" component={NotFound} />
                </Switch>
            </div>
        );
    }
}

export default App;
