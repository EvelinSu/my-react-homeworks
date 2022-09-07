import styled from "styled-components";
import {theme} from "../h4/constants";

export const SGridTable = styled.div((props) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    padding: 30,
    backgroundColor: theme.colors.secondary,
    borderRadius: 30,
    minHeight: 310,
    width: 280,
}))

export const SGridTablePanel = styled.div((props) => ({
    display: "flex",
    alignItems: "center",
    gap: 5,
    flexDirection: "row",
}))

export const SGridTablePanelInput = styled.input((props) => ({
    width: 60,
}))

export const SGridTitleCell = styled.div((props) => ({
    display: "flex",
    alignItems: "center",
    gap: 10,
    cursor: "pointer",
    opacity: 0.4,
    userSelect: "none",
}))

type TSGridTitleCellSort = {
    sort: 'down' | 'up'
}
export const SGridTitleCellSort = styled.span<TSGridTitleCellSort>(props => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    ...props.sort === 'up' && {
        transform: 'scale(1)',
    },
    ...props.sort === 'down' && {
        transform: 'scale(1, -1)',
    },
    svg: {
        width: 18,
        height: 18,
    }
}))

export const SGridTableRow = styled.div((props) => ({
    display: "grid",
    overflow: "hidden",
    maxWidth: "100%",
    width: "100%",
    gridTemplateColumns: "minmax(140px, 1fr) minmax(50px, 1fr)",
    gap: 20,
}))

export const SGridTableCell = styled.div((props) => ({
    overflow: "hidden",
    maxWidth: "100%",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    "&:last-of-type": {
        color: "#617593",
        fontWeight: 600,
    }
}))

export const SListNotFound = styled.div((props) => ({
    opacity: 0.3,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "25%",
}))

