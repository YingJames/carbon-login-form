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
} from '@carbon/react';
import { Notification, UserAvatar } from '@carbon/react/icons';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <HeaderContainer
        render={({isSideNavExpanded, onClickSideNavExpand}) => (
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
                    <HeaderGlobalAction aria-label="Profile" tooltipAlignment="end">
                        <UserAvatar size={20} />
                    </HeaderGlobalAction>
                </HeaderGlobalBar>
            </Header>
        )}
    />
);

export default Navbar;