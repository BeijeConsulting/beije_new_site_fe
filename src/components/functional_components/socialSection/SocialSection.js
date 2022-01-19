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
                    currentIcon={
                        <a
                            href={item.url}
                            target={item.target}
                        >
                            <img
                                src={item.icon}
                                alt={t(`imgAlt.social.${item.alt}`)}
                                style={{ height: 16 }}
                                className={props.iconClassname}
                            />
                        </a>
                    }
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