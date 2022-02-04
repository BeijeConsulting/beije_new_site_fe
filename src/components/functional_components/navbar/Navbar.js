import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";

// import redux
import { connect } from "react-redux";

// import constants
import { ENVIRONMENT } from "../../../utils/properties";

// import style
import './Navbar.css'

const Navbar = (props) => {

  return (
    <Row
      className={props.classNameRow}
    // ref={ref}
    >
      <Col className={`gsap-home-link navbar-link ${props.classNameCol}`}>
        <Link
          to={`${ENVIRONMENT.ROUTING.BASE_URL}consulting`}
          className={props.classNameLink}
        >
          CONSULTING
        </Link>
        {
          props.pageFocusDuck.page === 'consulting' &&
          <div className={'test-link-underline'}>

          </div>
        }

      </Col>
      <Col className={`gsap-home-link navbar-link ${props.classNameCol}`}>
        <Link
          to={`${ENVIRONMENT.ROUTING.BASE_URL}academy`}
          className={props.classNameLink}
        >
          BEIJE TALENT ACADEMY
        </Link>
        {
          props.pageFocusDuck.page === 'academy' &&
          <div className={'test-link-underline'}>
          </div>
        }
      </Col>
      <Col className={`gsap-home-link navbar-link ${props.classNameCol}`}>
        <Link
          to={`${ENVIRONMENT.ROUTING.BASE_URL}up`}
          className={props.classNameLink}
        >
          UP
        </Link>
        {
          props.pageFocusDuck.page === 'up' &&
          <div className={'test-link-underline-light'}>

          </div>
        }
      </Col>
    </Row>
  )
}

Navbar.defaultProps = {
  classNameRow: 'navbar-row navbar-row-top',
  classNameLink: 'navbar-general-link',
}

const mapStateToProps = state => (
  {
    pageFocusDuck: state.pageFocusDuck
  }
)


export default connect(mapStateToProps)(Navbar)