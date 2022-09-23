import styled from "styled-components";

export const  SLoadingWrapper = styled.div(() => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    width: 260,
}))

export const SLoadingGif = styled.img(() => ({
    borderRadius: 20,
    height: "100%",
}))