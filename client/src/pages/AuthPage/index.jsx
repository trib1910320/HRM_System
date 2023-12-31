import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate, useSearchParams } from 'react-router-dom';
import Cookies from 'universal-cookie';
import 'assets/styles/authPage.scss';
import logoHrm from 'assets/images/logo-app.jpg';
import Swal from 'sweetalert2';
import LoginForm from './components/LoginForm';
import ResetPasswordForm from './components/ResetPasswordForm';
import ForgotPasswordForm from 'pages/AuthPage/components/ForgotPasswordForm';
import authApi from 'api/authApi';
import { Col, Row } from 'antd';
import { toast } from 'react-toastify';
import jwtDecode from 'jwt-decode';

const cookies = new Cookies();

const checkExp = (tokenExp) => {
  const dateNow = new Date();
  return tokenExp > dateNow.getTime() / 1000;
};

function AuthPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [loadingLogin, setLoadingLogin] = useState(false);
  const [loadingForgot, setLoadingForgot] = useState(false);
  const [loadingReset, setLoadingReset] = useState(false);

  useEffect(() => {
    const checkLoggedIn = async () => {
      const accessToken = cookies.get('access_token');
      const refreshToken = cookies.get('refresh_token');

      if (accessToken) {
        const accessTokenExp = jwtDecode(accessToken).exp;
        if (checkExp(accessTokenExp)) {
          navigate('/');
        }
      }
      if (refreshToken) {
        const refreshTokenExp = jwtDecode(refreshToken).exp;
        if (checkExp(refreshTokenExp)) {
          navigate('/');
        }
      }
    };
    checkLoggedIn();
    return () => {};
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogin = async (values) => {
    try {
      setLoadingLogin(true);
      const response = await authApi.login(values);
      cookies.set('access_token', response.accessToken, { path: '/' });
      if (response.refreshToken) {
        cookies.set('refresh_token', response.refreshToken, { path: '/' });
      }
      setLoadingLogin(false);
      navigate('/');
    } catch (error) {
      toast.error(error);
      setLoadingLogin(false);
    }
  };

  const handleForgotPassword = async (values) => {
    try {
      setLoadingForgot(true);
      const response = await authApi.forgotPassword(values);
      Swal.fire({
        icon: 'success',
        title: response.message,
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: 'Back to Login',
        cancelButtonText: 'Done',
      }).then((result) => {
        setLoadingForgot(false);
        if (result.isConfirmed) {
          navigate('/auth/login');
        }
      });
    } catch (error) {
      toast.error(error);
      setLoadingForgot(false);
    }
  };

  const handleResetPassword = async (values) => {
    try {
      setLoadingReset(true);
      const token = searchParams.get('token');
      if (!token) {
        toast.error('Token not found');
        setLoadingReset(false);
        return;
      }
      const data = {
        newPassword: values.newPassword,
        token,
      };
      const response = await authApi.resetPassword(data);
      Swal.fire({
        icon: 'success',
        title: response.message,
        showConfirmButton: true,
        confirmButtonText: 'Back to Login',
      }).then((result) => {
        setLoadingReset(false);
        if (result.isConfirmed) {
          navigate('/auth/login');
        }
      });
    } catch (error) {
      toast.error(error);
      setLoadingReset(false);
    }
  };

  return (
    <>
      <div className="body-auth">
        <Row>
          <Col className="gutter-row" span={24}>
            <div className="logo">
              <img src={logoHrm} alt="logo" />
            </div>
          </Col>
          <Col className="gutter-row routes" span={24}>
            <Routes>
              <Route
                path="login"
                element={
                  <LoginForm onSubmit={handleLogin} loading={loadingLogin} />
                }
              />
              <Route
                path="forgot-password"
                element={
                  <ForgotPasswordForm
                    onSubmit={handleForgotPassword}
                    loading={loadingForgot}
                  />
                }
              />
              <Route
                path="reset-password"
                element={
                  <ResetPasswordForm
                    onSubmit={handleResetPassword}
                    loading={loadingReset}
                  />
                }
              />
            </Routes>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default AuthPage;
