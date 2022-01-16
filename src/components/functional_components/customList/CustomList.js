import React from "react";
import { useTranslation } from "react-i18next";

// import style
import './CustomList.css'

const CustomList = (props) => {

    const { t } = useTranslation();

    const printList = (item, key) => {
        return (
            <li
                key={key}
                className={props.liClassName}
            >
                {t(item)}
            </li>
        )
    }

    return (
        <ul className={props.ulClassName}>
            {props.listToPrint.map(printList)}
        </ul>

    )
}

CustomList.defaultProps = {
    ulClassName: 'custom-list-ul',
    liClassName: 'custom-list-li'
}

export default CustomList