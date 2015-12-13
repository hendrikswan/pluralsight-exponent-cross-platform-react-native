import { createStore } from 'redux';

const defaultState = {
    todos: [
        {
            task: 'wazup from redux',
            state: 'Pending',
        },
    ],
    selectedState: 'Pending',
};

function todos(state = defaultState, action) {
    switch (action.type) {
    case 'ADD_TODO':
        return Object.assign({}, state, {
            todos: state.todos.concat([{
                task: action.task,
                state: 'Pending',
            }]),
        });
    case 'DONE_TODO':
        const newTodos = state.todos.map((todo) => {
            if (todo !== action.todo) {
                return todo;
            }

            return Object.assign({}, todo, {
                state: 'Done',
            });
        });

        return Object.assign({}, state, {
            todos: newTodos,
        });
    default:
        return state;
    }
    return state;
}


export default createStore(todos);
