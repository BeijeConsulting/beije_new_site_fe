import React from "react";
import { useTranslation } from "react-i18next";
import { Typography } from "antd";
const { Text } = Typography

//import functions
import { turnToUppercase } from "../../../utils/utilities";

//import style
import './ViewAllButton.css'


const ViewAllButton = (props) => {
    const { t } = useTranslation()

    return (
        <div className={props.classNameContainer}>
            <Text className={props.classNameTxt}>
                {turnToUppercase(t('btn.viewAll'))}
            </Text>
            <i className={props.classNameArrow} />
        </div>
    )
}

ViewAllButton.defaultProps = {
    classNameContainer: "view-all-btn-container",
    classNameTxt: 'view-all-btn-txt',
    classNameArrow: 'arrow-icon-btn arrow-icon-dark'
}

export default ViewAllButton