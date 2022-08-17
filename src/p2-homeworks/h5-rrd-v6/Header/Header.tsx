import React, {useState} from 'react'
import {SHeader, SHeaderNav, SHeaderNavList, SHeaderNavTrigger} from "./styled";
import {TNavLinks, TNavLinksLabel} from "./types";
import {useLocation, useNavigate} from "react-router-dom";

function Header() {
    const [isOpened, setIsOpened] = useState<boolean>(true)
    const location = useLocation()
    const navigate = useNavigate()

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
                    <SHeaderNav key={id} onClick={() => navigate(link)} isActive={location.pathname === link}
                    >
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