import styled from "styled-components";
import {theme} from "../../h4/constants";

export const SDoubleRangeWrapper = styled.div((props) => ({
    position: "relative",
    userSelect: "none",
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: rangeStyles.thumb.height,
}));

type TSRangeProps = {
    value1: number;
    value2: number;
};
export const SRangeTrack = styled.div<TSRangeProps>(({value1, value2}) => ({
    borderRadius: 10,
    position: "absolute",
    height: rangeStyles.track.height,
    left: 0,
    right: 0,
    background: `linear-gradient(to right, rgba(255, 255,255, 0.1) ${value1}%, 
                                           ${theme.colors.primary} ${value1}% ${value2}%, 
                                           rgba(255, 255,255, 0.1) ${value2}%)`,
}));

const rangeStyles: any = {
    track: {
        appearance: "none",
        height: 8,
    },
    thumb: {
        "-webkit-appearance": "none !important",
        height: 20,
        width: 20,
        backgroundColor: theme.colors.primary,
        cursor: "pointer",
        borderRadius: 30,
        marginTop: -6,
        pointerEvents: "auto",
        zIndex: 1,
        transition: "0.2s",
        "&:hover": {
            transform: "scale(1.2)",
        }
    }
}

export const SDoubleRange = styled.input((props) => ({
    '&[type="range"]': {
        "-webkit-appearance": "none !important",
        "-moz-appearance": "none",
        padding: 0,
        margin: 0,
        appearance: "none",
        maxWidth: "100%",
        width: "100%",
        outline: "none",
        position: "absolute",
        backgroundColor: "transparent",
        pointerEvents: "none",
        transition: "0.2s",

    },
    '&[type="range"]::-webkit-slider-runnable-track': {
        ...rangeStyles.track,

    },
    '&[type="range"]::-moz-range-track': {
        ...rangeStyles.track,
    },
    '&[type="range"]::-ms-track': {
        ...rangeStyles.track,
    },
    '&[type="range"]::-webkit-slider-thumb': {
        ...rangeStyles.thumb,

    },
    '&[type="range"]::-moz-range-thumb': {
        ...rangeStyles.thumb,
    },
    '&[type="range"]::-ms-thumb': {
        ...rangeStyles.thumb,
    },
}));
