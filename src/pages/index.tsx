import styles from '../styles/page.module.scss'
import { GetStaticProps } from 'next';
import { Col, ConfigProvider, Layout, Row, Button, Checkbox, Form, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import AuthPageHeader from '@/shared/components/login-page-header'
import Welcome from '@/shared/components/welcome-component'
import LoginForm from '@/shared/components/login-form';
// import { users } from './users';
const {Content} = Layout;
// interface Props {
//   user: users[];
// }

// export async function getStaticProps() {
//   const res = await fetch('./data.json');
//   const data: users[] = await res.json(); 
//   return {
//     props: {
//       user: data,
//     },
//   };
// };
// const Home = ({ user }: Props) => {

const Home = () => {
  const [mounted,setMounted]=useState(false);
  useEffect(()=>setMounted(true),[])
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  // if (!user) {
  //   return <div>Loading...</div>;
  // }
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  return (
    <main className={styles.main}>
      {/* <ul>
        {user.map((users) => (
          <li key={users.id}>
            {users.email}
          </li>
        ))}
      </ul> */}
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
      {/* {
        props.data.map(data=>(
          <div key={data.id}>
            <h1>{data.name}</h1>
          </div>
        ))
      } */}
    </main>

  )
}
// Home.getInitialProps = async function()
// {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   const data = await res.json();
//   return{
//     data
//   }
// }

export default Home;