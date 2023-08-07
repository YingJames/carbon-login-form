import './_navbar.scss'
import {
    Header,
    HeaderContainer,
    HeaderName,
    HeaderNavigation,
    HeaderMenuButton,
    HeaderMenuItem,
    HeaderGlobalBar,
    HeaderGlobalAction,
    SkipToContent,
    SideNav,
    SideNavItems,
    HeaderSideNavItems,
    PopoverContent, Button
} from '@carbon/react';
import { Notification, UserAvatar } from '@carbon/react/icons';
import { Link } from 'react-router-dom';
import CustomPopover from "../../molecules/CustomPopover/";
import { logout } from "../../../auth";
import './_navbar.scss';


const Navbar = () => {
    return (
        <HeaderContainer
            render={({ isSideNavExpanded, onClickSideNavExpand }) => (
                <Header aria-label="Carbon Tutorial">
                    <SkipToContent />
                    <HeaderMenuButton
                        aria-label="Open menu"
                        onClick={onClickSideNavExpand}
                        isActive={isSideNavExpanded}
                    />
                    <HeaderName as={Link} to="/" prefix="">
                        Carbon Login Form App
                    </HeaderName>
                    <HeaderNavigation aria-label="Carbon Tutorial">
                        <HeaderMenuItem as={Link} to="/repos">Repositories</HeaderMenuItem>
                    </HeaderNavigation>
                    <SideNav
                        aria-label="Side navigation"
                        expanded={isSideNavExpanded}
                        isPersistent={false}
                    >
                        <SideNavItems>
                            <HeaderSideNavItems>
                                <HeaderMenuItem as={Link} to="/repos">Repositories</HeaderMenuItem>
                            </HeaderSideNavItems>
                        </SideNavItems>
                    </SideNav>
                    <HeaderGlobalBar>
                        <HeaderGlobalAction aria-label="Notifications" tooltipAlignment="center">
                            <Notification size={20} />
                        </HeaderGlobalAction>

                        <CustomPopover align={'bottom-right'}>
                            <HeaderGlobalAction aria-label="Account" tooltipAlignment="end">
                                <UserAvatar size={20} />
                            </HeaderGlobalAction>
                            <PopoverContent>
                                <div className="popover-content">
                                    <p className="popover-title">Available storage</p>
                                    <p className="popover-details">
                                        This server has 150 GB of block storage remaining.
                                    </p>
                                    <Button onClick={logout}>Log out</Button>
                                </div>
                            </PopoverContent>
                        </CustomPopover>
                    </HeaderGlobalBar>
                </Header>
            )}
        />
    );
};

export default Navbar;