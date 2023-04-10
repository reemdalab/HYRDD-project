import styles from '../styles/page.module.scss'
import {Col, Layout, Row} from 'antd';
import React, { useEffect, useReducer, useState } from 'react';
import AuthPageHeader from '@/shared/components/login-page-header'
import Welcome from '@/shared/components/welcome-component'
import LoginForm from '@/shared/components/login-form';

const {Content} = Layout;
interface Props {
  dir: string;
}

const Home = ({dir}:Props) => {
   const [mounted,setMounted]=useState(false);
  useEffect(()=>setMounted(true),[])
  
  return (
    <main dir={dir} className={styles.main} >
      <Layout style={{ visibility: !mounted ? 'hidden' : 'visible' }}>
        <AuthPageHeader dir={dir} />
        <Content className={styles.content} >
          <Row className={styles.displayRow}>
            <Col className={styles.colContent} xs={24} sm={24} md={12} lg={12} xl={12} >
            <Welcome dir={dir}/>
            </Col>
            <Col className={styles.colContent1} xs={24} sm={24} md={12} lg={12} xl={12}>
            <LoginForm/>
            </Col>
          </Row>
        </Content>
      </Layout>
    </main>

  )
}

export default Home;