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
        avatar: 'https://i.imgur.com/H1ZlGk9.png',
        name: 'Простой студентик',
        message: 'Игнат, проверь пж домашки, ради христа (ノಠ益ಠ)ノ彡┻━┻',
        time: '22:01',
        isMineMessage: true,
    },
    {
        id: 3,
        avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
        name: 'Name',
        message: 'No （\\#-_-)\\┯━┯',
        time: '624:71',
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
