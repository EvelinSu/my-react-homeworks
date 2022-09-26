import React, {
    ChangeEvent,
    DetailedHTMLProps,
    InputHTMLAttributes,
} from "react";
import s from "./SuperRange.module.css";

// тип пропсов обычного инпута
export type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement>;

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = DefaultInputPropsType & {
    // и + ещё пропсы которых нет в стандартном инпуте
    onChangeRange?: (value: number) => void;
    minmax: Array<number>;
};

const SuperRange: React.FC<SuperRangePropsType> = ({
    type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
    onChange,
    onChangeRange,
    className,
    minmax,

    ...restProps // все остальные пропсы попадут в объект restProps
}) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e); // сохраняем старую функциональность

        onChangeRange && onChangeRange(+e.currentTarget.value);
    };

    const finalRangeClassName = `${s.range} ${className ? className : ""}`;

    return (
        <input
            type={"range"}
            onChange={onChangeCallback}
            className={finalRangeClassName}
            min={minmax[0]}
            max={minmax[1]}
            {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
        />
    );
};

export default SuperRange
