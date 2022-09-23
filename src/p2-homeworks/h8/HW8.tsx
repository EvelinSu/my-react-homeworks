import React, {ChangeEvent, useState} from 'react'
import {ageSortAC, homeWorkReducer, nameSortAC} from './bll/homeWorkReducer'
import s from "../h4/HW4.module.css"
import {
    SGridTable,
    SGridTableCell,
    SGridTablePanel, SGridTablePanelInput,
    SGridTableRow,
    SGridTitleCell,
    SGridTitleCellSort, SListNotFound
} from "./styled";
import SortIcon from "../../assets/icons/SortIcon";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";

export type UserType = {
    _id: number,
    name: string,
    age: number,
}

const initialPeople = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<Array<UserType>>(initialPeople) // need to fix any
    const [nameSort, setNameSort] = useState<'up' | 'down'>('up')
    const [ageSort, setAgeSort] = useState<'up' | 'down'>('up')
    const [age, setAge] = useState<number>(18)
    const [checked, setChecked] = useState<boolean>(false)

    const finalPeople = people.map((p: UserType) => (
        <SGridTableRow key={p._id}>
            <SGridTableCell>
                {p.name}
            </SGridTableCell>
            <SGridTableCell>
                {p.age}
            </SGridTableCell>
        </SGridTableRow>
    ))

    const onNameSortClickHandler = () => {
        setPeople(homeWorkReducer(people, nameSortAC(nameSort)))
        setNameSort(nameSort === 'up' ? 'down' : 'up')
    }
    const onAgeSortClickHandler = () => {
        setPeople(homeWorkReducer(people, ageSortAC(ageSort)))
        setAgeSort(ageSort === 'up' ? 'down' : 'up')
    }

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        let value = +e.currentTarget.value
        if (value >= 0 && +value <= 100) setAge(value)
        if (checked) {
            setChecked(false)
            setPeople(initialPeople)
        }
    }

    const replaceNulls = (value: number) => String(value).replace(/^0.+/, '')

    const onChangeChecked = (e: ChangeEvent<HTMLInputElement>) => {
        if (!checked) setPeople(homeWorkReducer(people, {type: 'check', payload: age}))
        setChecked(e.currentTarget.checked)
        if (checked) setPeople(initialPeople)
    }

    return (
        <div className={s.column}>
            <h1 title={"Сортировка пользователей по имени, фильтрация по достигнутому возрасту"}>
                homeworks 8
            </h1>
            <SGridTable>
                <SGridTablePanel>
                    <SuperCheckbox
                        checked={checked}
                        onChange={onChangeChecked}
                    />
                    show older than
                    <SGridTablePanelInput type={"number"} value={replaceNulls(age)} onChange={onChangeInput} />
                </SGridTablePanel>
                <SGridTableRow margin={"0 0 10px 0"}>
                    <SGridTitleCell onClick={onNameSortClickHandler}>
                        Name
                        <SGridTitleCellSort sort={nameSort}>
                            <SortIcon />
                        </SGridTitleCellSort>
                    </SGridTitleCell>
                    <SGridTitleCell onClick={onAgeSortClickHandler}>
                        Age
                        <SGridTitleCellSort sort={ageSort}>
                            <SortIcon />
                        </SGridTitleCellSort>
                    </SGridTitleCell>
                </SGridTableRow>
                {finalPeople.length > 0
                    ? finalPeople
                    : <SListNotFound>people not found</SListNotFound>
                }
            </SGridTable>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
        </div>
    )
}

export default HW8
