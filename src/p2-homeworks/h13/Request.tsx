import React, {useState} from 'react';
import {authAPI} from "./api/api";
import LoaderIcon from "../../assets/Loader";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {SRequestBox} from "./styled";

const Request = () => {

    const [isError, setIsError] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [message, setMessage] = useState<string>("press the button ┬┴┬┴┤･ω･)ﾉ")

    const onChangeHandler = () => {
        setIsLoading(true)
        authAPI
            .postTestAPI(isError)
            .then((res) => {
                setMessage(res.data.info)
            })
            .catch((res) => {
                setMessage(res.message)
            })
            .finally(() => {
                setTimeout(() => {
                    setIsError(!isError)
                    setIsLoading(false)
                }, 500)
            })
    }

    return (
        <>
            <SuperButton onClick={onChangeHandler}
                         disabled={isLoading}
            >{isError ? 'get message' : 'get error'}</SuperButton>
            <SRequestBox isError={isError}>
                {
                    isLoading ? <LoaderIcon /> : message
                }
            </SRequestBox>
        </>
    );
};

export default Request;
