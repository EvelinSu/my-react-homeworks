import {TActions} from "../../h8/bll/homeWorkReducer";
import {v1} from "uuid";

export type TMessage = {
    id: string,
    avatar: string,
    name: string,
    message: string,
    time: string,
    isMineMessage?: boolean,
}

export type TMessagePage = {
    messages: Array<TMessage>
}

const initialState: TMessagePage = {
    messages: [
        {
            id: '1',
            avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
            name: 'Name',
            message: 'some text ',
            time: '22:00',
        },
        {
            id: '2',
            avatar: 'https://i.imgur.com/H1ZlGk9.png',
            name: 'Простой студентик',
            message: 'Игнат, проверь пжпж домашки, ради христа (ノಠ益ಠ)ノ彡┻━┻',
            time: '22:01',
            isMineMessage: true,
        },
        {
            id: '3',
            avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
            name: 'Name',
            message: 'No （\\#-_-)\\┯━┯',
            time: '624:71',
        },
    ]
}

export const chatReducer = (state: TMessagePage = initialState, action: TActions): TMessagePage => {
    switch (action.type) {
        case "SEND-MESSAGE":
            let newMessage: TMessage = {
                id: v1(),
                avatar: 'https://i.imgur.com/H1ZlGk9.png',
                name: 'Простой студентик',
                message: action.text,
                time: String(new Date().getHours() + ':' + new Date().getMinutes()),
                isMineMessage: true,
            }
            return {...state, messages: [...state.messages, newMessage]}
        default:
            return state
    }
}

export type TSendMessageAC = ReturnType<typeof sendMessageAC>

export const sendMessageAC = (text: string) => ({
    type: "SEND-MESSAGE",
    text

} as const)

export default chatReducer