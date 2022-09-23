import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from "../h4/HW4.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC, loadingReducer} from "./bll/loadingReducer";
import {SLoadingGif, SLoadingWrapper} from "./styled";
import loadingGif from '../../assets/img/loading.gif'

function HW10() {
    // useSelector, useDispatch
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
    const dispatch = useDispatch()

    const setLoading = () => {
        // dispatch
        dispatch(loadingAC(true))
        // setTimeout
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 5000)
        console.log('loading...')
    };

    return (
        <div>
            <h1 title={"Работа с редаксом, при нажатии на кнопку запускать загрузку на какое то время, при" +
                " желании вставить свой лоадер"}>
                homeworks 10
            </h1>
            <div className={s.column}>
                {/*should work (должно работать)*/}
                <SLoadingWrapper>
                    {loading
                        ? (
                            <SLoadingGif src={loadingGif}/>
                        ) : (
                            <SuperButton onClick={setLoading}>set loading...</SuperButton>
                        )
                    }
                </SLoadingWrapper>

                {/*для личного творчества, могу проверить*/}
                {/*<Alternative/>*/}
            </div>
        </div>
    )
}

export default HW10
