import { useContext } from "react";
import { CurrentUserContext } from "../../App";
import { logout } from "../../auth";
import { Button, Content, Theme} from "@carbon/react";
import Navbar from "../organisms/Navbar";
import './_dashboard.scss'

const Dashboard = () => {
    const {
        user,
        setUser
    } = useContext(CurrentUserContext);

    console.log(user);
    return (
        <>

            <Theme theme={'g90'}>
                <Navbar />
            </Theme>


            <Content className=".cds--content">
                <h1>Dashboard, Hi {user.displayName}!</h1>
                <Button onClick={logout}>Log out</Button>
            </Content>

        </>
    );
};

export default Dashboard;