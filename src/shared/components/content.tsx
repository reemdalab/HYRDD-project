import styles from '@/styles/job.module.scss';
import { Button, Card, Col, ConfigProvider, Divider, Input, Layout, Row } from 'antd';
import 'remixicon/fonts/remixicon.css'
import { PlusOutlined, SearchOutlined, ReloadOutlined, FilterOutlined } from '@ant-design/icons';
import Link from 'next/link';
import MyCard from '@/shared/components/cards';
const { Content } = Layout;
import { NextPage } from 'next';
import Job from './card-component';
import React, { useState } from 'react';

interface Props {
    cards: MyCard[];
}
interface ListItem {
    text: string;
    link?: string;
    hasIcon?: boolean;
}
const listItems: ListItem[] = [
    { text: "Budget Vacancies", link: "/jobs" },
    { text: "Jobs Requisitions" },
    { text: "Published Jobs" },
    { text: "Interviews", hasIcon: true },
    { text: "Shared Profiles" },
    { text: "Shared Offers", hasIcon: true },
    { text: "Shared Applicants" }
];
const JobContent: NextPage<Props> = ({ cards }) => {
    const [selectedItem, setSelectedItem] = useState('');

    const handleItemClick = (item: ListItem) => {
        setSelectedItem(item.text);
    };

    console.log("CONTENT", cards)
    return (
        <Content className={styles.subContent}>
            <div className={styles.list} >
                <ul>
                    {listItems.map((item, index) => (
                        <React.Fragment key={index}>
                            <li
                                className={`${styles.sidebarItems} ${selectedItem === item.text ? styles.selectedItem : ''
                                    }`}
                                onClick={() => handleItemClick(item)}
                            >                                
                            {item.link ? (
                                    <Link href={item.link}>
                                        <span>{item.text}</span>
                                    </Link>
                                ) : (
                                    <span>{item.text}</span>
                                )}
                                {item.hasIcon && <PlusOutlined className={styles.icon} />}
                            </li>
                                <Divider className={styles.divider} />
                        </React.Fragment>
                    ))}
                </ul>
            </div>
            <div className={styles.subSubContent}>
                <div className={styles.contentHeader}>
                    <div className={styles.contentLeftSide}>
                        <Input placeholder="  Search" className={styles.search} />
                            <div>
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
                            </div>
                        
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
                    <Job cards={cards} />
                </div>
            </div>
        </Content>
    );

}
export default JobContent;

