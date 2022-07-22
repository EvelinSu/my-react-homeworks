import React, {FC} from 'react'
import {
    SMessage,
    SMessageAvatar,
    SMessageContainer,
    SMessageContent,
    SMessageText,
    SMessageTime,
    SMessageTitle
} from "./styles";
import {TMessageProps} from "./types";
import {MessageTailIcon} from "../../../Icons/MessageTailIcon";

const Message: FC<TMessageProps> = ({message, time, avatar, name, ...props}) => {
    return (
        <SMessage isMineMessage={props.isMineMessage}>
            <SMessageAvatar src={avatar}/>
            <SMessageContainer isMineMessage={props.isMineMessage}>
                <SMessageTitle>{name}</SMessageTitle>
                <SMessageContent>
                    <SMessageText>{message}</SMessageText>
                    <SMessageTime>{time}</SMessageTime>
                </SMessageContent>
            </SMessageContainer>
            <MessageTailIcon/>
        </SMessage>
    )
}

export default Message
