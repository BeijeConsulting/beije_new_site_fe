import React from "react";
import { useTranslation } from "react-i18next";


import { Row, Typography } from 'antd';
const { Title } = Typography

// import style
import './Contacts.css'

// import functions
import { turnToUppercase } from "../../utils/utilities";

// import components


const Contacts = (props) => {

    const { t } = useTranslation();

    return (
        <div className="contacts-container">

            <Row>
                <Title
                    level={1}
                >
                    {turnToUppercase(t('Contacts.title'))}
                </Title>
            </Row>
        </div>
    )
}

export default Contacts