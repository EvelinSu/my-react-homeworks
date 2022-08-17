import React from 'react'
import {SErrorPage, SErrorPage404, SErrorPageNya, SErrorPageText} from "./styled";

function Error404() {
    return (
        <SErrorPage>
            <SErrorPage404>404</SErrorPage404>
            <SErrorPageText>Sorry, page not found!</SErrorPageText>
            <SErrorPageNya>(っ´ω`)ﾉ(╥ω╥)</SErrorPageNya>
        </SErrorPage>
    )
}

export default Error404
