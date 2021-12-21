import React, { Component } from 'react';
import ResponsiveAppBar from './AppBar';

const drawerWidth = 240;

class Layout extends Component {
    state = {
        open: false,
    }

    handleDrawerOpen = () => {
        this.setState({
            open: true,
        });
    }

    handleDrawerClose = () => {
        this.setState({
            open: false,
        });
    }

    render() {
        const { children } = this.props;
        const { open } = this.state;
        return (
            <section>
                <ResponsiveAppBar/>
                <article style={{ 
                    width: `calc(100% - ${open ? drawerWidth : 0}px)`,
                    marginLeft: open ? drawerWidth : 0,
                    transition: 'all 0.2s',
                    margin: '16px 0',
                }}>
                    {children}
                </article>
            </section>
        );
    }
}

export default Layout;