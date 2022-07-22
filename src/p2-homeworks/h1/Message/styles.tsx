import styled from "styled-components";
import {TSMessageContainerProps, TSMessageProps, TSMessageTextProps} from "./types";

export const SChat = styled.div(props => ({
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#0f1630",
    padding: 30,
    gap: 20,
    columnGap: 20,
    rowGap: 20,
    position: "fixed",
    left: "20%",
    right: "20%",
    top: "10%",
    bottom: "10%",
    overflow: "auto",
    borderRadius: 30,
}))

export const SMessage = styled.div<TSMessageProps>(props => ({
    display: "flex",
    alignItems: "flex-end",
    gap: 10,
    columnGap: 10,
    rowGap: 10,
    fontSize: 14,
    color: "#fff",
    ...props.isMineMessage && {
        flexDirection: "row-reverse",
    }
}))

export const SMessageAvatar = styled.img(props => ({
    borderRadius: "50%",
    border: "1px solid rgba(0, 0, 0, 0.3)",
    width: 50,
    height: 50,
    objectFit: "cover",
}))

export const SMessageContainer = styled.div<TSMessageContainerProps>((props) => ({
    display: "flex",
    flexDirection: "column",
    position: "relative",
    padding: " 5px 10px",
    backgroundColor: "#33435d",
    borderRadius: "10px 10px 10px 10px",
    maxWidth: "50%",
    "&:after": {
        content: '""',
        position: "absolute",
        width: 30,
        height: 25,
        borderRight: "10px solid #33435d",
        borderBottomRightRadius: "35%",
        left: -35,
        bottom: 10,
        transform: "scale(1.5) skewY(10deg) skewX(-10deg)",
        ...props.isMineMessage && {
            borderRight: "10px solid #40679d",
            left: "initial",
            right: -35,
            transform: "scale(-1.5, 1.5) skewY(10deg) skewX(-10deg)",
        }
    },
    ...props.isMineMessage && {
        backgroundColor: "#40679d",
    }
}))

export const SMessageContent = styled.div(props => ({
    display: "flex",
    flexWrap: "wrap",
    zIndex: 1,
}))

export const SMessageTitle = styled.span(props => ({
    fontWeight: "bold",
    zIndex: 1,
    color: "#8ab5e6",
    cursor: "pointer",
}))

export const SMessageText = styled.span<TSMessageTextProps>(props => ({
    opacity: props.opacity,
}))

export const SMessageTime = styled.div(props => ({
    opacity: 0.4,
    marginLeft: "auto",
    paddingLeft: 10,
    margin: "auto 0 -2px auto",
    fontSize: "12px"
}))