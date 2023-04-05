import styles from '../styles/job.module.scss';
import { Layout} from 'antd';
import Headers from '@/shared/components/header'
import { useEffect, useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import Sidebar from '@/shared/components/sidebar';
const { Content } = Layout;

export default function Jobs() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), [])
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
                            <Sidebar>

                            </Sidebar>
                        </Layout>
                    </Content>
                </div>
            </Layout>
        </main>
    )
}
