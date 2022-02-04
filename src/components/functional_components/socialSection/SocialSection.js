import React from "react";
import { useTranslation } from "react-i18next";

import { Row } from "antd";

// import style
import './SocialSection.css'

// import constants
import { social } from "../../../utils/properties";

// import components
import CustomButton from "../Button/CustomButton";

const SocialSection = (props) => {

    const { t } = useTranslation();

    const printSocial = (item, key) => {
        return (
            <div
                key={key}
                className={item.classNameSingleContainer}
            >
                <CustomButton
                    type={props.btnType}
                    href={item.url}
                    bgIcon={item.bgIcon}
                    target={item.target}
                />
            </div>
        )

    }

    return (
        <Row className={`container-row justify-end items-center ${props.classNameRowSocial}`}>
            {
                social.map(printSocial)
            }
        </Row>
    )
}

SocialSection.defaultProps = {
    btnType: 'primary-social',
    iconClassname: 'icon-social',
}

export default SocialSection