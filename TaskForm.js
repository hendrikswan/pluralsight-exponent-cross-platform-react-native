import React from 'react-native';

const {
    Text,
    TextInput,
    View,
    TouchableHighlight,
} = React;

import store from './todoStore';

const styles = React.StyleSheet.create({
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#FAFAFA',
        textAlign: 'center',
    },
    button: {
        height: 45,
        alignSelf: 'stretch',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#05A5D1',
        marginLeft: 10,
        marginRight: 10,
    },
    cancelButton: {
        backgroundColor: '#666',
    },
});

class TaskForm extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            todo: '',
        };
    }

    addPressed() {
        if (this.props.route.onAdd) {
            this.props.route.onAdd(this.state.todo);
        }
        this.props.nav.pop();
    }

    cancelPressed() {
        this.props.nav.pop();
    }

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'flex-start',
                    paddingTop: 150,
                    backgroundColor: '#F7F7F7',
                }}
            >
                <TextInput
                    onChangeText={(todo) => this.setState({todo})}
                    placeholder="Enter task"
                    style={{
                        height: 50,
                        borderWidth: 1,
                        marginLeft: 10,
                        marginRight: 10,
                        padding: 15,
                        borderRadius: 3,
                        borderColor: '#D7D7D7',
                    }}
                />

                <TouchableHighlight
                    onPress={this.addPressed.bind(this)}
                    style={styles.button}
                >

                    <Text style={styles.buttonText}>
                        Add one
                    </Text>

                </TouchableHighlight>

                <TouchableHighlight
                    onPress={this.cancelPressed.bind(this)}
                    style={[styles.button, styles.cancelButton]}
                >
                    <Text style={styles.buttonText}>
                        Cancel
                    </Text>

                </TouchableHighlight>
            </View>
        );
    }
}

TaskForm.propTypes = {
    nav: React.PropTypes.shape({
        push: React.PropTypes.func,
        pop: React.PropTypes.func,
    }).isRequired,
};

export default TaskForm;
