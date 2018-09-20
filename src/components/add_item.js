import React, { Component } from 'react';

class AddItem extends Component {

    state = {
        title: '',
        details: ''
    }

    handleAddItem = (event) => {
        event.preventDefault();
        this.props.add(this.state);
        this.setState({
            title: '',
            details: ''
        })
    }

    render() {
        const { title, details } = this.state;
        return (
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
                    <div className="col s8 offset-s2 left-align">
                        <button className="btn orange">ADD ITEM</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default AddItem;