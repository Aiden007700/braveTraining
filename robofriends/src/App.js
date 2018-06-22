import React, { Component } from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';

class App extends Component {
    constructor() {
        super();
        this.state= {
            robots: robots,
            serchfield: ""
        }
    }
    onSerchChange = (event) => {
        this.setState({serchfield: event.target.value})
    }
    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.serchfield.toLowerCase());
        })
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox serchChange={this.onSerchChange} />
                <CardList robots={filteredRobots}/>
            </div>
        );
    }
}
export default App;