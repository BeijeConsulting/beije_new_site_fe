import React from "react";
import { Row, Col, Typography } from "antd";
const { Link } = Typography;

import './Navbar.css'

import { navbar } from "../../../utils/properties";

const Navbar = (props) => {

    const getCurrentClassName = () => {
        let currentClassName = null;
        switch (props.classNameLink) {
            case "navbar-home-link":
                currentClassName = "navbar-home-link"
                break;
            case "nav-general":
                currentClassName = "navbar-general-link"
                break;
            case "nav-light":
                currentClassName = "navbar-link-light"
                break;
            default:
                currentClassName = "navbar-general-link"
                break;
        }
        return currentClassName;
    }

    return (
        <Row className={props.classNameRow}>
            <Col className={props.classNameCol}>
                <Link
                    href={props.href_consulting}
                    type={props.type}
                    className={getCurrentClassName()}
                >
                    CONSULTING
                </Link>
            </Col>
            <Col className={props.classNameCol}>
                <Link
                    href={props.href_academy}
                    type={props.type}
                    className={getCurrentClassName()}
                >
                    ACADEMY
                </Link>
            </Col>
            <Col className={props.classNameCol}>
                <Link
                    href={props.href_up}
                    type={props.type}
                    className={getCurrentClassName()}
                >
                    UP
                </Link>
            </Col>
        </Row>
    )
}

Navbar.defaultProps = {
    classNameRow: 'navbar-row',
}

export default Navbar