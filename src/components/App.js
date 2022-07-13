import React from "react";
import ToDoList from './Todo';
import { connect } from 'react-redux';
import { addTodo, todoTextChanged } from "../actions/index";

class App extends React.Component {
    render() {
        return (
            <div>
                <h3>Todo List:</h3>
                <ToDoList items={this.props.items} onAddTodo={this.props.onAddTodo} onTodoTextChanged={this.props.onTodoTextChanged} addTodoText={this.props.addTodoText} />
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return {
        onAddTodo: () => dispatch(addTodo()),
        onTodoTextChanged: text => dispatch(todoTextChanged(text))
    };
}

function mapStateToProps(state) {
    return {
        items: state.items,
        addTodoText
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);