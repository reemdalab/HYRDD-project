import styles from '../styles/job.module.scss'
import Image from 'next/image'
import { BellOutlined, QuestionCircleOutlined, CaretDownOutlined } from '@ant-design/icons'
import logo from '../images/bloovo.jpg'
import person from '../images/person.png'
import { Col, Divider, Dropdown, Layout, Menu, Row, theme, Button, MenuProps } from 'antd';
import Headers from '@/shared/components/header'
import { useEffect, useState } from 'react'

const { Header, Content, Sider } = Layout;
export default function Jobs() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), [])
    return (
        <main>
            <Layout className={styles.layout}>
                <div style={{ visibility: !mounted ? 'hidden' : 'visible' }}>
                    <Headers />
                    <Content className={styles.content}>
                        <Layout>
                            <Sider className={styles.sider} width={180} >
                                <Menu
                                    mode="inline"
                                    defaultSelectedKeys={['1']}
                                    defaultOpenKeys={['sub1']}
                                    style={{ height: '100%' }}
                                />
                            </Sider>

                            <Content style={{ padding: '0 24px', minHeight: 280 }}>Content</Content>
                        </Layout>
                    </Content>
                </div>
            </Layout>
        </main>
    )
}