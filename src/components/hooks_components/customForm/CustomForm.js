import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Form, Input, Checkbox, Row, Col } from 'antd';

//import gsap
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

//import style
import 'antd/dist/antd.css';
import './CustomForm.css'

//import components
import CustomButton from "../../functional_components/Button/CustomButton";


const CustomForm = (props) => {
    const formRef = useRef();
    const containerRef = useRef(null)

    const { t } = useTranslation()


    // to see the values pass "values" as parameter of this function
    const onFinish = () => {
        formRef.current.resetFields();
    };

    const validateMessages = {
        required: t('formValidation.required_msg'),
        types: {
            email: t('formValidation.not_valid_msg'),
        }
    };

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

    return (
        <div
            ref={containerRef}
        >
            <Form
                ref={formRef}
                name="nest-messages"
                onFinish={onFinish}
                validateMessages={validateMessages}
                className='form-container form-container-gsap'
                initialValues={{
                    info_message:
                    {
                        name: "",
                        email: "",
                        address: "",
                        municipality: "",
                        province: "",
                        message: ""
                    }
                }}
            >
                {
                    props.nameSurname === true &&
                    <Form.Item
                        name={["info_message", "name"]}
                        rules={[
                            { required: true }
                        ]}
                        className="form-input-gsap"
                    >
                        <Input
                            name={'name'}
                            placeholder={t('home.fourthSection.placeholder.name')}
                            className='form-input form-input-alert'
                        />

                    </Form.Item>

                }

                {
                    props.email === true &&
                    <Form.Item
                        name={["info_message", "email"]}
                        rules={[
                            {
                                type: "email",
                                required: true
                            }
                        ]}
                        className="form-input-gsap"
                    >
                        <Input
                            placeholder={'Email*'}
                            className='form-input'
                        />
                    </Form.Item>
                }

                {props.moreInfo === true &&
                    <Row>
                        <Col xs={0} md={11}>
                            <Form.Item
                                name={["info_message", "address"]}
                                className="form-input-gsap"
                            >
                                <Input
                                    placeholder={t('home.fourthSection.placeholder.address')}
                                    className='form-input'
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={0} md={1} />
                        <Col xs={0} md={6}>
                            <Form.Item

                                name={["info_message", "municipality"]}
                                rules={[
                                    { required: true }
                                ]}
                                className="form-input-gsap"
                            >
                                <Input
                                    placeholder={t('home.fourthSection.placeholder.municipality')}
                                    className='form-input'
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={0} md={1} />
                        <Col xs={0} md={5}>
                            <Form.Item

                                name={["info_message", "province"]}
                                rules={[
                                    { required: true }
                                ]}
                                className="form-input-gsap"
                            >
                                <Input
                                    placeholder={t('home.fourthSection.placeholder.province')}
                                    className='form-input'
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                }

                {
                    props.message === true &&
                    <Form.Item
                        name={["info_message", "message"]}
                        className="form-input-gsap"
                    >
                        <Input.TextArea
                            placeholder={t('home.fourthSection.placeholder.message')}
                            className={`form-input ${props.classNameTextArea}`}
                        />
                    </Form.Item>
                }

                {
                    props.agreement === true &&
                    <Row>
                        <Col xs={0} md={24}>
                            <Form.Item
                                name={["info_message", "agreement"]}
                                valuePropName="checked"
                                rules={[
                                    {
                                        validator: (_, value) =>
                                            value ? Promise.resolve() : Promise.reject(new Error(t('formValidation.agreement'))),
                                    },
                                ]}
                                className="form-input-gsap"
                            >
                                <Checkbox
                                    className='form-input-condition'
                                >
                                    {t('home.fourthSection.agreement')}
                                </Checkbox>
                            </Form.Item>
                        </Col>
                    </Row>
                }
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: props.positionBtn, width: '100%' }} className='form-input-gsap'>
                    <CustomButton
                        content={t('home.fourthSection.send_btn')}
                        htmlType='submit'
                        type={props.typeBtn}
                    />
                </div>
            </Form >
        </div>
    )
}

CustomForm.defaultProps = {
    nameSurname: true,
    email: true,
    moreInfo: true,
    message: true,
    agreement: true,
    positionBtn: 'center',
    classNameTextArea: 'form-text-area',
    typeBtn: 'form-btn'
}

export default CustomForm