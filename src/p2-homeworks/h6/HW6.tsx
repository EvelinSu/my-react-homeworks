import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import s from '../h4/HW4.module.css'

function HW6() {
    const [value, setValue] = useState<string>(restoreState('editable-span-value','') || '')

    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        setValue(restoreState('editable-span-value', value))
    }

    return (
        <div>
            <h1>
                homeworks 6
            </h1>
            {/*should work (должно работать)*/}
            <div className={s.column}>
                <div >
                    <SuperEditableSpan
                        value={value}
                        onChangeText={setValue}
                        spanProps={{children: value ? undefined : 'double click to change...'}}
                    />
                </div>
                <div className={s.row}>
                    <SuperButton onClick={save}>save</SuperButton>
                    <SuperButton onClick={restore}>restore</SuperButton>
                </div>
            </div>

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
        </div>
    )
}

export default HW6
