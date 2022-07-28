import React from 'react'
import Affair from './Affair'
import {AffairType, filterAffairs, FilterType} from './HW2'
import AlternativeAffair from "./AlternativeAffair";

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (string: FilterType) => void
    filteredAffairs: Array<AffairType>
    deleteAffairCallback: (id:number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={() => props.deleteAffairCallback(a._id)}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    } // need to fix
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    return (
        <div>

            {props.filteredAffairs.length === 0
                ? <AlternativeAffair/>
                : mappedAffairs
            }

            <button onClick={setAll}>All</button>
            <button onClick={setHigh}>High</button>
            <button onClick={setMiddle}>Middle</button>
            <button onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
