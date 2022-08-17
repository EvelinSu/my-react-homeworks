import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import {SSuperCheckbox, SSuperInputText} from "../c1-SuperInputText/styled";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperCheckboxPropsType = DefaultInputPropsType & {
    onChangeChecked?: (checked: boolean) => void
    spanClassName?: string
}

const SuperCheckbox: React.FC<SuperCheckboxPropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeChecked,
        className, spanClassName,
        children, // в эту переменную попадёт текст, типизировать не нужно так как он затипизирован в React.FC

        ...props// все остальные пропсы попадут в объект restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeChecked && onChangeChecked(e.currentTarget.checked)
        onChange && onChange(e)
    }

    return (
        <label>
            <SSuperCheckbox
                type={'checkbox'}
                onChange={onChangeCallback}
                checked={props.checked}
            />
            {children && <span>{children}</span>}
        </label>
    )
}

export default SuperCheckbox
