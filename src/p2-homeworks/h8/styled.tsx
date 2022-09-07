import styled from "styled-components";
import {theme} from "../h4/constants";

export const SGridTable = styled.div((props) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 5,
    padding: "15px 10px 10px 10px",
    backgroundColor: "rgba(0, 0, 0, 0.15)",
    borderRadius: 20,
    minHeight: 335,
    width: 290,
}))

export const SGridTablePanel = styled.div((props) => ({
    display: "flex",
    alignItems: "center",
    gap: 4,
    marginBottom: 10,
    flexDirection: "row",
    borderRadius: 15,
    padding: 5,
}))


export const SGridTablePanelInput = styled.input((props) => ({
    width: 45,
    padding: 0,
    marginLeft: 10,
    color: "#798fad",
    fontWeight: "bolder",
    fontSize: 18,
    backgroundColor: "transparent",

}))

export const SGridTitleCell = styled.div((props) => ({
    display: "flex",
    alignItems: "center",
    gap: 3,
    padding: "0 15px",
    fontWeight: 600,
    opacity: 0.8,
    cursor: "pointer",
    color: "#798fad",
    userSelect: "none",
    "&:hover": {
        opacity: 0.6,
    }
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

type TSGridTableRow = {
    margin?: string,
}
export const SGridTableRow = styled.div<TSGridTableRow>((props) => ({
    display: "grid",
    overflow: "hidden",
    maxWidth: "100%",
    width: "100%",
    margin: props.margin,
    gridTemplateColumns: "minmax(150px, 3fr) minmax(50px, 1fr)",
    gap: 5,
    "&:first-of-type": {
        marginBottom: 10,
    }
}))

export const SGridTableCell = styled.div((props) => ({
    overflow: "hidden",
    maxWidth: "100%",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: 10,
    padding: "6px 15px",
    "&:last-of-type": {
        opacity: 0.5,
        textAlign: "center",
    }
}))

export const SListNotFound = styled.div((props) => ({
    opacity: 0.3,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "25%",
}))

