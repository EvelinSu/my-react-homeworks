import React from "react";
import {AffairType, FilterType} from "./types";
import {
    SAffair,
    SAffairButton,
    SAffairPriority,
} from "./styled";

type AffairPropsType = {
    affair: AffairType;
    deleteAffairCallback: () => void;
    activeFilter: FilterType;
};

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback();
    };
    return (
        <SAffair>
            <span>{props.affair.name}</span>
            <SAffairPriority
                activeFilter={props.activeFilter}
                priority={props.affair.priority}
            >
                - {props.affair.priority} -
            </SAffairPriority>
            <SAffairButton onClick={deleteCallback}>x</SAffairButton>
        </SAffair>
    );
}

export default Affair;
