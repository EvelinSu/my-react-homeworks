import React from 'react'
import {AffairType} from "./HW2";

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: any // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback()
    }
    return (
        <div>
            // show some text

            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
