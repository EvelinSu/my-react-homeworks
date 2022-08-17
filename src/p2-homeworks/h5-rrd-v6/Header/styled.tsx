import styled from "styled-components";
import {TSHeaderNavListProps, TSHeaderNavProps, TSHeaderNavTriggerProps} from "./types";
import {NavLink} from "react-router-dom";
import {inherits} from "util";

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

export const SHeaderNavTrigger = styled.div<TSHeaderNavTriggerProps>(({isOpened}) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#223452",
    borderRadius: "50%",
    width: 60,
    height: 60,
    marginLeft: 0,
    transition: "0.3s",
    userSelect: "none",
    ...isOpened && {
        opacity: 0.5,
        color: "#223452",
        marginRight: 20,
    }
}))