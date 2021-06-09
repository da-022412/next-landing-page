import { Button, Divider, Grid } from '@material-ui/core';
import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Image from 'next/image';

const Nav = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <nav className='nav'>
            <Grid container alignItems='center' justify='flex-end' spacing={1}>
                <Grid item>
                    <Button aria-controls="action-menu" aria-haspopup="true" onClick={handleClick}>
                        Class Actions<span class="material-icons-outlined">arrow_drop_down</span>
                    </Button>
                    <Menu
                        id='action-menu'
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem><strong><a href='https://abingtonlaw.com/consumer-protection-class-action-lawsuits.html'>Consumer Protection:</a></strong></MenuItem>
                        <MenuItem>iPhone Liquid Damage</MenuItem>
                        <MenuItem>Rust Oleum</MenuItem>
                        <MenuItem>The Retail Equation</MenuItem>
                        <Divider />
                        <MenuItem><strong>Data Security:</strong></MenuItem>
                        <MenuItem>ABS</MenuItem>
                        <MenuItem>Accellion</MenuItem>
                        <MenuItem>Artech</MenuItem>
                        <MenuItem>Ascend Clinical</MenuItem>
                        <MenuItem>Auris Health</MenuItem>
                        <MenuItem>Cense</MenuItem>
                        <MenuItem>Danaher</MenuItem>
                        <MenuItem>Flagstar Bank</MenuItem>
                        <MenuItem>Health Net</MenuItem>
                        <MenuItem>Kroger</MenuItem>
                        <MenuItem>MEDNAX</MenuItem>
                        <MenuItem>R1 RCM</MenuItem>
                        <MenuItem>RadNet</MenuItem>
                        <MenuItem>SITA</MenuItem>
                        <MenuItem>Stanford</MenuItem>
                        <MenuItem>Universal Health Services</MenuItem>
                        <MenuItem>Verkada</MenuItem>
                        <MenuItem>Warner Music</MenuItem>
                        <MenuItem>Washington Auditor</MenuItem>
                        <Divider />
                        <MenuItem><strong>Current Settlements:</strong></MenuItem>
                        <MenuItem>SiriusXM Lifetime Subscription</MenuItem>
                    </Menu>
                </Grid>
                <Grid item>
                    <Button aria-controls="prop-menu" aria-haspopup="true" onClick={handleClick}>
                        Intellectual Property<span class="material-icons-outlined">arrow_drop_down</span>
                    </Button>
                    <Menu
                        id='prop-menu'
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </Grid>
                <Grid item>
                    <Button aria-controls="contact-menu" aria-haspopup="true" onClick={handleClick}>
                        Contact<span class="material-icons-outlined">arrow_drop_down</span>
                    </Button>
                    <Menu
                        id='contact-menu'
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </Grid>
                <Grid item>
                    <span class="material-icons-outlined">facebook</span>
                </Grid>
                <Grid item>
                    <Image
                        src='/images/twitter-brands.svg'
                        width={24}
                        height={24}
                    />
                </Grid>
            </Grid>
        </nav>
    );
}

export default Nav;