import {Priorities} from "./styled";

export type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: () => void
    activeFilter: FilterType
}

export type AffairsPropsType = {
    data: Array<AffairType>
    activeFilter: FilterType
    setFilter: (filter: FilterType) => void
    filteredAffairs: Array<AffairType>
    deleteAffairCallback: (id:number) => void
}

export type AffairPriorityType = 'high' | 'low' | 'middle'

export type AffairType = {
    _id: number,
    name: string,
    priority: AffairPriorityType,
}
export type FilterType = 'all' | AffairPriorityType

export type TSAffairPriorityProps = {
    priority: AffairPriorityType
    activeFilter: FilterType
}
export type TSAffairsButtonProps = {
    isActive?: boolean,
}
export type TSAffairsProps = {
    priority: FilterType
}