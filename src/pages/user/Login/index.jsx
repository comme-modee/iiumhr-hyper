import { Form, PasswordInput, TextInput } from '@/components';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import AccountWrapper from '../AccountWrapper';
import useLogin, { loginFormSchema } from './useLogin';
import Spinner from '../../../components/Spinner';
import useGetUserRole from '@/common/api/useGetUserRole';
import { useEffect } from 'react';
import useErrorAni from '@/hooks/useErrorAni';

export default function Login() {
  const { t } = useTranslation();
  const userRole = useGetUserRole();
  const navigate = useNavigate();
  const { loading, login, isAuthenticated } = useLogin();

  useEffect(()=>{
    console.log("=====", "userRole:", userRole, "인증여부:", isAuthenticated)
    if(isAuthenticated) {
      if(userRole === 'ADMIN') {
        navigate('/admin')
      } 
    }
  },[userRole, isAuthenticated])

  const { errorAni, handleErrorAni } = useErrorAni();

  return (
    <>
      <AccountWrapper>

        <div className="text-center w-75 m-auto">
          <h4 className="text-dark-50 text-center mt-0 fw-bold">{t('로그인')}</h4>
        </div>

        <Form
          onSubmit={login}
          schema={loginFormSchema}
          // defaultValues={{ username: 'admin', password: 'zxcv1234' }}
        >
          <TextInput
            name="username"
            label={t('ID')}
            type="text"
            placeholder={t('아이디')}
            className={`${errorAni}`}
          />
          
          <PasswordInput
            label={t('Password')}
            name="password"
            placeholder={t('비밀번호')}
            className={`${errorAni}`}
          >
            {/* <Link to="/account/recover-password" className="text-muted float-end">
              <small>Forgot your password?</small>
            </Link> */}
          </PasswordInput>
          
          <div className="mb-3 text-center">
            {loading ?
              <Spinner color='primary' size='sm' className='m-auto'/>
              :
              <Button variant="primary" type="submit" onClick={() => handleErrorAni()}>
                {t('로그인')}
              </Button>
            }
            
          </div>
        </Form>
      </AccountWrapper>
    </>
  );
}
