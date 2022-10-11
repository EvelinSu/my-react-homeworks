import React, {useState} from 'react';
import {authAPI} from "./api/api";
import LoaderIcon from "../../assets/Loader";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {SRequestBox, SRequestText, SRequestTitle} from "./styled";

const Request = () => {

    const [isError, setIsError] = useState<boolean>(true)
    const [statusCode, setStatusCode] = useState<number>()
    const [isLoading, setIsLoading] = useState(false)
    const [message, setMessage] = useState<string>("press the button ┬┴┬┴┤･ω･)ﾉ")

    const onChangeHandler = () => {
        setIsLoading(true)
        authAPI
            .postTestAPI(isError)
            .then((res) => {
                setMessage(res.data.info)
                setStatusCode(res.status)
            })
            .catch((res) => {
                setStatusCode(res.response.status)
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
            <SuperButton
                onClick={onChangeHandler}
                disabled={isLoading}
            >
                {isError ? 'get message' : 'get error'}
            </SuperButton>
            <SRequestBox isError={isError}>
                <SRequestTitle>
                    {!isLoading && statusCode && statusCode + '!'}
                </SRequestTitle>
                {isLoading
                    ? <LoaderIcon />
                    : (<SRequestText style={{opacity: 0.5}}>
                        {message}
                    </SRequestText>)
                }
            </SRequestBox>
        </>
    );
};

export default Request;
