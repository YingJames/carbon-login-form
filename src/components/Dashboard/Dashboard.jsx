import { useContext, useState } from "react";
import { CurrentUserContext } from "../../App";
import { logout } from "../../auth";
import { Button, Checkbox, Content, Popover, PopoverContent, Theme } from "@carbon/react";
import Navbar from "../organisms/Navbar";
import './_dashboard.scss'
import RadioButton from "@carbon/react/es/components/RadioButton/RadioButton";
import RadioButtonGroup from "@carbon/react/es/components/RadioButtonGroup/RadioButtonGroup";

const Dashboard = () => {
    const { user } = useContext(CurrentUserContext);


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