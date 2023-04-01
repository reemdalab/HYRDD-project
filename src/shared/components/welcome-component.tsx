import Image from 'next/image'
import styles from '../../styles/page.module.scss'
import meeting from '../../images/meeting.png'
import approved from '../../images/approved.png'
import appointment from '../../images/appointment.png'
import cv from '../../images/curriculum-vitae.png'
import profiles from '../../images/profiles.png'
import profile from '../../images/profile.png'
import confirm from '../../images/confirmation.png'
import network from '../../images/group.png'
import village from '../../images/village.png'
import conv from '../../images/conversation.png'
import dart from '../../images/darts-game.png'
import { Col, Row, Button } from 'antd'
const Welcome =()=>
{
return(
    <Col className={styles.colContent} xs={24} sm={24} md={12} lg={12} xl={12}>
        <div className={styles.grid}>

            <Row gutter={[60, 32]}>
                <Col span={6} >
                    <Image className={styles.img} id="img" src={approved}
                        alt="img" width="50" height="45" />
                </Col>
                <Col span={6} >
                    <Image className={styles.img} id="img" src={meeting}
                        alt="img" width="50" height="45" />
                </Col>
                <Col span={6} >
                    <Image className={styles.img} id="img" src={appointment}
                        alt="img" width="50" height="45" />
                </Col>
                <Col span={6} >
                    <Image className={styles.img} id="img" src={approved}
                        alt="img" width="50" height="45" />
                </Col>
                <Col span={6} >
                    <Image className={styles.img} id="img" src={cv}
                        alt="img" width="50" height="45" />
                </Col>
                <Col span={6} >
                    <Image className={styles.img} id="img" src={profiles}
                        alt="img" width="50" height="45" />
                </Col>
                <Col span={6} >
                    <Image className={styles.img} id="img" src={profile}
                        alt="img" width="50" height="45" />
                </Col>
                <Col span={6} >
                    <Image className={styles.img} id="img" src={confirm}
                        alt="img" width="50" height="45" />
                </Col>
                <Col span={6} >
                    <Image className={styles.img} id="img" src={network}
                        alt="img" width="50" height="45" />
                </Col>
                <Col span={6} >
                    <Image className={styles.img} id="img" src={village}
                        alt="img" width="50" height="50" />
                </Col>
                <Col span={6} >
                    <Image className={styles.img} id="img" src={conv}
                        alt="img" width="50" height="45" />
                </Col>
                <Col span={6} >
                    <Image className={styles.img} id="img" src={dart}
                        alt="img" width="50" height="48" />
                </Col>
            </Row>
        </div>
        <div className={styles.welcomeDiv}>
            <h1 className={styles.text} >Hi! <br />Welcome back to<br /><span className={styles.hyrdd} >HYRDD!</span></h1>
            <p className={styles.p}>if you don<span>&apos;</span>t have an account, you can
                <Button className={styles.register}
                    type="link" >Register here!</Button>
            </p>
        </div>
    </Col>
)
}
export default Welcome;