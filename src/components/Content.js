import React, { Component }from 'react';
import axios from 'axios';
import Todo from './Todo';

export default class Content extends Component {

    constructor(){
        super();
        this.state = {
            toDos: []
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then( (res) => this.setState({
            toDos: res.data
        }) )
    }

    render() {
        return (
            <div className='container'>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>TITLE</th>
                            <th>COMPLETED</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    { this.state.toDos.map(todo => (
                        <Todo todo={todo} />
                    ) ) }
                    </tbody>
                </table>
            </div>
        )
    }
}