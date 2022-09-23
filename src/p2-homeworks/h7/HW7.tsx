import React, {useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'
import s from '../h4/HW4.module.css'
import AlternativeSuperSelect from "./common/c5-SuperSelect/AlternativeSuperSelect";



const arr = ['x', 'y', 'z']

function HW7() {
    const [value, onChangeOption] = useState(arr[0])

    return (
        <div className={s.column}>
            <h1 title={'Задача: синхронизировать значения в чекбоксах и выпадающем списке, доп: сделать свой' +
                ' выпадающий список '}>
                homeworks 7
            </h1>
            {/*should work (должно работать)*/}
            <span style={{opacity: 0.4, fontSize: 14}}>default HTML select</span>
            <div >
                <SuperSelect
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>
            <div className={s.row}>
                <SuperRadio
                    name={'radio'}
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>
            <span style={{opacity: 0.4, fontSize: 14}}>my custom DIV select</span>
            <span style={{opacity: 0.4, fontSize: 14, marginTop: -15}}>you can use the arrows in it</span>
            <AlternativeSuperSelect
                options={arr}
                value={value}
                onChangeOption={onChangeOption}
            />
        </div>
    )
}

export default HW7
