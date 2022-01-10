import React from "react";
// import { useTranslation } from "react-i18next";
import { Typography } from "antd";

//import assets
import {
    ArrowLeftOutlined
} from '@ant-design/icons';
const { Text } = Typography

//import functions
import { turnToUppercase } from "../../../utils/utilities";

//import style
import './GoBackBtn.css'


const GoBackBtn = (props) => {
    // const { t } = useTranslation()

    return (
        <div className={props.classNameContainer}>
            <ArrowLeftOutlined
                className={props.classNameArrow}
            />
            <Text className={props.classNameTxt}>
                {turnToUppercase(props.goBackContent)}
            </Text>
        </div>
    )
}

GoBackBtn.defaultProps = {
    classNameContainer: "go-back-btn-container",
    classNameTxt: 'go-back-btn-txt',
    classNameArrow: 'go-back-btn-arrow'
}

export default GoBackBtn