//add a todo item
export const addTodo = () => (
    {
        type: 'ADD_TODO'
    }
)

export const todoTextChanged = (text) => (
    {
        type: 'TODO_TEXT_CHANGED',
        text
    }
)

//select a todo item
export const todoSelected = (id) =>(
    {
        type: 'TODO_SELECTED',
        id
    }
)

//edit a todo item
export const applyTodoEdits = (id) => (
    {
        type: 'TODO_SELECTED',
        id
    }
)

export const todoEditTextChanged = (text) => (
    {
        type: 'TODO_EDIT_TEXT_CHANGED',
        text
    }
)