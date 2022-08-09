import styled from "styled-components";
import {SuperInputTextPropsType} from "./types";

export const SSuperInputText = styled.input<SuperInputTextPropsType>(({isError,...props} )=> ({
    padding: "8px 10px",
    borderRadius: 10,
    outline: "none",
    border: "none",
    color: "inherit",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    ...isError && {
        outline: "1px solid #DC5858"
    }
}))