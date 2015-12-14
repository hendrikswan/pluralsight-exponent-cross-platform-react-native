import React from 'react-native';
const {
    ListView,
    View,
    TouchableHighlight,
    Text,
} = React;
import _ from 'lodash';
import TaskRow from './TaskRow';

const styles = React.StyleSheet.create({
    buttonText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#FAFAFA',
        textAlign: 'center',
    },
    button: {
        height: 60,
        alignSelf: 'stretch',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#05A5D1',
        borderWidth: 2,
        backgroundColor: '#333',
        margin: 20,
    },
});


class TaskList extends React.Component {
    constructor(props, context) {
        super(props, context);

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: this.cloneDataSource(ds, this.props),
        };
    }


    componentWillReceiveProps(nextProps) {
        const dataSource = this.cloneDataSource(this.state.dataSource, nextProps);
        this.setState({ dataSource });
    }

    cloneDataSource(dataSource, props) {
        const filteredTodos = _.where(props.todos, { state: props.selectedState });
        return dataSource.cloneWithRows(filteredTodos);
    }


    renderRow(todo) {
        return (
            <TaskRow
                id={todo}
                key={todo.task}
                onTodoDone={this.props.onTodoDone}
                todo={todo}
            />
        );
    }

    addPressed(task) {
        if (this.props.onAddStarted) {
            this.props.onAddStarted();
        }
    }

    render() {
        console.log('rerendering the list of tasks');
        return (
            <View style={{
                backgroundColor: '#F7F7F7',
                flex: 1,
                justifyContent: 'flex-start',
                paddingTop: 40,
            }}
            >

                <ListView
                    dataSource={this.state.dataSource}
                    key={this.props.todos}
                    renderRow={this.renderRow.bind(this)}
                />

                <TouchableHighlight
                    onPress={this.addPressed.bind(this)}
                    style={styles.button}
                >

                    <Text style={styles.buttonText}>
                        Add one
                    </Text>

                </TouchableHighlight>
            </View>
        );
    }
}

TaskList.propTypes = {
    onAddStarted: React.PropTypes.func.isRequired,
    onTodoDone: React.PropTypes.func.isRequired,
    selectedState: React.PropTypes.string.isRequired,
    todos: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default TaskList;
