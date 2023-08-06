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
    Popover,
    PopoverContent
} from '@carbon/react';
import { Notification, UserAvatar } from '@carbon/react/icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ProfilePopover = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Popover
            open={isOpen}
            align='bottom-right'
            isTabTip
            onKeyDown={(event) => {
                if (event.key === "Escape") {
                    setIsOpen(false);
                }
            }}
            onRequestClose={() => setIsOpen(false)}
        >

            <HeaderGlobalAction
                aria-label="Account"
                tooltipAlignment="end"
                onClick={() => setIsOpen(!isOpen)}
            >
                <UserAvatar size={20} />
            </HeaderGlobalAction>

            <PopoverContent>
                <div className="popover-example-content">
                    <p className="popover-title">Available storage</p>
                    <p className="popover-details">
                        This server has 150 GB of block storage remaining.
                    </p>
                </div>
            </PopoverContent>
        </Popover>
    );
};
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

                        <ProfilePopover />
                    </HeaderGlobalBar>
                </Header>
            )}
        />
    );
};

export default Navbar;