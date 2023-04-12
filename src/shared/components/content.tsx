import styles from '@/styles/job.module.scss';
import { Button, Card, Col, ConfigProvider, Divider, Input, Layout, Menu, MenuProps, Row } from 'antd';
import 'remixicon/fonts/remixicon.css'
import { PlusOutlined, SearchOutlined, ReloadOutlined, FilterOutlined } from '@ant-design/icons';
import MyCard from '@/shared/components/cards';
const { Content } = Layout;
import { NextPage } from 'next';
import Job from './card-component';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import List from './menu';

interface Props {
    cards: MyCard[];
}
interface ListItem {
    text: string;
    link?: string;
    hasIcon?: boolean;
}

const JobContent: NextPage<Props> = ({ cards }) => {
    const onClick: CustomMenuProps['onClick'] = (e) => {
        console.log('click ', e);
    };
    const handleLanguageSwitch = (lang: string) => {
        i18n.changeLanguage(lang);
    };
    const { t, i18n } = useTranslation();
    const [lang, setLang] = useState(i18n.language);
    const toggleLanguage = () => {
        const newLang = lang === 'en' ? 'ar' : 'en';
        setLang(newLang);
        i18n.changeLanguage(newLang);
    };
    const [selectedItem, setSelectedItem] = useState('');

    const handleItemClick = (item: ListItem) => {
        setSelectedItem(item.text);
    };

    type CustomMenuProps = MenuProps & {
        items: MenuProps['items']
    };
    type MenuItem = Required<MenuProps>['items'][number];

    function getItem(
        label: React.ReactNode,
        key: React.Key,
        icon?: React.ReactNode,
        children?: MenuItem[],
        type?: 'group',
    ): MenuItem {
        return {
            key,
            icon,
            children,
            label,
            type,
        } as MenuItem;
    }

    const items: MenuProps['items'] = [
        {
            label: 'Budget Vacancies',
            key: '1',
            className: 'item'

        },
        { type: 'divider' },
        {
            label: 'Job Requisition',
            key: '2',
            className: 'item'

        },
        { type: 'divider' },
        {
            label: 'Published Job',
            key: '3',
            className: 'item'

        },
        { type: 'divider' },
        {
            label: 'Interviews',
            key: '4',
            children: [
                {
                    key: 'g1',
                    children: [
                        { label: 'test1', key: '16' },
                        { label: 'test2', key: '26' },
                    ],
                    type: 'group',
                },
            ],
            className: 'item'

        },
        { type: 'divider' },
        {
            label: 'Shared Profiles',
            key: '5',
            className: 'item'

        },
        { type: 'divider' },
        {
            label: 'Shared Offers',
            key: '6',
            children: [
                { label: 'Option 5', key: '55' },
                { label: 'Option 6', key: '66' },
            ],
            className: 'item'

        },
        { type: 'divider' },
        {
            label: 'Shared Applicant',
            key: '7',
            className: 'item'
        },
        { type: 'divider' },

    ];


    console.log("CONTENT", cards)
    return (
        <Content className={styles.subContent}>
            <Menu
                className='menu'
                onClick={onClick}
                style={{ width: 220, borderRadius: '5px', marginLeft: '15px' }}
                mode="inline"
                items={items}
                expandIcon={<PlusOutlined />}
            />
           
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

