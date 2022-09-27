import React, {useState} from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";
import s from "../h4/HW4.module.css";

function HW11() {

    //текущее значение инпута
    const [value, setValue] = useState(430)

    // текущее значение двойного инпута
    const [value1, setValue1] = useState(430);
    const [value2, setValue2] = useState(700);

    // диапазон
    const minmax = [230, 1700];

    const [step, setStep] = useState(10)

    const onChangeStep = (e: React.ChangeEvent<HTMLInputElement>) => {
        let newStepValue = +e.currentTarget.value
        if (newStepValue <= 100 && newStepValue > 0) setStep(newStepValue)

    }

    return (
        <div>
            <h1 title={'Задача: сделать изменение стейта при передвигании ползунка. Доп: сделать свой double-range'}>homeworks
                11</h1>
            {/*should work (должно работать)*/}
            <div className={s.block}>
                <div>
                    <span style={{opacity: 0.4, paddingRight: 10}}>
                        you can change the input step
                    </span>
                    <input style={{width: 60}}
                           type={"number"}
                           value={step}
                           onChange={onChangeStep}
                    />
                </div>
                <div className={s.block}>
                    <span style={{opacity: 0.4}}>default html input</span>
                    <span style={{opacity: 0.4}}>{value}</span>
                    <SuperRange
                        step={step}
                        onChangeRange={setValue}
                        value={value}
                        minmax={minmax}
                        // сделать так чтоб value1 изменялось
                    />
                </div>
                <div className={s.block}>
                    <span style={{opacity: 0.4}}>my custom double-range input</span>
                    <span style={{opacity: 0.4}}>{value1 + ' - ' + value2}</span>
                    <SuperDoubleRange
                        step={step}
                        setValue1={setValue1}
                        setValue2={setValue2}
                        minmax={minmax}
                        value={[value1, value2]}
                        // сделать так чтоб value1 и value2 изменялось
                    />
                </div>
            </div>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
        </div>
    );
}

export default HW11;
