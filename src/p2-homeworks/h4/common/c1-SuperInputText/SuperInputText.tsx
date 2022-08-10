import React, {ChangeEvent, KeyboardEvent} from 'react'
import {SSuperInputText} from "./styled";
import {SuperInputTextPropsType} from "./types";


const SuperInputText: React.FC<SuperInputTextPropsType> = (
    {
        type,
        onChange, onChangeText,
        onKeyPress, onEnter,
        error,
        className, spanClassName,
        ...props
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange  && onChange(e)
        onChangeText && onChangeText(e.currentTarget.value)
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress && onKeyPress(e);
        onEnter  && e.key === 'Enter' && onEnter()
    }


    return (
        <>
            <SSuperInputText
                type={'text'}
                onChange={onChangeCallback}
                onKeyPress={onKeyPressCallback}
                error={error}
                placeholder={props.placeholder}

            />
        </>
    )
}

export default SuperInputText
