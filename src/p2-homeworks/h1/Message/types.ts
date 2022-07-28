export type TMessageProps = {
    avatar: string,
    name: string,
    message: string,
    time: string,
    isMineMessage?: boolean,
    key: number,
}

export type TSMessageTextProps = {
    opacity?: number,
}
export type TSMessageProps = {
    isMineMessage?: boolean,
}

export type TSMessageContainerProps = {
    isMineMessage?: boolean,
}