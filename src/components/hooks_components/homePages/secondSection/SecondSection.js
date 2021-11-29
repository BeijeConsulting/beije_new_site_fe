import React from "react";
import { useTranslation } from "react-i18next";
import { cardWhoWeAre } from '../../../../utils/properties'

import './SecondSection.css'

//import assets
import {
    ArrowRightOutlined
} from '@ant-design/icons';

//import components
import CustomCard from "../../../functional_components/customCard/CustomCard";

const SecondSection = () => {
    const { t } = useTranslation()

    const printCard = (item, key) => {
        return (
            <CustomCard
                key={key}
                cardClassName={item.cardClassName}
                level={item.titleLevel}
                cardTitle={t('home.secondSection.' + item.cardTitle)}
                titleClassName={'sec-section-title'}
            >
                <CustomCard
                    cardClassName='sec-section-square'
                    cardButton={true}
                    type={'detail-btn'}
                    classNameBtn={'sec-section-detail-btn'}
                    currentIcon={<ArrowRightOutlined />}
                />
            </CustomCard>
        )
    }

    return (
        <>
            {cardWhoWeAre.map(printCard)}
        </>
    )
}

export default SecondSection