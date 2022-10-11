import axios from "axios"

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/auth',
})

export const authAPI = {
    postTestAPI(checked: boolean) {
        return instance.post(`/test`, {success: checked})
    },
}