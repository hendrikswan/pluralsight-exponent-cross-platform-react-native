import React from 'react-native';
import Render from './Render';

class TaskRow extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    handleDonePress() {
        this.props.onTodoDone(this.props.todo);
    }

    render() {
        return Render.bind(this)();
    }
}

TaskRow.propTypes = {
    onTodoDone: React.PropTypes.func.isRequired,
    todo: React.PropTypes.shape({
        task: React.PropTypes.string.required,
        state: React.PropTypes.string.required,
    }).isRequired,
};

export default TaskRow;
