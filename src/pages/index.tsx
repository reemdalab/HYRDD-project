import styles from '../styles/page.module.scss'
import { GetStaticProps } from 'next';
import {  Layout, Row} from 'antd';
import React, { useEffect, useState } from 'react';
import AuthPageHeader from '@/shared/components/login-page-header'
import Welcome from '@/shared/components/welcome-component'
import LoginForm from '@/shared/components/login-form';
const {Content} = Layout;
const Home = () => {
  const [mounted,setMounted]=useState(false);
  useEffect(()=>setMounted(true),[])
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  return (
    <main className={styles.main}>
      <Layout>
        <div style={{visibility:!mounted?'hidden':'visible'}}>
          <AuthPageHeader />
        <Content className={styles.content} >
            <Row className={styles.displayRow}>
           <Welcome/>
              <LoginForm/>
          </Row>
        </Content>
        </div>
      </Layout>
    </main>

  )
}

export default Home;