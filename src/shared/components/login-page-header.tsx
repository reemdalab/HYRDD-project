import { Col, Layout, Row, Button } from 'antd';
import styles from '../../styles/page.module.scss'
import Image from 'next/image'
import logo from '../../images/bloovo.jpg'
const { Header } = Layout;

const AuthPageHeader = () => {
    return (
        <Header className={styles.header}>
            <Row className={styles.row}>

                <Col className={styles.col} xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Image id="date-created" src={logo} className={styles.logo}
                        alt="dateCreated" width="190" height="45" />
                </Col>

                <Col className={styles.col} xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Button className={styles.lang}>العربية</Button>
                </Col>
            </Row>
        </Header>
    )
}

export default AuthPageHeader;