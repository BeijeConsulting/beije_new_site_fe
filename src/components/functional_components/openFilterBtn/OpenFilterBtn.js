import React from "react";
import { turnToUppercase } from "../../../utils/utilities";

// import style
import './OpenFilterBtn.css'

const OpenFilterBtn = (props) => {
    return (
        <div className={`open-filter-container ${props.containerClassName}`}>
            <div className={`open-filter-icon ${props.openIcon ? 'open-filter-icon-open' : 'open-filter-icon-close'}`}></div>
            <span>
                {turnToUppercase(props.txtFilter)}
            </span>
        </div>
    )
}

OpenFilterBtn.defaultProps = {
    txtFilter: 'Filtra',
}


export default OpenFilterBtn