import React, {useReducer} from "react"
import AddToDo from "./AddToDo"
import ToDoItem from "./ToDoItem"

export const ACTIONS = {ADD: 'add', TOGGLE: 'tog', DELETE: 'del'}

const TodoList = () => 
{
    const reducer = (todos, action) =>
    {
        console.log(`reducer called... action: ${JSON.stringify(action)}`)
        switch (action.type)
        {
            case ACTIONS.ADD: 
                return [...todos, {id: Date.now(), title: action.payload.value, complete: false}]
            case ACTIONS.TOGGLE: 
                return todos.map(
                    td => (
                        td.id === action.payload.id ? {...td, complete: !td.complete} : td
                    )
                )
            case ACTIONS.DELETE:
                return todos.filter(
                    td => (
                        td.id !== action.payload.id
                    )
                )
            default: 
                return todos
        }
    }

    const [todos, dispatcher] = useReducer(reducer, [])

    console.log(todos)

    return (
        <React.Fragment>
            <div className="row bg-dark">
                <div className="col text-white">
                    A simple ToDoList App that demonstrates the UseReducer Hook
                </div>
            </div>
            <AddToDo dispatcher={dispatcher}/>
            {todos.map(
                td => (
                    <ToDoItem todo={td} dispatcher={dispatcher} key={td.id}/>
                )
            )}
        </React.Fragment>
    )
}

export default TodoList