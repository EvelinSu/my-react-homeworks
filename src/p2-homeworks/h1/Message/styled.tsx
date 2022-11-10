import styled from "styled-components";
import {TSMessageContainerProps, TSMessageProps, TSMessageTextProps} from "./types";

export const STitle = styled.div(props => ({
    marginTop: 10,
    padding: 20,
    borderTop: "1px solid #000",
    fontSize: 22,
    fontWeight: "bold",

}))

export const SChat = styled.div(({theme, ...props}) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: theme.colors.darkAlpha,
    width: 550,
    height: 450,
    overflow: "auto",
    borderRadius: 30,
    boxSizing: "border-box",
}))

export const SChatMessages = styled.div((props) => ({
    display: "flex",
    flexDirection: "column",
    overflow: "auto",
    gap: 10,
    padding: 20,
}))

export const SMessage = styled.div<TSMessageProps>(props => ({
    display: "flex",
    alignItems: "flex-end",
    wordBreak: "break-word",
    whiteSpace: "pre-line",
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

export const SMessageContainer = styled.div<TSMessageContainerProps>(({theme, ...props}) => ({
    display: "flex",
    flexDirection: "column",
    position: "relative",
    padding: "6px 12px",
    backgroundColor: theme.colors.primary,
    borderRadius: "10px 10px 10px 10px",
    maxWidth: "60%",
    transition: "1s",
    "&:after": {
        content: '""',
        position: "absolute",
        width: 30,
        height: 25,
        borderRight: `10px solid ${theme.colors.primary}`,
        borderBottomRightRadius: "35%",
        left: -35,
        bottom: 10,
        transition: "1s",
        transform: "scale(1.5) skewY(10deg) skewX(-10deg)",
        ...props.isMineMessage && {
            borderRight: `10px solid ${theme.colors.secondary}`,
            left: "initial",
            right: -35,
            transform: "scale(-1.5, 1.5) skewY(10deg) skewX(-10deg)",
        }
    },
    ...props.isMineMessage && {
        backgroundColor: theme.colors.secondary,
    }
}))

export const SMessageContent = styled.div(props => ({
    display: "flex",
    flexWrap: "wrap",
    zIndex: 1,
}))

export const SMessageTitle = styled.span(({theme, ...props}) => ({
    fontWeight: "bold",
    zIndex: 1,
    color: theme.colors.secondary,
    filter: "brightness(150%)",
    msFilter: "brightness(150%)",
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
    fontSize: "12px",
}))