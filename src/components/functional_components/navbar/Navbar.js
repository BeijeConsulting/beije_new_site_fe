import React from "react";
import { Row, Col, Typography } from "antd";
const { Link } = Typography;

//import constants
import { ENVIRONMENT } from "../../../utils/properties";

//import style
import './Navbar.css'

const Navbar = (props) => {

    return (
        <Row
            className={props.classNameRow}
        >
            <Col className={props.classNameCol}>

                <Link
                    href={props.href_consulting}
                    type={props.type}
                    className={props.classNameLink}>
                    CONSULTING
                </Link>
            </Col>
            <Col className={props.classNameCol}>
                <Link
                    href={props.href_academy}
                    type={props.type}
                    className={props.classNameLink}>
                    ACADEMY
                </Link>
            </Col>
            <Col className={props.classNameCol}>
                <Link
                    href={props.href_up}
                    type={props.type}
                    className={props.classNameLink}>
                    UP
                </Link>
            </Col>
        </Row>
    )
}

Navbar.defaultProps = {
    classNameRow: 'navbar-row',
    href_consulting: `${ENVIRONMENT.ROUTING.BASE_URL}consulting`,
    href_academy: `${ENVIRONMENT.ROUTING.BASE_URL}academy`,
    href_up: `${ENVIRONMENT.ROUTING.BASE_URL}up`,
    classNameLink: 'navbar-general-link'
}


export default Navbar