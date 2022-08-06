import styled from "styled-components";
import {TSAffairPriorityProps, TSAffairsButtonProps, TSAffairsProps} from "./types";

export const Priorities = {
    all: {
        color: "#223452",
    },
    low: {
        color: "#408dcc",
    },
    middle: {
        color: "#cb8a40",
    },
    high: {
        color: "#c74a4a",
    }
}

export const SAlternativeAffair = styled.div(props => ({
    opacity: 0.6,
    justifySelf: "center",
    alignSelf: "center",
    padding: "20px 0"
}))

export const SAffairs = styled.div<TSAffairsProps>(({ priority }) => ({
    display: "flex",
    flexDirection: "column",
    gap: 15,
    columnGap: 15,
    rowGap: 15,
    backgroundColor: Priorities[priority].color,
    width: 350,
    minHeight: 250,
    padding: 30,
    borderRadius: 30,
    color: "#fff",
    boxSizing: "border-box",
    transition: "0.5s",

}))

export const SAffairPriority = styled.span<TSAffairPriorityProps>(({ priority, activeFilter }) => ({
    display: "flex",
    fontSize: 14,
    color: activeFilter !== priority ? Priorities[priority].color : "rgba(255, 255,255, 0.8)",
    transition: "0.5s",
}))

export const SAffairsButton = styled.button<TSAffairsButtonProps>(({isActive,...props}) => ({
    padding: "5px 10px",
    borderRadius: 10,
    cursor: "pointer",
    border: "none",
    color: "#fff",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    ...isActive && {
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        pointerEvents: "none",
    },
    "&:hover": {
        transform: "scale(0.9)"
    }
}))

export const SAffair = styled.div(props => ({
    display: "grid",
    gridTemplateColumns: "minmax(100px, 1fr) minmax(100px, 1fr) 15px",
    alignItems: "center",
    gap: 15,
    columnGap: 15,
    rowGap: 15,
    span:{
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
    }
}))

export const SAffairButton = styled.button((props) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 20,
    height: 20,
    fontSize: 10,
    padding: 0,
    borderRadius: "50%",
    cursor: "pointer",
    border: "none",
    color: "#fff",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    "&:hover": {
        transform: "scale(0.9)"
    }
}))

export const SFlexBlock = styled.div(props => ({
    display: "flex",
    gap: 20,
    columnGap: 20,
    rowGap: 20,
}))

export const SAffairsList = styled.div(props => ({
    display: "flex",
    flexDirection: "column",
    gap: 10,
    columnGap: 10,
    rowGap: 10,
}))