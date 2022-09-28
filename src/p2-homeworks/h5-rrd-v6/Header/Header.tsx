import React, {useState} from 'react'
import {
    SColorBlock, SColorBlocksWrapper,
    SColorInput, SColorInputIcon,
    SColorInputWrapper,
    SHeader,
    SHeaderBlock,
    SHeaderNav,
    SHeaderNavList,
    SHeaderNavTrigger, SHeaderNavWrapper, SHeaderThemeBlock
} from "./styled";
import {TNavLinks} from "./types";
import {useLocation, useNavigate} from "react-router-dom";
import BurgerIcon from "../../../assets/icons/BurgerIcon";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../h10/bll/store";
import {changePrimaryAC, changeSecondaryAC, TTheme} from "../../h12/bll/themeReducer";
import EditIcon from "../../../assets/icons/EditIcon";

function Header() {
    const [isOpened, setIsOpened] = useState<boolean>(true)
    const location = useLocation()
    const navigate = useNavigate()

    const theme = useSelector<AppStoreType, TTheme>(state => state.theme)
    const dispatch = useDispatch()
    // useDispatch, onChangeCallback
    const [primaryColor, setPrimaryColor] = useState(theme.colors.primary)
    const [secondaryColor, setSecondaryColor] = useState(theme.colors.secondary)

    const presets = [
        {primary: '#343361', secondary: '#9754A0'},
        {primary: '#61335B', secondary: '#A05490'},
        {primary: '#336134', secondary: '#54A061'},
        {primary: '#613333', secondary: '#a05454'},
        {primary: '#333661', secondary: '#a05454'},
        {primary: '#33615d', secondary: '#54a0a0'},
    ]

    const onChangePrimary = () => {
        if (primaryColor === "#ffffff") alert("OMG NO.......")
        if (primaryColor === "#000000") alert("WTF DUDE.......")
        if (primaryColor === secondaryColor) alert("REALLY?")
        dispatch(changePrimaryAC(primaryColor))
    }
    const onChangeSecondary = () => dispatch(changeSecondaryAC(secondaryColor))
    const changeTheme = (primary: string, secondary: string) => {
        setPrimaryColor(primary)
        setSecondaryColor(secondary)
        dispatch(changePrimaryAC(primary))
        dispatch(changeSecondaryAC(secondary))
    }

    return (
        <SHeader>
            <SHeaderThemeBlock>
                <span style={{fontSize: 14, opacity: 0.4}}>
                    You can change the 2 main colors of the site <br />
                Or choose one of the sets:
                </span>
                <SColorBlocksWrapper>
                    {presets.map(el => (
                        <SColorBlock
                            isActive={el.primary === primaryColor && el.secondary === secondaryColor}
                            primary={el.primary}
                            secondary={el.secondary}
                            onClick={() => changeTheme(el.primary, el.secondary)}
                        ></SColorBlock>
                    ))}
                </SColorBlocksWrapper>
            </SHeaderThemeBlock>
            <SHeaderBlock>
                <SColorInputWrapper>
                    <SColorInputIcon>
                        <EditIcon />
                    </SColorInputIcon>
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
                <SHeaderNavWrapper
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
                </SHeaderNavWrapper>
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