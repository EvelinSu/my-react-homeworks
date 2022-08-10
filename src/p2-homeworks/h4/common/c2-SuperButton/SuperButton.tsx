import styled from "styled-components";
import {theme} from "../../constants";
import {TSSuperButtonProps} from "./types";

const SuperButton = styled.button<TSSuperButtonProps>(({design,...props}) => ({
    backgroundColor: theme.colors.default,
    color: "#fff",
    ...design === 'danger' && {
        backgroundColor: theme.colors.danger
    },
    "&:hover": {
      transform: "scale(0.9)"
    },
    "&:disabled": {
        opacity: 0.3,
        pointerEvents: "none",
    }
}))

export default SuperButton