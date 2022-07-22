import React, {FC} from 'react';
import {TIconsProps} from "./types";


export const MessageTailIcon: FC<TIconsProps> = ({color = "black", size = 24, ...props}) => {
    return (
        <React.Fragment>
            <svg viewBox="0 0 11 20" width="11" height="20" className="bubble-tail">
            </svg>
        </React.Fragment>
    );
}