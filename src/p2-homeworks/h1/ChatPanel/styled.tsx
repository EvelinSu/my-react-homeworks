import styled from "styled-components";
import SuperButton from "../../h4/common/c2-SuperButton/SuperButton";

export const SChatTextarea = styled.textarea((props) => ({
    padding: "10px 15px",
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    color: "inherit",
    border: "none",
    outline: "none",
    resize: "none",
    fontSize: "inherit",
    height: 42,
    font: "inherit",
    width: "100%",
    transition: "0.2s",
    "&:focus": {
        height: "84px",
    }
}))

export const SChatPanel = styled.div((props) => ({
    display: "flex",
    gap: 20,
    padding: 15,
    alignItems: "center"
}))

export const SChatButton = styled(SuperButton)((props) => ({
    height: 42,

}))