import React, { Component } from 'react';
import CardList from '../components/CardList';
import {robots} from '../robots';
import SearchBox from '../components/SearchBox';
import './App.css'
import  scroll from '../components/scroll';

class App extends Component {
    constructor() {
        super();
        this.state= {
            robots: [],
            serchfield: ""
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {
            return response.json();
        }).then(users => {
            this.setState({robots: users})
        })
    }

    onSerchChange = (event) => {
        this.setState({serchfield: event.target.value})
    }
    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.serchfield.toLowerCase());
        })
        if (robots.length===0) {
            return <h1>Loading</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1' >RoboFriends</h1>
                    <SearchBox serchChange={this.onSerchChange} />
                    <scroll>
                        <CardList robots={filteredRobots}/>
                    </scroll>
                </div>
            );
        }
    }
}
export default App;