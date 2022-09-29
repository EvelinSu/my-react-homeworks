import React from 'react'
import Message from "./Message/Message";
import {SChat, SChatMessages} from "./Message/styled";
import {useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {TMessage} from "./chatReducer";
import ChatPanel from "./ChatPanel/ChatPanel";

const HW1 = () => {

    const messages = useSelector<AppStoreType, Array<TMessage>>(state => state.chat.messages)

    return (
        <div>
            <h1 title={'Задача: передать пропсы в компонент и сверстать сообщение'}>
                homeworks 1
            </h1>
            <SChat>
                <SChatMessages>
                    {messages.map(({id, avatar, name, message, time, isMineMessage}) => (
                        <Message
                            key={id}
                            avatar={avatar}
                            name={name}
                            message={message}
                            time={time}
                            isMineMessage={isMineMessage}
                        />
                    ))}
                </SChatMessages>
                <ChatPanel />
            </SChat>
        </div>
    )
}

export default HW1
