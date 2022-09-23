import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";

// types
export type UserType = {
    _id: string
    name: string // need to fix any
}

function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([])

    const addUserCallback = (name: string) => { // need to fix any
        setUsers([...users, {_id: v1(), name}]) // need to fix
    }

    return (
        <div>
            <h1 title={"Задача: сделать контролируемую форму, которая считает отправленные имена"}>
                homeworks 3
            </h1>
            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>
        </div>
    )
}

export default HW3
