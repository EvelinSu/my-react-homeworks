import React, {ChangeEvent, useState} from 'react'
import SuperInputText from './common/c1-SuperInputText/SuperInputText'
import s from './HW4.module.css'
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox'
import {SSuperInputTextError, SSuperInputTextWrapper} from "./common/c1-SuperInputText/styled";
import SuperButton from "./common/c2-SuperButton/SuperButton";

function HW4() {
    const [text, setText] = useState<string>('')
    const error = text ? '' : 'error'

    const showAlert = () => {
        if (error) {
            alert('введите текст...')
        } else {
            alert(text)
        }
    }

    const [checked, setChecked] = useState<boolean>(false)

    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)

    return (
        <>
            <hr />
            homeworks 4
            <div className={s.column}>
                <SSuperInputTextWrapper>
                    <SuperInputText
                        placeholder={"Введите текст..."}
                        value={text}
                        onChangeText={setText}
                        onEnter={showAlert}
                        error={error}
                        // spanClassName={s.testSpanError}
                    />
                    <SSuperInputTextError>
                        {error}
                    </SSuperInputTextError>
                </SSuperInputTextWrapper>
                <SuperInputText/>
                <div className={s.row}>
                    <SuperButton>
                        default
                    </SuperButton>
                    <SuperButton design={"danger"} onClick={showAlert}>
                        delete
                    </SuperButton>
                    <SuperButton disabled>
                        disabled
                    </SuperButton>
                </div>

                {/*----------------------------------------------------*/}
                <SuperCheckbox
                    checked={checked}
                    onChangeChecked={setChecked}
                >
                    some text {/*// этот текст попадёт в children*/}
                </SuperCheckbox>
                {/*// onChange тоже должен работать*/}
                <SuperCheckbox checked={checked} onChange={testOnChange} />
            </div>
            <hr />
            <hr />
        </>

    )
}

export default HW4
