import { useState } from 'react';
import { Button, Layout, Menu } from 'antd';
import styles from '../styles/job.module.scss';
import 'remixicon/fonts/remixicon.css'
import JobContent  from '../shared/components/content';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

interface Props {
    children: React.ReactNode;
}

const CustomLayout=({ children }: Props)=> {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const toggle = () => {
        setCollapsed(!collapsed);
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider trigger={null} collapsible collapsed={collapsed} className={styles.sider} >
                <div className="logo" />
                <Menu  mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item className={styles.item}  key="1" icon={<i className="ri-dashboard-3-fill"></i>}>
                        <span>
                            Dashboard
                        </span>
                    </Menu.Item>
                    <Menu.Item className={styles.item} key="2" icon={<i className="ri-briefcase-4-fill" ></i>}>
                        <span>Jobs</span>
                    </Menu.Item>
                    <Menu.Item className={styles.item} key="3" icon={<i className="ri-folder-3-fill"></i>}>
                        <span>
                            Folders
                        </span>
                    </Menu.Item>
                    <Menu.Item className={styles.item} key="4" icon={<i className="ri-building-2-fill"></i>}>
                        <span>
                            Agencies
                        </span>
                    </Menu.Item>
                    <Menu.Item className={styles.item} key="5" icon={<i className="ri-user-2-fill" ></i>}>
                        <span>
                            Candidates Search
                        </span>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Button className="site-layout-background">
                {collapsed ? (
                    <RightOutlined  className="trigger" onClick={toggle} />
                ) : (
                    <LeftOutlined  className="trigger" onClick={toggle} />
                )}
            </Button>
            <Layout className="site-layout">
            
                <Content>
                  
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360  ,backgroundColor:'red'}}>
                   <JobContent/>
                   {children}
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
}
export default CustomLayout;