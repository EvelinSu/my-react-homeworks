import React from 'react'
import Message from "./Message/Message";
import {SChat} from "./Message/styled";

const messages = [
    {
        id: 1,
        avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
        name: 'Name',
        message: 'some text ',
        time: '22:00',
    },
    {
        id: 2,
        avatar: 'https://i.imgur.com/4KVIig9.png',
        name: 'Фанат стайлед компонентс',
        message: 'В моих венах течет Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        time: '624:71',
        isMineMessage: true,
    },
    {
        id: 3,
        avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
        name: 'Name',
        message: 'Может нужно таблеток попить?',
        time: '22:01',
    },
]

function HW1() {
    return (
        <div>
            <h1>
                homeworks 1
            </h1>
            <SChat>
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
            </SChat>
        </div>
    )
}

export default HW1
