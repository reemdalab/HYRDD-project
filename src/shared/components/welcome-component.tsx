import styles from '../../styles/page.module.scss'
import bg from '../../images/bg-login.png'
import { Space, Typography } from 'antd'
import Link from "next/link";
import { FormattedMessage, useIntl } from "react-intl";

const { Title, Text } = Typography;

interface Props {
    dir: string;
}
const Welcome = ({dir}:Props) =>
{
return(
        <Space direction='vertical'  className={styles.welcomeDiv}>
            <Title level={1} className={styles.text} > <FormattedMessage id="hi" /> <br/> <FormattedMessage id="welcome" /> <br/>
                <p className={styles.hyrdd} > <FormattedMessage id="hyrdd"/> </p></Title>
            <Text className={styles.p}> <FormattedMessage id="Reg" />
                <Link className={styles.register} href={'/'}> <FormattedMessage id="here" /></Link>
            </Text>
        </Space>
)
}
export default Welcome;