import React, { useState } from "react";
import { useFormik } from 'formik';
import { Input, Row, Col } from "antd";
import { LoginOutlined } from '@ant-design/icons';
import {  useNavigate  } from "react-router-dom";
import { useDispatch } from "react-redux";
import { doLogin } from '../../redux/actions/actions';
import Button from "../../components/hooks_components/Button/CustomButton";
import './login.css';
import { useTranslation } from 'react-i18next';

const Login = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const formikLogin = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    onSubmit: (values) => {
      sendLogin(values);
    }
  });
  const [isLoading, setIsLoading] = useState(false);

  const sendLogin = async (values) => {
    try {
      setIsLoading(true);
      const loginData = await doLogin(dispatch, values);
      if (!loginData.error) {
        navigate('/');
      }
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  };

  return (
    <Row className="login_container" type="flex" justify="center" align="middle">
      <Col className="login_form_container">
        <div className="login_form_container_rows">
          <div>
            <Row className="login_form_input_margin">
              <label htmlFor="username">{t('general.Username')}</label>
              <Input
                id="username"
                name="username"
                placeholder={t('general.Username')}
                onChange={formikLogin.handleChange}
                onBlur={formikLogin.handleBlur}
                value={formikLogin.values.username}
              />
            </Row>
            <Row className="login_form_input_margin">
              <label htmlFor="password">{t('general.Password')}</label>
              <Input.Password
                id="password"
                name="password"
                placeholder={t('general.Password')}
                onChange={formikLogin.handleChange}
                onBlur={formikLogin.handleBlur}
                value={formikLogin.values.password}
              />
            </Row>
          </div>
          <Row type="flex" justify="center" align="middle">
            <Button
              type="primary"
              currentIcon={<LoginOutlined className="icon-medium"/>}
              isLoading={isLoading}
              clickCallback={formikLogin.submitForm}
              currentSize="large"
            />
          </Row>
        </div>
      </Col>
    </Row>
  );
}

export default Login;
