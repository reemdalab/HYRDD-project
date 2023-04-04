import { Layout } from 'antd';
import styles from '../../styles/job.module.scss'
import Link from 'next/link';
import 'remixicon/fonts/remixicon.css'
import { useEffect } from 'react';
const { Sider } = Layout;

const Sidebar =()=>
{
    useEffect(() => {
        const myElement = document.querySelector(`.${styles.active}`) as HTMLElement;
        if (myElement) {
            myElement.classList.add('active');
        }
    }, []);

    return(
        <Sider className={styles.sider} width={180}
            collapsedWidth={0}
            trigger={null}
        >
            <ul>
                <li className={styles.active}>
                    <Link href="/" className={styles.item}>
                        <i className="ri-dashboard-3-fill"></i>
                        <span>
                            Dashboard
                        </span>
                    </Link>
                </li>
                <li className={styles.active}>
                    <i className="ri-briefcase-4-fill" ></i>
                    <Link href="/jobs" className={styles.item}>
                        <span>Jobs</span>
                    </Link>
                </li>
                <li className={styles.active}>
                    <i className="ri-folder-3-fill"></i>
                    <Link href="/" className={styles.item}>
                        <span>
                            Folders
                        </span>
                    </Link>
                </li>
                <li className={styles.active}>
                    <i className="ri-building-2-fill"></i>
                    <Link href="/">
                        <span>
                            Agencies
                        </span>
                    </Link>
                </li>
                <li className={styles.active}>
                    <i className="ri-user-2-fill" ></i>
                    <Link href="/">
                        <span>
                            Candidates Search
                        </span>
                    </Link>
                </li>
                <li className={styles.active}>
                    <i className="ri-settings-fill"></i>
                    <Link href="/">
                        <span>
                            Settings
                        </span>
                    </Link>
                </li>
                
            </ul>
        </Sider>
    )
}
export default Sidebar;