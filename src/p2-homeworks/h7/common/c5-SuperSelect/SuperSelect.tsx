import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import {SOption, SSelect} from "./styled";

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] = options ? options.map((el, i) => <SOption key={i}>{el}</SOption>) : [] // map options
    // with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChangeOption && onChangeOption(e.currentTarget.value)
        onChange && onChange(e)
    }

    return (
        <SSelect onChange={onChangeCallback} value={restProps.value}>
            {mappedOptions}
        </SSelect>
    )
}

export default SuperSelect
