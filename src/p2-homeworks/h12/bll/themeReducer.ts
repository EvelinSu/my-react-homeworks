export type TTheme = typeof theme

const theme = {
    colors: {
        primary: '#344162',
        darkAlpha: 'rgba(0,0,0,0.21)',
        secondary: '#5577a2',

        success: "#408dcc",
        danger: '#c74a4a',
        disabled: {
            opacity: 0.7,
            pointerEvents: "none",
        },

        input: {
            border: 'rgba(0, 0, 0, 0.1)',
            default: 'rgba(81,88,124,0.24)',
            hover: 'rgba(34,52,82,0.21)',
            focus: 'red',
        },
    },
};

export const themeReducer = (state: TTheme = theme, action: TActions): TTheme => { // fix any
    switch (action.type) {
        case "CHANGE-PRIMARY": {
            return {...state, colors: {...state.colors, primary: action.primary}}
        }
        case "CHANGE-SECONDARY": {
            return {...state, colors: {...state.colors, secondary: action.secondary}}
        }
        default:
            return state;
    }
};

type TActions = ReturnType<typeof changePrimaryAC | typeof changeSecondaryAC>

export const changePrimaryAC = (primary: string) => ({
    type: "CHANGE-PRIMARY",
    primary
} as const)

export const changeSecondaryAC = (secondary: string) => ({
    type: "CHANGE-SECONDARY",
    secondary
} as const);