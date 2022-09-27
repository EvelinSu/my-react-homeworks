import styled from "styled-components";
import {TSHeaderNavListProps, TSHeaderNavProps, TSHeaderNavTriggerProps} from "./types";
import {DefaultInputPropsType} from "../../h11/common/c7-SuperRange/SuperRange";

export const SHeader = styled.div((props) => ({
    display: "flex",
    alignItems: "center",
    padding: 20,
    zIndex: 10,
    position: "absolute",
    marginTop: 75,
}))

export const SColorInputWrapper = styled.div(({theme}) => ({
    display: "flex",
    flexDirection: "column",
    position: "relative",
    borderRadius: "50%",
    height: 60,
    width: 60,
    gap: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.darkAlpha,
    overflow: "hidden",
    border: "2px solid transparent",
    "&:after": {
        content: `"theme"`,
        position: "absolute",
        pointerEvents: "none",
        transition: "0.2s",
        opacity: 0,
    },
    "&:hover": {
        "&:after": {
            opacity: 0.6,
        },
    }
}))

export const SColorInput = styled.input((props) => ({
    padding: 0,
    height: 30,
    width: 60,
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    "-webkit-appearance": "none",
    "&::-webkit-color-swatch-wrapper": {
        padding: 0,
    },
    "&::-webkit-color-swatch": {
        border: "none",
    },
}))

export const SHeaderBlock = styled.div((props) => ({
    display: "flex",
    alignItems: "center",
    padding: 20,
    zIndex: 10,
}))

export const SHeaderNavList = styled.div<TSHeaderNavListProps>(({isOpened, ...props}) => ({
    display: "flex",
    gap: 15,
    width: 0,
    overflow: "hidden",
    opacity: 0,
    transition: "0.3s",
    ...isOpened && {
        width: 280,
        opacity: 1,
    }
}))

export const SHeaderNav = styled.div<TSHeaderNavProps>(({isActive, theme}) => ({
    padding: 10,
    color: "inherit",
    textDecoration: "none",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 10,
    whiteSpace: "nowrap",
    transition: "0.2s",
    cursor: "pointer",
    "&:hover": {
        transform: "scale(0.9)",
    },
    ...isActive && {
        pointerEvents: "none",
        color: theme.colors.secondary,
        fontWeight: "bold",
        textShadow: `0 0 10px rgba(0, 0, 0, 0.3)`
    }
}))

export const SHeaderNavTrigger = styled.div<TSHeaderNavTriggerProps>(({theme, isOpened, ...props}) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.darkAlpha,
    borderRadius: "50%",
    width: 60,
    height: 60,
    fontSize: 12,
    marginLeft: 0,
    transition: "0.3s",
    userSelect: "none",
    svg: {
        width: 30,
        height: 30,
        opacity: 0.8,
        transition: "0.2s",
    },
    ...isOpened && {
        opacity: 0.5,
        marginRight: 20,
        svg: {
            opacity: 0,
            width: 24,
            height: 24,
        },
    }
}))