import { Form, Input, Checkbox, Button, ConfigProvider, Col, Space, Row, Typography } from "antd";
import styles from '@/styles/page.module.scss'
import users from "@/../data.json";
import Users from "./users";
import { useState } from "react";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";
import Link from "next/link";
const { Text } = Typography;

const LoginForm = () => {
    const [username, setUsername] = useState("Admin");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [id, setId] = useState("");

    const intl = useIntl();
    const emailLabel = intl.formatMessage({ id: "email" });
    const passwordLabel = intl.formatMessage({ id: "password" });

    const router = useRouter();
    const onFinish = (values: any) => {
        const user: Users | undefined = users.users.find((user: Users) => user.email === email)

        if (!user) {
            alert('User not found')
            console.log("User not found")
        } else if (user.password !== password) {
            alert('Incorrect password')
            console.log("Incorrect password")

        } else {
            router.push({
                pathname: '/jobs',
                query: {
                    username: user.username,
                    email: user.email,
                    id: user.id
                }
            });
        }
    }
    return (

        <Space direction="vertical" className={styles.login} >
            <Form
                layout="vertical"
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="emil"
                    rules={[{ required: true, message: 'Required Field' }]}
                >

                <Space direction="vertical" className='password'>
                        <Row justify="space-between">
                            <Text><FormattedMessage id="email" /><Text style={{ color: 'red' }}> *</Text></Text>
                        </Row>
                    <Input placeholder="you@example.com"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Space> 
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Required Field' }]}
                >
                    <Space direction="vertical" className='password'>
                        <Row justify="space-between">
                            <Text><FormattedMessage id="password" /><Text style={{color:'red'}}> *</Text></Text>
                            <Link href="/auth/forget-password" className='link'>
                                <FormattedMessage id="forget"/>
                            </Link>
                        </Row>

                        <Input.Password
                            key="password"
                            name="password"
                            placeholder="enter password"
                            visibilityToggle={false}
                            onChange={(e) => setPassword(e.target.value)}

                        />
                    </Space>
                </Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <div className={styles.wrappedDiv}>
                        <Checkbox className={styles.checkBox} defaultChecked={true} 
                        ><FormattedMessage id="checkbox" /></Checkbox>
                        <Button type="link" className={styles.resetPass}><FormattedMessage id="reset" /></Button>
                    </div>
                </Form.Item>

                <Form.Item>
                    {error && <div>{error}</div>}
                    <Button className={styles.sign} type="primary" htmlType="submit"

                    ><span style={{ fontSize: '13px' }}><FormattedMessage id="Signin" /></span></Button>
                </Form.Item>
            </Form>
        </Space>
    )
}
export default LoginForm;