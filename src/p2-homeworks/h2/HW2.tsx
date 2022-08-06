import React, {useState} from 'react'
import Affairs from './Affairs/Affairs'
import {AffairType, FilterType} from "./Affairs/types";

// constants
const defaultAffairs: Array<AffairType> = [
    {_id: 1, name: 'React', priority: 'low'},
    {_id: 2, name: 'anime', priority: 'middle'},
    {_id: 3, name: 'games', priority: 'high'},
    {_id: 4, name: 'sleep', priority: 'high'},
    {_id: 5, name: 'work', priority: 'low'},
    {_id: 6, name: 'trolling', priority: 'high'},
    {_id: 7, name: 'html & css', priority: 'low'},
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => {
    return (filter !== 'all') ? affairs.filter(el => el.priority === filter) : affairs
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => {
    return affairs.filter(el => el._id !== _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('all')
    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))

    return (
        <div>
            <hr />
            <hr />
            homeworks 2
            <Affairs
                data={filteredAffairs}
                activeFilter={filter}
                setFilter={setFilter}
                filteredAffairs={filteredAffairs}
                deleteAffairCallback={deleteAffairCallback}
            />
            <hr />
            <hr />
        </div>
    )
}

export default HW2
