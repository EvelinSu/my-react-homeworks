import styled from "styled-components";
import {TSHeaderNavListProps, TSHeaderNavProps, TSHeaderNavTriggerProps} from "./types";
import {NavLink} from "react-router-dom";
import {inherits} from "util";
import {theme} from "../../h4/constants";

export const SHeader = styled.div((props) => ({
    display: "flex",
    alignItems: "center",
    padding: 20,
    zIndex: 10,
    position: "absolute",
    marginTop: 75,
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

export const SHeaderNav = styled.div<TSHeaderNavProps>(({isActive}) => ({
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
        color: "#6075b7",
        fontWeight: "bold",
        textShadow: "0 0 10px #4e68af"
    }
}))

export const SHeaderNavTrigger = styled.div<TSHeaderNavTriggerProps>(({isOpened, ...props}) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.secondary,
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