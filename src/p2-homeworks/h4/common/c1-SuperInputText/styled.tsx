import styled from "styled-components";
import {SuperInputTextPropsType, TSSuperInputTextWrapperProps} from "./types";
import {theme} from "../../constants";

export const SSuperInputTextWrapper = styled.div<TSSuperInputTextWrapperProps>(({...props}) => ({
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

}))

export const SSuperInputText = styled.input<SuperInputTextPropsType>(({error, ...props}) => ({
    padding: "8px 10px",
    borderRadius: 10,
    width: "100%",
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
}))

export const SSuperCheckbox = styled.input<SuperInputTextPropsType>(({...props}) => ({
    appearance: "none",
    padding: 10,
    width: 20,
    height: 20,
    alignSelf: "center",
    backgroundColor: "rgba(119,143,176,0.65)",
    borderRadius: "50%",
    marginRight: 10,
    position: "relative",
    cursor: "pointer",
    "&:checked": {
        appearance: "none",
        height: 0,
        width: 0,
        "&:after": {
            content: `''`,
            backgroundColor: "rgba(255,255,255,0.65)",
            position: "absolute",
            top: 6,
            bottom: 6,
            left: 6,
            right: 6,
            borderRadius: "50%",
        }
    }
}))

export const SSuperInputTextError = styled.div<TSSuperInputTextWrapperProps>(({...props}) => ({
    color: theme.colors.danger,
    fontSize: 14,
    position: "absolute",
    top: "100%",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    maxWidth: "100%",
}))
