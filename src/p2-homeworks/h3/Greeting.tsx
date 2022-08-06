import React from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: React.ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
}

const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers}
) => {
    const onKeyDownAddUser = (e: React.KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && addUser()
    const inputClass = error && s.error
    const buttonClass = error && s.buttonLock

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.inputContainer}>
                    <input
                        value={name}
                        onChange={setNameCallback}
                        onKeyDown={onKeyDownAddUser}
                        className={inputClass}
                        placeholder={"Your name..."}
                    />
                    <span className={s.errorText}>{error}</span>
                </div>
                <button className={buttonClass} onClick={addUser}>add</button>
                <span>{totalUsers}</span>
            </div>

        </div>
    )
}

export default Greeting
