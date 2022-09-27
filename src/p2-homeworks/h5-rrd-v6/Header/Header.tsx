import React, {useState} from 'react'
import {
    SColorInput,
    SColorInputWrapper,
    SHeader,
    SHeaderBlock,
    SHeaderNav,
    SHeaderNavList,
    SHeaderNavTrigger
} from "./styled";
import {TNavLinks} from "./types";
import {useLocation, useNavigate} from "react-router-dom";
import BurgerIcon from "../../../assets/icons/BurgerIcon";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../h10/bll/store";
import {changePrimaryAC, changeSecondaryAC, TTheme} from "../../h12/bll/themeReducer";

function Header() {
    const [isOpened, setIsOpened] = useState<boolean>(true)
    const location = useLocation()
    const navigate = useNavigate()

    const theme = useSelector<AppStoreType, TTheme>(state => state.theme)
    const dispatch = useDispatch()
    // useDispatch, onChangeCallback
    const [primaryColor, setPrimaryColor] = useState(theme.colors.primary)
    const [secondaryColor, setSecondaryColor] = useState(theme.colors.secondary)

    const onChangePrimary = () => {
        if (primaryColor === "#ffffff") alert("OMG NO.......")
        if (primaryColor === "#000000") alert("WTF DUDE.......")
        if (primaryColor === secondaryColor) alert("REALLY?")
        dispatch(changePrimaryAC(primaryColor))
    }
    const onChangeSecondary = () => dispatch(changeSecondaryAC(secondaryColor))

    return (
        <SHeader
        >
            <SColorInputWrapper>
                <SColorInput
                    title={"primary color"}
                    type={"color"}
                    value={primaryColor}
                    onChange={e => setPrimaryColor(e.currentTarget.value)}
                    onBlur={onChangePrimary}
                />
                <SColorInput
                    title={"secondary color"}
                    type={"color"}
                    value={secondaryColor}
                    onChange={e => setSecondaryColor(e.currentTarget.value)}
                    onBlur={onChangeSecondary}
                />
            </SColorInputWrapper>
            <SHeaderBlock
                onMouseEnter={() => setIsOpened(true)}
                onMouseLeave={() => setIsOpened(false)}
            >
                <SHeaderNavTrigger isOpened={isOpened}>
                    <BurgerIcon />
                </SHeaderNavTrigger>
                <SHeaderNavList isOpened={isOpened}>
                    {navLinks.map(({label, link, id}) => (
                        <SHeaderNav key={id} onClick={() => navigate(link)} isActive={location.pathname === link}
                        >
                            {label}
                        </SHeaderNav>
                    ))}
                </SHeaderNavList>
            </SHeaderBlock>
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