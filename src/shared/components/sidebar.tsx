import { Button, ConfigProvider, Layout, Menu } from 'antd';
import styles from '../../styles/job.module.scss'
import 'remixicon/fonts/remixicon.css'
import { useEffect, useState } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import JobContent from '../components/content';
const { Sider, Content } = Layout;
interface Props {
    children: React.ReactNode;
}
const Sidebar = ({ children }: Props) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const toggle = () => {
        setCollapsed(!collapsed);
    };

 useEffect(() => {
        const myElement = document.querySelector(`.${styles.active}`) as HTMLElement;
        if (myElement) {
            myElement.classList.add('active');
        }
    }, []);

    return(
        <Layout>
        <Sider width={180}
            trigger={null} collapsible collapsed={collapsed} className={styles.sider}>
            <div className="logo" />
            <Menu mode="inline" defaultSelectedKeys={['1']} selectedKeys={['2']}>
                <Menu.Item className={styles.item} key="1" icon={<i className="ri-dashboard-3-fill"></i>}>
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
                    <Menu.Item className={styles.item} key="6" icon={<i className="ri-settings-fill"></i>}>
                        <span>
                            Settings
                        </span>
                    </Menu.Item>
            </Menu>
            
        </Sider>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: '#7b67fe',
                    },
                }}
            >
            <Button className="site-layout-background" shape='circle' size='small'>
                {collapsed ? (
                    <RightOutlined className="trigger" onClick={toggle} />
                ) : (
                    <LeftOutlined className="trigger" onClick={toggle} />
                )}
            </Button>
            </ConfigProvider>
        <Layout className="site-layout">
                <Content>
                    <div className="site-layout-background" >
                   <JobContent/>
                   {children}
                    </div>
                </Content>
            </Layout>
         </Layout>
    )
}
export default Sidebar;