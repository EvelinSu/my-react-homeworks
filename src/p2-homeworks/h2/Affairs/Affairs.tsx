import React from 'react'
import Affair from './Affair'
import AlternativeAffair from "./AlternativeAffair";
import {AffairsPropsType, AffairType, FilterType} from "./types";
import {SAffairs, SAffairsButton, SAffairsList, SFlexBlock} from "./styled";

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            activeFilter={props.activeFilter}
            deleteAffairCallback={() => props.deleteAffairCallback(a._id)}
        />
    ))
    const setFilter = (filter: FilterType) => {
        props.setFilter(filter)
    }

    return (
        <SAffairs priority={props.activeFilter}>
            <SFlexBlock>
                {buttons.map(({label, filter}, index) =>
                    <SAffairsButton
                        isActive={props.activeFilter === filter}
                        key={index}
                        onClick={() => setFilter(filter)}
                    >
                        {label}
                    </SAffairsButton>
                )}
            </SFlexBlock>
            {props.filteredAffairs.length !== 0
                ? <SAffairsList>{mappedAffairs}</SAffairsList>
                : <AlternativeAffair />
            }
        </SAffairs>
    )
}

type TButtons = {
    label: string,
    filter: FilterType,
}

const buttons: Array<TButtons> = [
    {
        label: "All",
        filter: "all"
    },
    {
        label: "High",
        filter: "high"
    },
    {
        label: "Low",
        filter: "low"
    },
    {
        label: "Middle",
        filter: "middle"
    },
]

export default Affairs
