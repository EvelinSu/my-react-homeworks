import React from 'react'
import Message from "./Message/Message";
import {SChat} from "./Message/styles";

const messages = [
    {
        id: 0,
        avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
        name: 'Name',
        message: 'some text ',
        time: '22:00',
    },
    {
        id: 1,
        avatar: 'https://i.imgur.com/4KVIig9.png',
        name: 'Фанат стайлед компонентс',
        message: 'Привет, когда я начинаю верстать стилизованными компонентами, я не могу остановиться, ' +
            'в моих венах течет Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        time: '624:71',
        isMineMessage: true,
    },
    {
        id: 2,
        avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
        name: 'Name',
        message: 'Может нужно таблеток попить?',
        time: '22:01',
    },
]

function HW1() {
    return (
        <div>
            <hr />
            homeworks 1
            <SChat>
                {messages.map(({avatar, name, message, time, id, isMineMessage}) => (
                    <Message
                        key={id}
                        isMineMessage={isMineMessage}
                        avatar={avatar}
                        name={name}
                        message={message}
                        time={time}
                    />
                ))}
            </SChat>
        </div>
    )
}

export default HW1
