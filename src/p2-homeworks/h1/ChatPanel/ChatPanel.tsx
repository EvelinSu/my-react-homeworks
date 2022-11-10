import React, {ChangeEvent, FC, useState} from 'react';
import {SChatButton, SChatPanel, SChatTextarea} from "./styled";
import {useDispatch} from "react-redux";
import {sendMessageAC} from "../bll/chatReducer";

type TChatPanelProps = {
    scrollToBottom: () => void
}

const ChatPanel: FC<TChatPanelProps> = (props) => {

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
            props.scrollToBottom()
        }
    }

    return (
        <SChatPanel>
            <SChatTextarea
                onKeyDown={onKeyPress}
                value={message}
                onFocus={() => setTimeout(() => props.scrollToBottom(), 200)}
                onChange={onChangeHandler}
                placeholder={"Write your message..."}
            ></SChatTextarea>
            <SChatButton
                disabled={message.trim() === ''}
                onClick={onClickHandler}
            >
                Send
            </SChatButton>
        </SChatPanel>
    );
};

export default ChatPanel;
