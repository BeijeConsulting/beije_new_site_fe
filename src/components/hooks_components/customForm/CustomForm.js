import React, { useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslation } from "react-i18next";
import { Form, Input, Checkbox, Row, Col } from 'antd';
import { useFormik } from "formik";

//import gsap
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

//import style
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

  // const checkboxAgreementChange = (value) => {
  //   // formikContacts.setFieldValue('agreement', value.target.checked);
  //   formikContacts.handleChange(value);
  //   formikContacts.handleBlur(value)
  // }

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
        errors.name = 'formValidation.required_msg'
      }
      if (!values.email) {
        errors.email = 'formValidation.required_msg'
      }
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'formValidation.not_valid_msg'
      }
      if (!values.town) {
        errors.town = 'formValidation.required_msg'
      }
      if (values.agreement === false) {
        errors.agreement = 'formValidation.agreement'
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
          <div className="form-input-gsap form-input-container">
            <Input
              id="name"
              name="name"
              value={formikContacts.values.name}
              placeholder={t('home.fourthSection.placeholder.name')}
              className={`form-input ${formikContacts.errors.name && formikContacts.touched.name ? 'ant-form-item-has-error' : ''}`}
              onChange={formikContacts.handleChange}
              onBlur={formikContacts.handleBlur}
            />
            <span className="input-error" >{formikContacts.errors.name && formikContacts.touched.name ? t(`${formikContacts.errors.name}`) : ''}</span>
          </div>
        }

        {props.moreInfo &&
          <Row>
            <Col xs={12} md={15}>
              <div className="form-input-gsap form-input-container">
                <Input
                  id="email"
                  name="email"
                  value={formikContacts.values.email}
                  placeholder={t('home.fourthSection.placeholder.email')}
                  className={`form-input ${formikContacts.errors.email && formikContacts.touched.email ? 'ant-form-item-has-error' : ''}`}
                  onChange={formikContacts.handleChange}
                  onBlur={formikContacts.handleBlur}
                />
                <span className="input-error" >{formikContacts.errors.email && formikContacts.touched.email ? t(`${formikContacts.errors.email}`) : ''}</span>
              </div>
            </Col>
            <Col xs={1} md={1} />
            <Col xs={11} md={8}>
              <div className="form-input-gsap form-input-container">
                <Input
                  id="town"
                  name="town"
                  value={formikContacts.values.town}
                  placeholder={t('home.fourthSection.placeholder.town')}
                  className={`form-input ${formikContacts.errors.town && formikContacts.touched.town ? 'ant-form-item-has-error' : ''}`}
                  onChange={formikContacts.handleChange}
                  onBlur={formikContacts.handleBlur}
                />
                <span className="input-error" >{formikContacts.errors.town && formikContacts.touched.town ? t(`${formikContacts.errors.town}`) : ''}</span>
              </div>
            </Col>
          </Row>
        }
        {
          props.message === true &&
          <div className="form-input-gsap form-input-container">
            <Input.TextArea
              id="message"
              name="message"
              value={formikContacts.values.message}
              placeholder={t('home.fourthSection.placeholder.message')}
              className="form-input"
              onChange={formikContacts.handleChange}
              onBlur={formikContacts.handleBlur}
              autoSize={{ minRows: 4, maxRows: 4 }}
            />
          </div>
        }

        {
          props.agreement === true &&
          <Row>
            <Col xs={24} md={24}>
              <div className="mb-1em mt-1em form-input-gsap agreement-checkbox">
                <Checkbox
                  id="agreement"
                  name="agreement"
                  className={`form-input-condition ${props.classNameCheckbox}`}
                  onChange={formikContacts.handleChange("agreement")}
                  onBlur={(e) => formikContacts.handleBlur(e)} // it is necessary for "touched" formik event
                  checked={formikContacts.values.agreement}
                >
                  {t('home.fourthSection.agreement')}
                </Checkbox>
                <br />
                <span className="input-error" >{formikContacts.errors.agreement && formikContacts.touched.agreement ? t(`${formikContacts.errors.agreement}`) : ''}</span>
              </div>
            </Col>
          </Row>
        }
        <div className="form-input-gsap recaptcha">
          <ReCAPTCHA
            ref={e => (state.captcha = e)}
            sitekey={googleReCaptchaKey}
            onChange={reCaptchaChange}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: props.positionBtn, width: '100%' }} className='mt-1em form-input-gsap'>
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