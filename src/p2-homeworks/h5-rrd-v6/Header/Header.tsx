import React, {useState} from 'react'
import {SHeader, SHeaderNav, SHeaderNavList, SHeaderNavTrigger} from "./styled";
import {TNavLinks, TNavLinksLabel} from "./types";
import {useNavigate} from "react-router-dom";

function Header() {
    const [isOpened, setIsOpened] = useState<boolean>(true)
    const [activePage, setActivePage] = useState<TNavLinksLabel>('pre junior')
    const navigate = useNavigate()
    const onClickHandler = (label:TNavLinksLabel, link: string) => {
        setActivePage(label)
        navigate(link)
    }

    return (
        <SHeader
            onMouseEnter={() => setIsOpened(true)}
            onMouseLeave={() => setIsOpened(false)}
        >
            <SHeaderNavTrigger isOpened={isOpened}>
                Menu
            </SHeaderNavTrigger>
            <SHeaderNavList isOpened={isOpened}>
                {navLinks.map(({label, link, id}) => (
                    <SHeaderNav key={id} onClick={() => onClickHandler(label, link)} isActive={activePage === label}>
                        {label}
                    </SHeaderNav>
                ))}
            </SHeaderNavList>
        </SHeader>
    )
}

export default Header


const navLinks: Array<TNavLinks> = [
    {
        id: 1,
        label: "pre junior",
        link: "/pre-junior"
    },
    {
        id: 2,
        label: "junior",
        link: "/junior"
    },
    {
        id: 3,
        label: "junior+",
        link: "/junior+"
    },
]