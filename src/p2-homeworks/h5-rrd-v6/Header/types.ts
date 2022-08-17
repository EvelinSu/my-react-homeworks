export type TNavLinksLabel =     "pre junior" | "junior" | "junior+" | ""

export type TNavLinks = {
    id: number
    label: TNavLinksLabel
    link: string
}

export  type TSHeaderNavListProps = {
    isOpened?: boolean
}

export  type TSHeaderNavTriggerProps = {
    isOpened?: boolean
}

export type TSHeaderNavProps = {
    isActive: boolean
}