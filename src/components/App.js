import React from "react";
import ToDoList from './Todo';
import { connect } from 'react-redux';
import { addTodo, todoTextChanged, todoSelected, todoEditTextChanged, applyTodoEdits } from '../actions/index';

class App extends React.Component {
    render() {
        return (
            <div>
                <h3>Todo List:</h3>
                <ToDoList items={this.props.items} onAddTodo={this.props.onAddTodo} onTodoTextChanged={this.props.onTodoTextChanged} addTodoText={this.props.addTodoText} selectedItem={this.props.selectedTodo} onTodoSelected={this.props.onTodoSelected} onApplyTodoEdit={this.props.onApplyTodoEdit} onTodoEditTextChanged={this.props.onTodoEditTextChanged} editTodoText={this.props.editTodoText}/>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return {
        onAddTodo: () => dispatch(addTodo()),
        onTodoTextChanged: text => dispatch(todoTextChanged(text)),
        //the following is needed becuase you created three new action creators and they need to be dispatched
        onTodoSelected: id => dispatch(todoSelected(id)),
        onApplyTodoEdit: id => dispatch(applyTodoEdits(id)),
        onTodoEditTextChanged: text => dispatch(todoEditTextChanged(text))

    };
}

function mapStateToProps(state) {
    return {
        items: state.items,
        addTodoText: state.addTodoText,
        //the following is needed since yo careted two new fields in your state
        editTodoText: state.editTodoText,
        selectedTodo: state.selectedTodo
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);