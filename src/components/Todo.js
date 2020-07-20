import React, { Component } from 'react';

export default class Todo extends Component {
    render(){
        return (
            <tr className='todo'>
                <td>{ this.props.todo.id }</td>
                <td className='title'>{ this.props.todo.title }</td>
                <td>{ this.props.todo.completed.toString() }</td>
                <td>Edit/Delete</td>
            </tr>
           
        )
    }
}