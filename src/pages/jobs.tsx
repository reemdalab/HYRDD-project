import styles from '../styles/job.module.scss';
import { Button, Card, Col, ConfigProvider, Divider, Input, Layout, Row, Space } from 'antd';
import Headers from '@/shared/components/header'
import { useContext, useEffect, useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import { LeftOutlined, PlusOutlined, SearchOutlined, ReloadOutlined, FilterOutlined } from '@ant-design/icons';
import { SidebarContext } from '@/shared/components/siderContext';
import Sidebar from '@/shared/components/sidebar';
import Search from 'antd/es/transfer/search';
import Link from 'next/link';
const { Content } = Layout;

export default function Jobs() {
    const { isCollapsedSideBar, toogleSiderCollapseHandler } = useContext(SidebarContext);
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), [])
    const { Search } = Input;
    const onSearch = (value: string) => console.log(value);
    useEffect(() => {
        const myElement = document.querySelector(`.${styles.sidebarItems}`) as HTMLElement;
        if (myElement) {
            myElement.classList.add('sidebarItems');
        }
    }, []);
    return (
        <main >
            <Layout className={styles.layout}>
                <div style={{ visibility: !mounted ? 'hidden' : 'visible' }}>
                    <Headers />
                    <Content className={styles.content}>
                        <Layout>
                            <Sidebar />
                            <Button shape="circle" size='small' className={styles.arrow}>
                                <LeftOutlined />
                            </Button>
                            <Content className={styles.subContent}>
                                <div className={styles.list}>
                                    <ul>
                                        <li className={styles.sidebarItems}>
                                           <Link href={'/jobs'}>
                                                <span>Budget Vacancies</span>
                                           </Link> 
                                        </li>
                                        <Divider className={styles.divider} />
                                        <li>
                                            <span>Jobs Requisitions</span>
                                        </li>
                                        <Divider className={styles.divider} />
                                        <li>
                                            <span>Published Jobs</span>
                                        </li>
                                        <Divider className={styles.divider} />
                                        <li>
                                            <span>Interviews</span>
                                            <PlusOutlined className={styles.icon} />
                                        </li>
                                        <Divider className={styles.divider} />
                                        <li>
                                            <span>Shared Profiles</span>
                                        </li>
                                        <Divider className={styles.divider} />
                                        <li>
                                            <span>Shared Offers</span>
                                            <PlusOutlined className={styles.icon} />

                                        </li>
                                        <Divider className={styles.divider} />
                                        <li>
                                            <span>Shared Applicants</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className={styles.subSubContent}>
                                    <div className={styles.contentHeader}>
                                        <div className={styles.contentLeftSide}>
                                            <Input placeholder="  Search" className={styles.search} />
                                            <ConfigProvider
                                                theme={{
                                                    token: {
                                                        colorPrimary: '#7b67fe',
                                                    },
                                                }} >
                                                <Button icon={<SearchOutlined className={styles.btnIcon} />}
                                                    href="https://www.google.com" size='small'
                                                    className={styles.searchBtn} />
                                                <Button icon={<ReloadOutlined className={styles.btnIcon2} />} href="https://www.google.com" size='small'
                                                    className={styles.refreshBtn} ></Button>
                                                <Button className={styles.filter}
                                                    icon={<FilterOutlined className={styles.btnIcon2} />}
                                                    size='small'
                                                >
                                                    <span>
                                                        Filter
                                                    </span>
                                                </Button>
                                            </ConfigProvider>
                                        </div>
                                        <div className={styles.contentRightSide}>
                                            <Button className={styles.downloadBtn}
                                                size='small'
                                            >
                                                <i className="ri-download-line" ></i>
                                                <span>
                                                    Download Template
                                                </span>
                                            </Button>
                                            <Button className={styles.importBtn}
                                                size='small'
                                            >
                                                <i className="ri-upload-line"></i>
                                                <span>
                                                    Import Jobs
                                                </span>
                                            </Button>
                                            <Button className={styles.addBtn}
                                                size='small'
                                            >
                                                <i className="ri-add-circle-fill"></i>
                                                <span>
                                                    Add New job
                                                </span>
                                            </Button>
                                        </div>
                                    </div>
                                    <div className={styles.cards}>
                                        <Card title={<div>
                                            <span className={styles.span1}>
                                                #95:
                                            </span>
                                            <span
                                                className={styles.span2}>Sales Manager
                                            </span>
                                        </div>}
                                            bordered={false}
                                            extra={
                                                <div className={styles.buttons}>
                                                    <ConfigProvider
                                                        theme={{
                                                            token: {
                                                                colorPrimary: '#7b67fe',
                                                            },
                                                        }} >
                                                        <Button type="primary" className={styles.rqsBtn}><span>Request Job</span></Button>
                                                    </ConfigProvider>
                                                    <Button className={styles.iconsBtn} icon={<i className="ri-more-2-fill"></i>} />
                                                    <Button className={styles.iconsBtn} icon={<i className="ri-pencil-fill"></i>} />
                                                    <Button danger className={styles.iconsBtn} icon={<i className="ri-delete-bin-line"></i>} />

                                                </div>} >
                                            <Row className={styles.cardContent}>
                                                <Col lg={6} >
                                                    <div className={styles.cardLeftSide}>
                                                    <div>
                                                        <h5>
                                                            Requisition Type
                                                        </h5>
                                                        <span>
                                                         New vacancy
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <h5 className={styles.org}>
                                                           Organization Structure
                                                        </h5>
                                                        <span>
                                                            sadeq org
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <h5>
                                                          Units
                                                        </h5>
                                                        <span>
                                                         unit1,unit2
                                                        </span>
                                                    </div>
                                                    </div>
                                                    <Divider className={styles.divider}/>
                                                    <div className={styles.managers}>
                                                        <h5>
                                                         Hiring Managers
                                                        </h5>
                                                        <div>
                                                        <span>
                                                            Ahm Hire1    
                                                        </span>
                                                        <span>
                                                        Hm sadeq
                                                        </span>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={15} >
                                                    <div className={styles.cardRightSide}>
                                                        <span className={styles.rightSideSpan1}>
                                                            Current Requisition Status
                                                        </span>
                                                        <span className={styles.rightSideSpan2}>
                                                            Not Requested
                                                        </span>
                                                        <span className={styles.rightSideSpan3}>
                                                            View Details
                                                        </span>
                                                    </div>
                                                    <div className={styles.infoDiv} >
                                                        <div className={styles.info}>
                                                            <h5>
                                                                1
                                                            </h5>
                                                            <span>
                                                                Total Budget Vacancies
                                                            </span>
                                                        </div>
                                                        <div className={styles.info}>
                                                            <h5 className={styles.open}>
                                                                1
                                                            </h5>
                                                            <span>
                                                                Vacancies still Open
                                                            </span>
                                                        </div>
                                                        <div className={styles.info}>
                                                            <h5 className={styles.filled}>
                                                                0
                                                            </h5>
                                                            <span>
                                                                Vacancies Filled
                                                            </span>
                                                        </div>
                                                    </div>
                                                   
                                                </Col>
                                            </Row>
                                        </Card>
                                        <Card title={<div>
                                            <span className={styles.span1}>
                                                #95:
                                            </span>
                                            <span
                                                className={styles.span2}>Sales Manager
                                            </span>
                                        </div>}
                                            bordered={false}
                                            extra={
                                                <div className={styles.buttons}>
                                                    <ConfigProvider
                                                        theme={{
                                                            token: {
                                                                colorPrimary: '#7b67fe',
                                                            },
                                                        }} >
                                                        <Button type="primary" className={styles.rqsBtn}><span>Request Job</span></Button>
                                                    </ConfigProvider>
                                                    <Button className={styles.iconsBtn} icon={<i className="ri-more-2-fill"></i>} />
                                                    <Button className={styles.iconsBtn} icon={<i className="ri-pencil-fill"></i>} />
                                                    <Button danger className={styles.iconsBtn} icon={<i className="ri-delete-bin-line"></i>} />

                                                </div>} >
                                            <Row className={styles.cardContent}>
                                                <Col lg={6} >
                                                    <div className={styles.cardLeftSide}>
                                                        <div>
                                                            <h5>
                                                                Requisition Type
                                                            </h5>
                                                            <span>
                                                                New vacancy
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <h5 className={styles.org}>
                                                                Organization Structure
                                                            </h5>
                                                            <span>
                                                                sadeq org
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <h5>
                                                                Units
                                                            </h5>
                                                            <span>
                                                                unit1,unit2
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <Divider className={styles.divider} />
                                                    <div className={styles.managers}>
                                                        <h5>
                                                            Hiring Managers
                                                        </h5>
                                                        <div>
                                                            <span>
                                                                Ahm Hire1
                                                            </span>
                                                            <span>
                                                                Hm sadeq
                                                            </span>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={15} >
                                                    <div className={styles.cardRightSide}>
                                                        <span className={styles.rightSideSpan1}>
                                                            Current Requisition Status
                                                        </span>
                                                        <span className={styles.rightSideSpan2}>
                                                            Not Requested
                                                        </span>
                                                        <span className={styles.rightSideSpan3}>
                                                            View Details
                                                        </span>
                                                    </div>
                                                    <div className={styles.infoDiv} >
                                                        <div className={styles.info}>
                                                            <h5>
                                                                1
                                                            </h5>
                                                            <span>
                                                                Total Budget Vacancies
                                                            </span>
                                                        </div>
                                                        <div className={styles.info}>
                                                            <h5 className={styles.open}>
                                                                1
                                                            </h5>
                                                            <span>
                                                                Vacancies still Open
                                                            </span>
                                                        </div>
                                                        <div className={styles.info}>
                                                            <h5 className={styles.filled}>
                                                                0
                                                            </h5>
                                                            <span>
                                                                Vacancies Filled
                                                            </span>
                                                        </div>
                                                    </div>

                                                </Col>
                                            </Row>
                                        </Card>
                                    </div>
                                </div>
                            </Content>
                        </Layout>
                    </Content>
                </div>
            </Layout>
        </main>
    )
}
