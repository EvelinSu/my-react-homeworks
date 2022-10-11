import React from 'react';
import s from "../h4/HW4.module.css";
import Request from "./Request";

const HW13 = () => {
    return (
        <div className={s.column}>
            <h1 title={"Axios,  запросы на сервер"}>
                homeworks 13
            </h1>
            <Request />
        </div>
    );
};

export default HW13;
