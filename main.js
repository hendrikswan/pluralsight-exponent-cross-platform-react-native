/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
*/

const React = require('react-native');
const {
  AppRegistry,
  Component,
  Navigator,
} = React;

import TaskList from './TaskList';
import TaskForm from './TaskForm';

//import store from './todoStore';

class CrossTodo extends Component {

    constructor(props) {
        super(props);
        //this.state = store.getState();
        //store.subscribe(this.copyState.bind(this));
        this.state = {
            todos: [
                {
                    task: 'wazup from redux',
                    state: 'Pending',
                },
            ],
            selectedState: 'Pending',
        }
    }


    render() {
        return (
            <TaskList

                selectedState={this.state.selectedState}
                todos={this.state.todos}
            />
        );
    }
}

AppRegistry.registerComponent('main', () => CrossTodo);
