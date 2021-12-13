import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Form, Input, Checkbox, Row, Col } from 'antd';

//import style
import 'antd/dist/antd.css';
import './CustomForm.css'

//import components
import CustomButton from "../../functional_components/Button/CustomButton";


const CustomForm = (props) => {
    const formRef = useRef()

    const [state, setState] = useState({
        nameError: false,
        emailError: false,
        municipalityError: false,
        provinceError: false,
        agreementError: false
    })

    const { t } = useTranslation()

    const onFinish = (values) => {
        formRef.current.resetFields();
    };

    const validateMessages = {
        required: t('formValidation.required_msg'),
        types: {
            email: t('formValidation.not_valid_msg'),
        }
    };
    return (
        <Form
            ref={formRef}
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
            className='form-container'
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
            <Form.Item
                name={["info_message", "name"]}
                rules={[
                    { required: true }
                ]}
            >
                <Input
                    name={'name'}
                    placeholder={t('home.fourthSection.placeholder.name')}
                    className='form-input form-input-alert'
                />

            </Form.Item>

            <Form.Item
                name={["info_message", "email"]}
                rules={[
                    {
                        type: "email",
                        required: true
                    }
                ]}
            >
                <Input
                    placeholder={'Email*'}
                    className='form-input'
                />
            </Form.Item>
            <Row>
                <Col xs={0} md={24} lg={12}>
                    <Form.Item
                        name={["info_message", "address"]}
                    >
                        <Input
                            placeholder={t('home.fourthSection.placeholder.address')}
                            className='form-input'
                        />
                    </Form.Item>
                </Col>
                <Col xs={0} md={0} lg={1} />
                <Col xs={0} md={16} lg={6}>
                    <Form.Item

                        name={["info_message", "municipality"]}
                        rules={[
                            { required: true }
                        ]}
                    >
                        <Input
                            placeholder={t('home.fourthSection.placeholder.municipality')}
                            className='form-input'
                        />
                    </Form.Item>
                </Col>
                <Col xs={0} md={1} lg={1} />
                <Col xs={0} md={7} lg={4}>
                    <Form.Item

                        name={["info_message", "province"]}
                        rules={[
                            { required: true }
                        ]}
                    >
                        <Input
                            placeholder={t('home.fourthSection.placeholder.province')}
                            className='form-input'
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Form.Item
                name={["info_message", "message"]}
            >
                <Input.TextArea
                    placeholder={t('home.fourthSection.placeholder.message')}
                    className='form-input form-text-area'
                />
            </Form.Item>

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
                    >
                        <Checkbox
                            className='form-input-condition'
                        >
                            {t('home.fourthSection.agreement')}
                        </Checkbox>
                    </Form.Item>
                </Col>
            </Row>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                <CustomButton
                    content={t('home.fourthSection.send_btn')}
                    htmlType='submit'
                    type={'form-btn'}
                />
            </div>
        </Form >
    )
}

export default CustomForm