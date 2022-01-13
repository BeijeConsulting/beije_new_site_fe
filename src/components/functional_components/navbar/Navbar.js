import React, { useRef, useEffect } from "react";
import { Row, Col, Typography } from "antd";
const { Link } = Typography;

//import gsap
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

//import constants
import { ENVIRONMENT } from "../../../utils/properties";

//import style
import './Navbar.css'

const Navbar = (props) => {

    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;

        const singleLink = element.querySelectorAll('.gsap-home-link');
        console.log('element home link', element);
        console.log('link', singleLink);

        const t1 = gsap.timeline({
            scrollTrigger: {
                trigger: element,
                start: 'top 75%',
            }
        })

        t1.from(singleLink, { opacity: 0, stagger: 0.5, duration: 0.5, ease: 'power2.in' })



    }, [])

    //GSAP
    gsap.registerPlugin(ScrollTrigger);

    return (
        <Row
            className={props.classNameRow}
            ref={ref}
        >
            <Col className={`gsap-home-link ${props.classNameCol}`}>

                <Link
                    href={props.href_consulting}
                    type={props.type}
                    className={props.classNameLink}>
                    CONSULTING
                </Link>
            </Col>
            <Col className={`gsap-home-link ${props.classNameCol}`}>
                <Link
                    href={props.href_academy}
                    type={props.type}
                    className={props.classNameLink}>
                    TALENT ACADEMY
                </Link>
            </Col>
            <Col className={`gsap-home-link ${props.classNameCol}`}>
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
    classNameLink: 'navbar-general-link',
}


export default Navbar