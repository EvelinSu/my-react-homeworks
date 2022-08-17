import React from 'react'
import Pages from './Pages'
import Header from "./Header/Header";
import {HashRouter} from "react-router-dom";

function HW5() {
    return (
        <>
            <HashRouter>
                <Header/>
                <Pages/>
            </HashRouter>
        </>
    )
}

export default HW5
