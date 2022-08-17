import styled from "styled-components";

export const SErrorPage = styled.div(props => ({
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    gap: 20,
    alignItems: "center",
    marginTop: 40,
    alignSelf: "center",
    justifySelf: "center",
    justifyContent: "center",
    maxWidth: 500,
}))

export const SErrorPage404 = styled.div(props => ({
    fontSize: 100,
   fontWeight: "bold",
    color: "#456a98",
}))

export const SErrorPageText = styled.div(props => ({
    fontSize: 60,
    marginTop: -20,
    marginBottom: 10,
}))

export const SErrorPageNya = styled.div(props => ({
    fontSize: 40,
    color: "#9eabbe",
}))