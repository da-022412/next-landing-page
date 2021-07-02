import { Box, Button, Container, Grid } from '@material-ui/core';

const content = {
    logo: 'Tyson Stockholder Lawsuit',
};

const Header = () => {
    if (typeof window !== 'undefined') {
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById('header').style.top = '0';
            } else {
                document.getElementById('header').style.top = '-100px';
            }
            prevScrollpos = currentScrollPos;
        };
    }

    return (
        <Box component='header' className='header is-white' id='header'>
            <Container maxWidth='lg'>
                <Box className='header-wrap'>
                    <Grid container alignItems='center' justify='space-between'>
                        <Grid item xs={12} md={6}>
                            <Box className='logo-wrap'>
                                <h3 className='logo'>{content.logo}</h3>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box className='header-cta'>
                                <a href='#form'>
                                    <Button variant='outlined'>
                                        Continue to Free Case Review
                                    </Button>
                                </a>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default Header;
