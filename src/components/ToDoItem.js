import React from "react"
import { ACTIONS } from "./TodoList"

const ToDoItem = ({todo, dispatcher}) => {
    return (
        <div className="row m-2">
            <div className="col">
                ID: {todo.id}
            </div>
            <div className="col" style={{color: todo.complete ? 'black' : 'red' }}>
                Todo: {todo.title}
            </div>
            <div className="col">
                <div className="btn btn-primary m-1" onClick={e => dispatcher({type: ACTIONS.TOGGLE, payload: {id: todo.id}})}>Complete</div>
                <div className="btn btn-primary m-1" onClick={e => dispatcher({type: ACTIONS.DELETE, payload: {id: todo.id}})}>Delete</div>
            </div>
        </div>
    )
}

export default ToDoItem