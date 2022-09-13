import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {SButtons, SDate, STime} from "./styled";

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
        setTimerId(0)
    }

    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        console.log(id)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const time = (time: number) => {
        return time < 10 ? '0' + time : time
    }

    const stringTime = time(date.getHours()) + ':' + time(date.getMinutes()) + ':' + time(date.getSeconds()) // fix
    // with date
    const stringDate = date.toLocaleString('en-us', {month: 'long'}) + ' ' + date.getDate()// fix with date

    return (
        <div>
            <STime
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
                {show && (
                    <SDate>
                        {stringDate}
                    </SDate>
                )}
            </STime>
            <SButtons>
                <SuperButton disabled={timerId !== 0} onClick={start}>start</SuperButton>
                <SuperButton disabled={timerId === 0} onClick={stop}>stop</SuperButton>
            </SButtons>
        </div>
    )
}

export default Clock
