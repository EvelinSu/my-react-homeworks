import styled from "styled-components";

type TSRequestBoxProps = {
    isError: boolean
}

export const SRequestBox = styled.div<TSRequestBoxProps>(({theme, ...props}) => ({
    display: "flex",
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