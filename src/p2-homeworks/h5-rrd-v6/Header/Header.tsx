import React, {useState} from 'react'
import {SHeader, SHeaderNav, SHeaderNavList, SHeaderNavTrigger} from "./styled";
import {TNavLinks} from "./types";

function Header() {
    const [isOpened, setIsOpened] = useState(false)

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
                    <SHeaderNav key={id}>
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
        label: "Link 1",
        link: "#"
    },
    {
        id: 2,
        label: "Link 2",
        link: "#"
    },
    {
        id: 3,
        label: "Link 3",
        link: "#"
    },
]