import React, {useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
        setError('')
    }
    const addUser = () => {
        if((/^[a-яA-Я\-]+$/).test(name)){
            addUserCallback(name)
            alert("Hello " + name + "!")
            setName('')
        } else {
            setError('invalid name')

        }
    }
    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
