import React, {FC} from 'react'
import {
    SMessage,
    SMessageAvatar,
    SMessageContainer,
    SMessageContent,
    SMessageText,
    SMessageTime,
    SMessageTitle
} from "./styled";

type TMessageProps = {
    avatar: string,
    name: string,
    message: string,
    time: string,
    isMineMessage?: boolean,
}

const Message: FC<TMessageProps> = ({message, time, avatar, name, ...props}) => {
    return (
        <SMessage isMineMessage={props.isMineMessage}>
            <SMessageAvatar src={avatar} />
            <SMessageContainer isMineMessage={props.isMineMessage}>
                <SMessageTitle>{name}</SMessageTitle>
                <SMessageContent>
                    <SMessageText>{message}</SMessageText>
                    <SMessageTime>{time}</SMessageTime>
                </SMessageContent>
            </SMessageContainer>
        </SMessage>
    )
}

export default Message;
