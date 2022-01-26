import React, { useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslation } from "react-i18next";
import { Form, Input, Checkbox, Row, Col } from 'antd';
import { useFormik } from "formik";

//import gsap
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

//import style
import 'antd/dist/antd.css';
import './CustomForm.css'

//import components
import CustomButton from "../../functional_components/Button/CustomButton";
import { googleReCaptchaKey } from "../../../utils/properties";


const CustomForm = (props) => {
  const containerRef = useRef(null)
  const [state, setState] = useState({
    captchaCheck: false,
    captcha: undefined,
    captchaValue: ''
  });
  const { t } = useTranslation()


  //GSAP
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {

    const element = containerRef.current;

    const formContainer = element.querySelector('.form-container-gsap')
    const formInput = element.querySelectorAll('.form-input-gsap');

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: formContainer,
        start: 'top 75%',
      }
    })

    t1.from(formInput, { opacity: 0, stagger: 0.3, duration: 0.5, ease: 'power2.in' })
  }, [])

  const checkboxAgreementChange = (value) => {
    formikContacts.setFieldValue('agreement', value.target.checked);
  }

  const reCaptchaChange = (value) => {
    let captchaCheck = false;
    if (value !== null) {
      captchaCheck = true;
    }
    setState({
      ...state,
      captchaCheck,
      captchaValue: value
    });
  }

  const formikContacts = useFormik({
    initialValues: {
      name: '',
      email: '',
      town: '',
      message: '',
      agreement: false
    },
    validate: values => {
      let errors = {};
      if (!values.name) {
        errors.name = 'Required!'
      }
      if (!values.email) {
        errors.email = 'Required!'
      }
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Mail invalid!'
      }
      if (!values.town) {
        errors.town = 'Required!'
      }
      if (!values.agreement) {
        errors.agreement = 'Required!'
      }
      return errors;
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log('Send Form', props.origin, values, state.captchaValue);
      formikContacts.resetForm();
      state.captcha.reset();
    }
  });

  return (
    <div
      ref={containerRef}
    >
      <Form
        name="nest-messages"
        className='form-container form-container-gsap'
      >
        {
          props.nameSurname === true &&
          <div className="form-input-gsap">
            <Input
              id="name"
              name="name"
              value={formikContacts.values.name}
              placeholder={t('home.fourthSection.placeholder.name')}
              className='form-input form-input-alert'
              onChange={formikContacts.handleChange}
              onBlur={formikContacts.handleBlur}
            />
            <span>{formikContacts.errors.name && formikContacts.touched.name ? 'error name' : ''}</span>
          </div>
        }

        {props.moreInfo &&
          <Row>
            <Col xs={12} md={15}>
              <div className="form-input-gsap">
                <Input
                  id="email"
                  name="email"
                  value={formikContacts.values.email}
                  placeholder={t('home.fourthSection.placeholder.email')}
                  className='form-input'
                  onChange={formikContacts.handleChange}
                  onBlur={formikContacts.handleBlur}
                />
                <span>{formikContacts.errors.email && formikContacts.touched.email ? 'error email' : ''}</span>
              </div>
            </Col>
            <Col xs={1} md={1} />
            <Col xs={11} md={8}>
              <div className="form-input-gsap">
                <Input
                  id="town"
                  name="town"
                  value={formikContacts.values.town}
                  placeholder={t('home.fourthSection.placeholder.town')}
                  className='form-input'
                  onChange={formikContacts.handleChange}
                  onBlur={formikContacts.handleBlur}
                />
                <span>{formikContacts.errors.town && formikContacts.touched.town ? 'error town' : ''}</span>
              </div>
            </Col>
          </Row>
        }
        {
          props.message === true &&
          <div className="form-input-gsap">
            <Input.TextArea
              id="message"
              name="message"
              value={formikContacts.values.message}
              placeholder={t('home.fourthSection.placeholder.message')}
              className='form-input'
              onChange={formikContacts.handleChange}
              onBlur={formikContacts.handleBlur}
            />
          </div>
        }

        {
          props.agreement === true &&
          <Row>
            <Col xs={0} md={24}>
              <div className="mb-1em">
                <Checkbox
                  id="agreement"
                  name="agreement"
                  className={`form-input-condition ${props.classNameCheckbox}`}
                  onChange={checkboxAgreementChange}
                  checked={formikContacts.values.agreement}
                >
                  {t('home.fourthSection.agreement')}
                </Checkbox>
                <span>{formikContacts.errors.agreement && formikContacts.touched.agreement ? 'error agreement' : ''}</span>
              </div>
            </Col>
          </Row>
        }
        <div className="recaptcha">
          <ReCAPTCHA
            ref={e => (state.captcha = e)}
            sitekey={googleReCaptchaKey}
            onChange={reCaptchaChange}
            theme="dark"
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: props.positionBtn, width: '100%' }} className='form-input-gsap'>
          <CustomButton
            content={t('home.fourthSection.send_btn')}
            type={props.typeBtn}
            clickCallback={formikContacts.submitForm}
            isDisabled={!(state.captchaCheck && formikContacts.isValid && formikContacts.dirty)}
          />
        </div>
      </Form >
    </div>
  )
}

CustomForm.defaultProps = {
  nameSurname: true,
  moreInfo: true,
  message: true,
  agreement: true,
  positionBtn: 'center',
  classNameTextArea: 'form-text-area',
  typeBtn: 'form-btn',
  origin: 'home'
}

export default CustomForm