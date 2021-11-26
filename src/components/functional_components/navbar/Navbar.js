import React from "react";
import { Row, Col, Typography } from "antd";
const { Link } = Typography;

import './Navbar.css'

import { navbar } from "../../../utils/properties";

const Navbar = (props) => {

    const printNavbar = (item, key) => {
        return (
            <Col
                key={key}
                xs={item.xs}
                sm={item.sm}
                md={item.md}
                lg={item.lg}
                className={item.classNameCol}>
                <Link
                    href={item.href}
                    className={item.classNameLink}
                >
                    {item.text}
                </Link>
            </Col>
        )
    }

    return (
        <Row className={props.classNameRow}>
            {props.navbarList.map(printNavbar)}
        </Row>
    )
}

Navbar.defaultProps = {
    classNameRow: 'navbar-row',
    navbarList: navbar
}

export default Navbar