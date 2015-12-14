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

import store from './todoStore';

class CrossTodo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {
                    task: 'React native course!',
                    state: 'Pending',
                },
            ],
            selectedState: 'Pending',
        };
    }

    copyState() {
        this.setState(store.getState());
    }

    getRememberHandler(id) {
        return (component) => {
            this[id] = component;
        };
    }

    handleTodoDone(todo) {
        todo.state = 'Done';
        this.setState({todos: this.state.todos});
    }

    onTodoAdd(task) {
        this.state.todos.push({
            task: task,
            state: 'Pending',
        })
    }

    renderScene(route, nav) {
        switch (route.name) {
        case 'taskform':
            return (
                <TaskForm
                    nav={nav}
                    route={route}
                />
            );
        default:
            return (
                <TaskList
                    nav={nav}
                    onTodoAdd={this.onTodoAdd.bind(this)}
                    onTodoDone={this.handleTodoDone.bind(this)}
                    route={route}
                    selectedState={this.state.selectedState}
                    todos={this.state.todos}
                />
            );
        }
    }

    configureScene() {
        return Navigator.SceneConfigs.FloatFromBottom;
    }

    render() {
        return (
            <Navigator
                configureScene={this.configureScene}
                initialRoute={{name: 'tasklist', index: 0}}
                ref={this.getRememberHandler.bind(this)('navigator')}
                renderScene={this.renderScene.bind(this)}
            />
        );
    }
}

AppRegistry.registerComponent('main', () => CrossTodo);
