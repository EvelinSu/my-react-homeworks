import styled from "styled-components";

type TSRequestBoxProps = {
    isError: boolean
}

export const SRequestBox = styled.div<TSRequestBoxProps>(({theme, ...props}) => ({
    display: "flex",
    flexDirection: "column",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: props.isError ? theme.colors.darkAlpha : theme.colors.success,
    width: 300,
    height: 150,
    borderRadius: 20,
    textAlign: "center",
    transition: "0.5s",

}))

export const SRequestTitle = styled.div((props) => ({
    fontSize: 45,
    fontWeight: "bold",
}))

export const SRequestText = styled.div((props) => ({
    display: "-webkit-box",
    "-webkit-line-clamp": '3',
    textOverflow: "ellipsis",
    maxHeight: 40,
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
}))