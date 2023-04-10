
import React from 'react';
import { AppstoreOutlined, PlusOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import styles from '../../styles/job.module.scss';
import { Menu } from 'antd';
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
        key: 'sub1',
    },
    { type: 'divider' },
    {
        label: 'Job Requisition',
        key: 'sub1',
    },
    { type: 'divider' },
    {
        label: 'Published Job',
        key: 'sub1',
    },
    { type: 'divider' },
    {
        label: 'Interviews',
        key: 'sub1',
        children: [
            {
                label: 'Item 1',
                key: 'g1',
                children: [
                    { label: 'test1', key: '1' },
                    { label: 'test2', key: '2' },
                ],
                type: 'group',
            },
        ],
    },
    { type: 'divider' },
    {
        label: 'Shared Profiles',
        key: 'sub1',
    },
    { type: 'divider' },
    {
        label: 'Shared Offers',
        key: 'sub1',
        children: [
            { label: 'Option 5', key: '5' },
            { label: 'Option 6', key: '6' },
        ],
    },
    { type: 'divider' },
    {
        label: 'Shared Applicant',
        key: 'sub4',
    },
    { type: 'divider' },

];

const MenuItems: React.FC = () => {
    const onClick: CustomMenuProps['onClick'] = (e) => {
        console.log('click ', e);
    };

    return (
        <div>

            <Menu
                className={styles.menu}
                onClick={onClick}
                style={{ width: 220, borderRadius: '5px', marginLeft: '15px' }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                items={items}
                expandIcon={<PlusOutlined />}
            />
        </div>

    );
};

export default MenuItems;


