export type TInitState = {
    isLoading: boolean
}

const initState = {
    isLoading: false
}

type TActions = ReturnType<typeof loadingAC>

export const loadingReducer = (state: TInitState = initState, action: TActions): TInitState => { // fix any
    switch (action.type) {
        case 'CHANGE-LOADING-STATUS': {
            return {...state, isLoading: action.isLoading}
        }
        default: return state
    }
}


export const loadingAC = (isLoading: boolean) => ({
    type: "CHANGE-LOADING-STATUS",
    isLoading
} as const) // fix any