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


    getRememberHandler(id) {
        return (component) => {
            this[id] = component;
        };
    }

    handleTodoDone(todo) {
        todo.state = 'Done';
        this.setState({ todos: this.state.todos });
    }

    onAddStarted() {
        this.nav.push({
            name: 'taskform',
        });
    }

    onAdd(task) {
        this.state.todos.push({
            task: task,
            state: 'Pending',
        });
        this.nav.pop();
    }

    onCancel(task) {
        this.nav.pop();
    }

    renderScene(route, nav) {
        switch (route.name) {
        case 'taskform':
            return (
                <TaskForm
                    nav={nav}
                    onAdd={this.onAdd.bind(this)}
                    onCancel={this.onCancel.bind(this)}
                    route={route}
                />
            );
        default:
            return (
                <TaskList
                    nav={nav}
                    onAddStarted={this.onAddStarted.bind(this)}
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
                initialRoute={{ name: 'tasklist', index: 0 }}
                ref={this.getRememberHandler('nav')}
                renderScene={this.renderScene.bind(this)}
            />
        );
    }
}

AppRegistry.registerComponent('main', () => CrossTodo);
