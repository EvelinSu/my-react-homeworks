import styled from "styled-components";
import {TSHeaderNavListProps, TSHeaderNavTriggerProps} from "./types";

export const SHeader = styled.div((props) => ({
    display: "flex",
    gap: 20,
    alignItems: "center",
    padding: 20,
    zIndex: 10,
}))

const itemWidth = 80

export const SHeaderNavList = styled.div<TSHeaderNavListProps>(({isOpened,...props}) => ({
    display: "flex",
    gap: 15,
    width: 0,
    overflow: "hidden",
    opacity: 0,
    transition: "0.3s",
    ...isOpened && {
       width: itemWidth * 3,
        opacity: 1,
    }
}))

export const SHeaderNav = styled.div(props => ({
    padding: 10,
    borderRadius: 10,
    whiteSpace: "nowrap",
    transition: "0.2s",
    cursor: "pointer",
    "&:hover": {
        transform: "scale(0.9)",
    }

}))


export const SHeaderNavTrigger = styled.div<TSHeaderNavTriggerProps>(({isOpened}) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(58,66,100,0.84)",
    borderRadius: "50%",
    width: 60,
    height: 60,
    transition: "0.3s",

}))