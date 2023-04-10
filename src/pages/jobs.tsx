import styles from '../styles/job.module.scss';
import { Layout } from 'antd';
import Headers from '@/shared/components/header'
import { useEffect, useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import Sidebar from '../shared/components/sidebar';
import MyCard from '@/shared/components/cards';
import { NextPage } from 'next';
const { Content } = Layout;

interface Props {
    mycard: MyCard[];
}
const Jobs: NextPage<Props> = ({ mycard }) => {
    const [mounted, setMounted] = useState(false);
   
    useEffect(() => setMounted(true), [])
    useEffect(() => {
        const myElement = document.querySelector(`.${styles.sidebarItems}`) as HTMLElement;
        if (myElement) {
            myElement.classList.add('sidebarItems');
        }
    });
    console.log("jobsreem", mycard);
    return (
        <main >
            <Layout style={{ visibility: !mounted ? 'hidden' : 'visible' }} className={styles.layout}>
                <Headers />
                <Content className={styles.content}>
                    <Layout>
                        <Sidebar mycard={mycard}>
                        </Sidebar>
                    </Layout>
                </Content>
            </Layout>
        </main>
    )
}

export default Jobs;

export const getStaticProps = async () => {
    const data = await import('./cards.json');
    console.log("data", data)
    const mycard = data.cards;
    return { props: { mycard } };
};
