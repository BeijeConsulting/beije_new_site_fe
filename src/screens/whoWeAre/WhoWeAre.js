import React, { useEffect } from "react";

import { Row, Col } from "antd";

// import redux
import { connect } from "react-redux";
import { setColorHeader } from "../../redux/ducks/colorHeaderDuck";

// import style
import './WhoWeAre.css'

// import components
import CustomCard from "../../components/functional_components/customCard/CustomCard";
import CustomOwlCarousel from "../../components/hooks_components/customOwlCarousel/CustomOwlCarousel";
import SubsectionTitleImg from "../../components/hooks_components/subsectionTitleImg/SubsectionTitleImg";

const WhoWeAre = (props) => {

    const primary_bg_page_academy = '#d6e3e5'

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    const handleScroll = () => {
        if (window.pageYOffset > 0) {
            props.dispatch(setColorHeader(primary_bg_page_academy))
        }
    }

    return (
        <div className="whoWeAre-container">

            {/* profile picture section */}
            <section className="whoWeAre-profile-sec">
                <Row>
                    <Col span={24}>
                        <CustomCard
                            cardTitle={'Chi siamo'}
                            titleClassName={'whoWeAre-profile-sec-title'}
                        />
                    </Col>
                    <Col span={24}>
                        <CustomOwlCarousel
                            numItemMobile={1.8}
                            numItemMore320Less768={2.5}
                            numItemMore768={4}
                            numItemDefault={5.3}
                            marginEl={5}
                        />
                    </Col>
                </Row>
            </section>

            {/* value */}
            <section>
                <SubsectionTitleImg
                    desc='Questa è una descrizione momentanea che inserisco per fare tanto spazio e vedere dove viene inserita la descrizione'
                    bg={'whoWeAre-value-img'}
                />
            </section>

            {/* history */}
            <section>
                <SubsectionTitleImg
                    desc='Questa è una descrizione momentanea che inserisco per fare tanto spazio e vedere dove viene inserita la descrizione'
                    bg={'whoWeAre-value-img'}
                    imgRightDescLeft={false}
                    imgLeftDescRight={true}
                    classNameTitle={'whoWeAre-sub-section-title'}
                    descDesktopContainer={'whoWeAre-sub-section-desc-container'}
                />
            </section>

            {/* mission */}
            <section>
                <SubsectionTitleImg
                    desc='Questa è una descrizione momentanea che inserisco per fare tanto spazio e vedere dove viene inserita la descrizione'
                    bg={'whoWeAre-value-img'}
                />
            </section>

            {/* vision */}
            <section>
                <SubsectionTitleImg
                    desc='Questa è una descrizione momentanea che inserisco per fare tanto spazio e vedere dove viene inserita la descrizione'
                    bg={'whoWeAre-value-img'}
                    imgRightDescLeft={false}
                    imgLeftDescRight={true}
                    classNameTitle={'whoWeAre-sub-section-title'}
                    descDesktopContainer={'whoWeAre-sub-section-desc-container'}
                />
            </section>
        </div>
    )
}

export default connect()(WhoWeAre)