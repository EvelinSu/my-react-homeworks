import styled from "styled-components";

export const STime = styled.div(props => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
    fontSize: 50,
    alignItems: "center",
    position: "relative",
    marginBottom: 10,
}))

export const SDate = styled.div(props => ({
    fontSize: 20,
    position: "absolute",
    top: "-1rem",
    opacity: 0.6
}))

export const SButtons = styled.div(props => ({
    display: "flex",
    justifyContent: "center",
    gap: 20,
}))