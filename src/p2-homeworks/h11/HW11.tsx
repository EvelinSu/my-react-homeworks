import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from "../h4/HW4.module.css";

function HW11() {

    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    return (
        <div>
            <h1>
                homeworks 11
            </h1>
            {/*should work (должно работать)*/}
            <div className={s.column}>
                <span>{value1}</span>
                <SuperRange
                    onChangeRange={setValue1}
                    value={value1}
                    // сделать так чтоб value1 изменялось
                />
            </div>
            <div>
                <span>{value1}</span>
                <SuperDoubleRange
                   // onChangeRange={() => [setValue1, setValue2]}
                    value={[value1, value2]}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value2}</span>
            </div>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
        </div>
    )
}

export default HW11
