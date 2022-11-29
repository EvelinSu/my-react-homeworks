import React, {useRef} from 'react'
import Message from "./Message/Message";
import {SChat, SChatMessages} from "./Message/styled";
import {useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {TMessage} from "./bll/chatReducer";
import ChatPanel from "./ChatPanel/ChatPanel";

const HW1 = () => {

    const messages = useSelector<AppStoreType, Array<TMessage>>(state => state.chat.messages)
    const scrollToBottomRef = useRef(null)

    //жесть
    const scrollToBottom = () => {
        setTimeout(() => {
            // @ts-ignore
            scrollToBottomRef.current?.scrollTo({
                top: document.body.scrollHeight,
                left: 0,
                behavior: "smooth"
            })
        }, 0)
    }

    return (
        <div>
            <h1 title={'Задача: передать пропсы в компонент и сверстать сообщение'}>
                homeworks 1
            </h1>
            <SChat>
                <SChatMessages ref={scrollToBottomRef}>
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
                <ChatPanel scrollToBottom={scrollToBottom} />
            </SChat>
        </div>
    )
}

export default HW1
