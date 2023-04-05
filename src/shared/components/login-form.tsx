import { Form, Input, Checkbox, Button, ConfigProvider,Col } from "antd";
import styles from '../../styles/page.module.scss'
import Link from "next/link";

const LoginForm=()=>
{
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };
    return(
        <Col className={styles.colContent1} xs={24} sm={24} md={12} lg={12} xl={12}>
            <div className={styles.login} >
                <ConfigProvider
                    theme={{
                        token: {
                            colorPrimary: '#7b67fe',
                        },
                    }}
                >
                    <Form
                        layout="vertical"
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            label="Email"
                            name="username"
                            rules={[{ required: true, message: 'Required Field' }]}
                        >
                            <Input placeholder="you@example.com" />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Required Field' }]}
                        >
                            <div className={styles.wrapedDiv}>
                            <Input
                                type="password"
                                placeholder="Enter Your Password"
                            />
                                <Button
                                    type="link" className={styles.forgetPass}>
                                    Forget Password?</Button>
                            </div>
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <div className={styles.wrapedDiv}>
                                    <Checkbox className={styles.checkBox}>Remember me</Checkbox>
                                    <Button type="link" className={styles.resetPass}>Reset Multi-Factor Code?</Button>
                                </div>
                            </Form.Item>
                        </Form.Item>
                        <Form.Item>
                            <Button className={styles.sign} type="primary" htmlType="submit" href="/jobs"
                            ><span style={{fontSize:'13px'}}>Sign In</span></Button>
                        </Form.Item>
                    </Form>
                </ConfigProvider>
                <div className={styles.passDiv}>
                 
                    {/* <Link className={styles.forgetPass} href={'/'}>Register here!</Link> */}

                </div>
            </div>
        </Col>
    )
}
export default LoginForm;