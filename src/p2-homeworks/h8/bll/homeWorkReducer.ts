import {UserType} from "../HW8";


export const homeWorkReducer = (state: Array<UserType>, action: TActions): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            let stateCopy = [...state]
            let sortedUsers = stateCopy.sort((a, b) => a.name.localeCompare(b.name))
            if (action.payload === 'down') return sortedUsers
            if (action.payload === 'up') return sortedUsers.reverse()
            return stateCopy
        }
        case 'age-sort': {
            let stateCopy = [...state]
            let sortedUsers = stateCopy.sort((a, b) => b.age - a.age)
            if (action.payload === 'down') return sortedUsers
            if (action.payload === 'up') return sortedUsers.reverse()
            return stateCopy
        }
        case 'check': {
            return state.filter(el => el.age > action.payload)
        }
        default:
            return state
    }
}

export type TActions = TNameSortAC | TCheckAC | TAgeSortAC

type TNameSortAC = ReturnType<typeof nameSortAC>
export const nameSortAC = (sort: 'up' | 'down' = 'up') => {
    return {
        type: "sort",
        payload: sort,
    } as const
}

type TAgeSortAC = ReturnType<typeof ageSortAC>
export const ageSortAC = (sort: 'up' | 'down' = 'up') => {
    return {
        type: "age-sort",
        payload: sort,
    } as const
}

type TCheckAC = ReturnType<typeof checkAC>
export const checkAC = (age: number = 18) => {
    return {
        type: "check",
        payload:  age,
    } as const
}
