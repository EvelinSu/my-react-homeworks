import React from 'react'
import {AffairPropsType} from "./types";
import {SAffair, SAffairButton, SAffairPriority, SAffairsButton} from "./styled";


function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback()
    }
    return (
        <SAffair>
            <span>{props.affair.name}</span>
            <SAffairPriority activeFilter={props.activeFilter} priority={props.affair.priority}>- {props.affair.priority} -</SAffairPriority>
            <SAffairButton onClick={deleteCallback}>x</SAffairButton>
        </SAffair>
    )
}

export default Affair
