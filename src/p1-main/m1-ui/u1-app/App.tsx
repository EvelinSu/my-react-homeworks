import React from 'react'
import s from './App.module.css'
import HW5 from '../../../p2-homeworks/h5-rrd-v6/HW5';
import {ThemeProvider} from "styled-components";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../p2-homeworks/h10/bll/store";
import {TTheme} from "../../../p2-homeworks/h12/bll/themeReducer";

function App() {
    const theme = useSelector<AppStoreType, TTheme>(state => state.theme)

    return (
        <ThemeProvider theme={theme}>
            <div className={s.App} style={{backgroundColor: theme.colors.primary}}>
                <h1>react homeworks:</h1>
                {/*<HW1/>*/}
                {/*<HW2/>*/}
                {/*<HW3/>*/}
                {/*<HW4/>*/}
                <HW5 />
            </div>
        </ThemeProvider>
    )
}

export default App
