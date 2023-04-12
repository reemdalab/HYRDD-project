import { Button , Layout, Menu, } from 'antd';
import styles from '@/styles/job.module.scss'
import {  useEffect, useState } from 'react';
import { LeftOutlined, RightOutlined, MenuOutlined } from '@ant-design/icons';
import JobContent from './content';
import MyCard from '@/shared/components/cards';
import { NextPage } from 'next';
const { Sider, Content } = Layout;
import { useMediaQuery } from '@material-ui/core';

interface Props {
    children: React.ReactNode;
    mycard: MyCard[];
}

const Sidebar: NextPage<Props> = ({ children, mycard }) => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const [mobileCollapsed, setMobileCollapsed] = useState<boolean>(true);
    const [collapsed, setCollapsed] = useState<boolean>(true);
    const toggle = () => {
        setCollapsed(!collapsed);
    };
    const mobileToggle = () => {
        setMobileCollapsed(mobileCollapsed);
    };

    useEffect(() => {
        const myElement = document.querySelector(`.${styles.active}`) as HTMLElement;
        if (myElement) {
            myElement.classList.add('active');
        }
    }, []);
    console.log("sidebar", mycard);
    return (
        <Layout className='sidebar'>
            <Sider width={180}
                trigger={null} collapsible collapsed={collapsed} className={styles.sider}>
                <div className="logo" />
                <Menu mode="inline" defaultSelectedKeys={['1']} selectedKeys={['2']}>
                    <Menu.Item className={styles.item} key="1" icon={<i className="ri-dashboard-3-fill"></i>}>
                        <span className={styles.itemSpan}>
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
                <Button className="site-layout-background" shape='circle' size='small'>
                    {isMobile ? (
                        <RightOutlined className="trigger" onClick={mobileToggle}  />
                     ) : (
                    collapsed ? (
                        <RightOutlined className="trigger" onClick={toggle} />
                    ) : (
                        <LeftOutlined className="trigger" onClick={toggle} />
                    )
                    )}
                </Button>
            <Layout className="site-layout">
                <Content>
                    <div className="site-layout-background" >
                        <JobContent cards={mycard} />
                        {children}
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}
export default Sidebar;


