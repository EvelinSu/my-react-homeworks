import React from 'react'
import {homeWorkReducer} from '../homeWorkReducer'
import {UserType} from "../../HW8";

let initialState: UserType[] // need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'up'})

    console.log(newState)

    expect(newState).toStrictEqual([...newState].sort((a, b) => a.name.localeCompare(b.name)).reverse())
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'down'})

    expect(newState).toStrictEqual([...newState].sort((a, b) => a.name.localeCompare(b.name)))

})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, {type: 'check', payload: 18})

    expect(newState).toStrictEqual(newState.filter(el => el.age > 18))

})

test('sort age up', () => {
    const newState = homeWorkReducer(initialState, {type: 'age-sort', payload: 'up'})

    console.log(newState)

    expect(newState).toStrictEqual([...newState].sort((a, b) => b.age - a.age).reverse())
})
test('sort age down', () => {
    const newState = homeWorkReducer(initialState, {type: 'age-sort', payload: 'down'})

    expect(newState).toStrictEqual([...newState].sort((a, b) => b.age - a.age))

})