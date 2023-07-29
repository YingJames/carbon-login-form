import { useContext } from "react";
import { CurrentUserContext } from "../../App";
import { logout } from "../../auth";
import { Button } from "@carbon/react";

const Dashboard = () => {
    const {
        user,
        setUser
    } = useContext(CurrentUserContext);

    console.log(user);
    return (
        <>
            <h1>Dashboard, Hi {user.email}!</h1>
            <Button onClick={logout} >Log out</Button>
        </>
    );
};

export default Dashboard;