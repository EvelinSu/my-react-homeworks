import styled from "styled-components";

export const SSelect = styled.select(props => ({
    padding: "7px 15px",
    borderRadius: 15,
    border: "none",
    outline: "none",
    borderRight: `10px solid transparent`,
    color: "inherit",
    transition: "0.2s",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    cursor: "pointer",
    "&:hover": {
        opacity: 0.7,

    },
    option:{
        color: "#000",
    }
}))

export const SOption = styled.option(props => ({

}))