import styled from "styled-components";

export const SChatTextarea = styled.textarea((props) => ({
    padding: "10px 15px",
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    color: "inherit",
    border: "none",
    outline: "none",
    resize: "none",
    fontSize: "inherit",
    font: "inherit",
    width: "100%",
}))

export const SChatPanel = styled.div((props) => ({
    display: "flex",
    gap: 20,
    padding: 15,

}))