import styled from "styled-components";
import {SuperInputTextPropsType, TSSuperInputTextWrapperProps} from "./types";
import {theme} from "../../constants";



export const SSuperInputTextWrapper = styled.div<TSSuperInputTextWrapperProps>(({...props} )=> ({
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

}))

export const SSuperInputText = styled.input<SuperInputTextPropsType>(({error, isCheckbox, ...props} )=> ({
    padding: "8px 10px",
    borderRadius: 10,
    border: "none",
    color: "inherit",
    outline: `1px solid ${theme.colors.primary}`,
    backgroundColor: theme.colors.input.default,
    "&:hover, &:focus": {
      backgroundColor: theme.colors.input.hover,
    },
    ...error && {
        outline: `1px solid ${theme.colors.danger}`,
    },
    ...isCheckbox && {
        borderRadius: 10,
        backgroundColor: "red",
        outline: "none",
        cursor: "pointer",
    }


}))

export const SSuperInputTextError = styled.div<TSSuperInputTextWrapperProps>(({...props} )=> ({
    color: theme.colors.danger,
    fontSize: 14,
    position: "absolute",
    top: "100%",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    maxWidth: "100%",
}))
