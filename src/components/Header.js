import React, { Component } from 'react';
import logo from '../logo.svg';

export default class Header extends Component {
    render() {
        return (
            <header>
                <img src={logo} className="App-logo" alt="logo" />
                <nav>
                    <ul>
                        <li className="link">ToDo</li>
                        <li className="link">About</li>
                    </ul>
                </nav>
            </header>
        )
    }
    
}