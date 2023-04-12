import logo from '@/images/bloovo.jpg'
import person from '@/images/person.png'
import styles from '@/styles/job.module.scss'
import Image from 'next/image'
import { Layout, Button, Dropdown, MenuProps } from 'antd';
import { BellOutlined, QuestionCircleOutlined, CaretDownOutlined,
         UserOutlined, LogoutOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router';
import Link from 'next/link';
const { Header } = Layout;

const Headers=()=>
{
    const router = useRouter();
    const { username , email , id} = router.query;

    const handleClick = () => {
        router.push({
            pathname: "/profile",
            query: {
                username: username,
                email:email,
                id:id
            }
        });
    };
    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <a rel="noopener noreferrer" onClick={handleClick}>
                    Profile
                </a>
            ),
            icon: <UserOutlined />

        },
        {
            key: '2',
            label: (
                <Link rel="noopener noreferrer" href="/" >
                    Log out
                </Link>
            ),
            icon: <LogoutOutlined />
        }
    ];
    return(
        <Header className={styles.header}>
            <Image id="logo" src={logo} className={styles.logo}
                alt="logo" width="200" height="45" />
            <div className={styles.details}>
                <Button className={styles.lang}>العربية</Button>
                <BellOutlined className={styles.margin} />
                <QuestionCircleOutlined className={styles.infoIcon} />
                <p>{username}</p>
                <Image id="user" src={person} className={styles.user}
                    alt="user" height="26" width="27" />
                <Dropdown className={styles.dropDownBtn} menu={{ items }}>
                    <a onClick={(e) => e.preventDefault()}>
                        <CaretDownOutlined className={styles.DropdownIcon}/>
                    </a>
                </Dropdown>
            </div>
        </Header>
    )

}
export default Headers;