import React, {useState} from "react"
import {ACTIONS} from "./TodoList"

const AddToDo = ({dispatcher}) => {

    const [value,setValue] = useState("")

    return (
        <div className="row m-2">
            <div className="col-8">
                Todo: <input value={value} onChange={e=> setValue(e.target.value)} ></input>
            </div>
            <div className="col-4">
                <div className="btn btn-primary" onClick={e => dispatcher({type: ACTIONS.ADD, payload: {value}})}>Add</div>
            </div>
        </div>
    )
}

export default AddToDo