import Link from "next/link";
import { useRouter } from "next/router";

const ProfilePage = () => {
    const router = useRouter();
    const { username,email,id} = router.query;

    return (

        <div style={{justifyContent:'center',alignItems:'center',display:'flex',flexDirection:'column',
            border:'1px solid #8467ff ' }}>
            <h1 style={{ color:'#8467ff'}}>Profile Page</h1>
            <h2>Welcome, {username}</h2>
            <h3>Email : {email}</h3>
            <h4>ID : - {id} -</h4>
        </div>
    );
};

export default ProfilePage;
