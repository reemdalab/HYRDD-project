import logo from '../../images/bloovo.jpg'
import person from '../../images/person.png'
import styles from '../../styles/job.module.scss'
import Image from 'next/image'
import { Layout ,Button } from 'antd';
import { BellOutlined, QuestionCircleOutlined, CaretDownOutlined } from '@ant-design/icons'

const { Header } = Layout;
const Headers=()=>
{
    return(
        <Header className={styles.header}>
            <Image id="logo" src={logo} className={styles.logo}
                alt="logo" width="195" height="45" />
            <div className={styles.details}>
                <Button className={styles.lang}>العربية</Button>
                <BellOutlined className={styles.margin} />
                <QuestionCircleOutlined className={styles.infoIcon} />
                <p> Admin Admin Admin</p>
                <Image id="user" src={person} className={styles.user}
                    alt="user" height="26" width="27" />
                <CaretDownOutlined className={styles.DropdownIcon} />
            </div>
        </Header>
    )

}
export default Headers;