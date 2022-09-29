import React, {ChangeEvent, useState} from 'react';
import {SChatPanel, SChatTextarea} from "./styled";
import SuperButton from "../../h4/common/c2-SuperButton/SuperButton";
import {useDispatch} from "react-redux";
import {sendMessageAC} from "../chatReducer";

type  TChatPanel = {}

const ChatPanel: React.FC<TChatPanel> = (props) => {

    const [message, setMessage] = useState('')

    const dispatch = useDispatch()

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value)
    }

    const onKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && e.shiftKey) return
        if (e.key === 'Enter') {
            e.preventDefault()
            onClickHandler()
        }
    }

    const onClickHandler = () => {
        if (message.trim() !== '') {
            dispatch(sendMessageAC(message.trim()))
            setMessage('')
        }
    }

    return (
        <SChatPanel>
            <SChatTextarea
                onKeyDown={onKeyPress}
                value={message}
                onChange={onChangeHandler}
                placeholder={"Write your message..."}
            ></SChatTextarea>
            <SuperButton
                disabled={message.trim() === ''}
                onClick={onClickHandler}
            >Send</SuperButton>
        </SChatPanel>
    );
};

export default ChatPanel;
